mongoose = global.mongoose
create = global.create

const Account = require('./models/Account')
const Cars = require('./models/Cars')

const bcrypt = require('bcrypt')

const saltRounds = 12

class Database {
  constructor () {
    mongoose.connect('mongodb://127.0.0.1:27017/woc')

    console.log('Connected to MongoDB!')

    this.db = mongoose.connection
    this.db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  }

  async handleFlashLogin (req, res) {
    let username = req.body.username
    let password = req.body.password

    if (username == undefined && password == undefined) {
      username = req.query.username
      password = req.query.password
    }

    const validCredentials = await this.verifyCredentials(username, password)
    let errorResp = ''

    const root = create().ele('result')

    const success = root.ele('success')
    success.txt(validCredentials)

    const err = root.ele('error')

    if (!validCredentials) {
      errorResp = 'PARAM_ERROR'
    }

    err.txt(errorResp)

    const input = root.ele('input')
    input.ele('cookieValue')

    input.ele('loginType').txt('hard')

    root.ele('token')
    root.ele('type').txt('hard')
    root.ele('banURL')

    root.ele('username').txt(username)

    const xml = root.end({ prettyPrint: true })
    res.send(xml)
  }

  async handleAccountLogin (req, res) {
    let username = req.body.username
    let password = req.body.password

    if (username == undefined && password == undefined) {
      username = req.query.username
      password = req.query.password
    }

    const validCredentials = await this.verifyCredentials(username, password)
    const accountId = await this.getAccountIdFromUser(username)

    if (validCredentials) {
      const ses = req.session
      ses.username = username
      ses.success = '1'
      ses.status = 'logged_in_player'
      ses.logged = true
      ses.userId = accountId
    }

    const root = create().ele('AccountLoginResponse')
    const success = root.ele('success')
    success.txt(validCredentials)

    root.ele('account', { account_id: accountId })

    const xml = root.end({ prettyPrint: true })
    res.send(xml)
  }

  async isUsernameAvailable (username) {
    const account = await Account.exists({ username })

    if (account) {
      return false
    }

    return true
  }

  async doesCarExist (accountId) {
    const car = await Cars.findOne({ _id: accountId })

    if (car) {
      return true
    }

    return false
  }

  async retrieveCar (accountId) {
    const car = await Cars.findOne({ _id: accountId })

    if (car) {
      return car
    }

    return false
  }

  async retrieveCarData (accountId) {
    const car = await this.retrieveCar(accountId)

    if (car) {
      return car.serializedData
    }

    return false
  }

  async getAccountIdFromUser (username) {
    const account = await this.retrieveAccount(username)

    if (account) {
      return account._id
    }

    return -1
  }

  async retrieveAccount (username) {
    const account = await Account.findOne({ username })

    return account
  }

  async verifyCredentials (username, password) {
    const account = await this.retrieveAccount(username)

    if (!account) {
      return false
    }

    return bcrypt.compareSync(password, account.password)
  }

  async createCar (accountId) {
    const playerId = await Cars.countDocuments({}) + 1

    car = new Racecar()

    car.userId = accountId
    car.playerId = playerId
    car.racecarId = playerId // TODO: Is this okay?

    const serialized = libamf.serialize(car, libamf.ENCODING.AMF3)

    // Store out car.
    var car = new Cars({
      _id: accountId,
      serializedData: serialized
    })

    await car.save()

    return true
  }

  async createAccount (username, password) {
    if (!await this.isUsernameAvailable(username)) {
      // Sanity check
      return false
    }

    const accountId = await Account.countDocuments({}) + 1
    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    // Store the account object.
    const account = new Account({
      _id: accountId,
      username,
      password: hashedPassword
    })

    await account.save()

    return true
  }
}

module.exports = Database

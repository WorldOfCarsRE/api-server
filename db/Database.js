mongoose = global.mongoose
create = global.create
libamf = global.libamf

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

  async doesCarExist (identifier) {
    // TODO: Messy, find better way of handling?
    const car = await Cars.findOne({ _id: identifier })
    const carByDislId = await Cars.findOne({ dislId: identifier })
    const carByPlayerId = await Cars.findOne({ playerId: identifier })

    if (car || carByDislId || carByPlayerId) {
      return true
    }

    return false
  }

  async retrieveCar (identifier) {
    // TODO: Same as above function.
    const car = await Cars.findOne({ _id: identifier })
    const carByDislId = await Cars.findOne({ dislId: identifier })
    const carByPlayerId = await Cars.findOne({ playerId: identifier })

    if (car) {
      return car
    } else if (carByDislId) {
      return carByDislId
    } else if (carByPlayerId) {
      return carByPlayerId
    }

    return false
  }

  async retrieveCarData (identifier) {
    const car = await this.retrieveCar(identifier)

    if (car) {
      return car.carData
    }

    return false
  }

  async getAccountIdFromUser (username) {
    const account = await this.retrieveAccountFromUser(username)

    if (account) {
      return account._id
    }

    return -1
  }

  async getUserNameFromAccountId (accountId) {
    const account = await this.retrieveAccountFromIdentifier(accountId)

    if (account) {
      return account.username
    }

    return ''
  }

  async retrieveAccountFromIdentifier (identifier) {
    return await Account.findById({ _id: identifier })
  }

  async retrieveAccountFromUser (username) {
    return await Account.findOne({ username })
  }

  async verifyCredentials (username, password) {
    const account = await this.retrieveAccountFromUser(username)

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
    const data = libamf.deserialize(serialized, libamf.ENCODING.AMF3)

    // Store our car.
    var car = new Cars({
      _id: accountId,
      carData: data,
      ownerAccount: await this.getUserNameFromAccountId(accountId),
      dislId: 0,
      playerId: 0,
      racecarId: 0
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

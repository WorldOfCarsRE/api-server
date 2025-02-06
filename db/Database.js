/* global mongoose: writeable */
/* global create: writeable */
/* global libamf: writeable */
/* global Racecar: writeable */

mongoose = global.mongoose
create = global.create
libamf = global.libamf
Racecar = global.Racecar

const Account = require('./models/Account')
const Cars = require('./models/Cars')
const CarPlayerStatus = require('./models/CarPlayerStatus')
const RedeemableCodes = require('./models/RedeemableCodes')

const bcrypt = require('bcrypt')

const axios = require('axios').default

const saltRounds = 12

const userAgent = 'Sunrise Games - World of Cars Online API'

class Database {
  constructor () {
    this.connect()
  }

  async connect () {
    await mongoose.connect('mongodb://127.0.0.1:27017/woc')

    console.log('Connected to MongoDB!')

    this.db = mongoose.connection

    // Create id sequence
    const doIdSequence = await this.db.collection('globals').findOne({ _id: 'doid' })
    if (!doIdSequence) {
      console.log('Creating doid sequence...')
      this.db.collection('globals').insertOne({
        _id: 'doid',
        seq: 100000000
      })
    }

    this.db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  }

  async getNextDoId () {
    const ret = await this.db.collection('globals').findOneAndUpdate(
      { _id: 'doid' }, // filter
      { $inc: { seq: 1 } }, // update
      { returnOriginal: true } // options
    )
    console.log(ret)
    return ret.seq
  }

  async handleFlashLogin (req, res) {
    let username = req.body.username
    let password = req.body.password
    let loginType = req.body.loginType

    if (username === undefined && password === undefined) {
      username = req.query.username
      password = req.query.password
    }

    if (username !== undefined) {
      username = username.toLowerCase()
    }

    if (loginType === undefined) {
      loginType = req.query.loginType
    }

    let validCredentials
    let accountId
    if (loginType === 'swid') {
      const ses = req.session
      if (ses.logged && ses.username && ses.userId) {
        validCredentials = true
        accountId = ses.userId
        username = ses.username
      }
    } else {
      validCredentials = await this.verifyCredentials(username, password)
      accountId = await this.getAccountIdFromUser(username)
    }
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

    const results = root.ele('results')
    results.ele('username').txt(username)
    results.ele('userId').txt(accountId)

    const xml = root.end({ prettyPrint: true })
    res.setHeader('content-type', 'text/xml')
    res.send(xml)
  }

  async handleAccountLogin (req, res) {
    let username = req.body.username
    let password = req.body.password

    if (username === undefined && password === undefined) {
      username = req.query.username
      password = req.query.password
    }

    if (username !== undefined) {
      username = username.toLowerCase()
    }

    const validCredentials = await this.verifyCredentials(username, password)
    const accountId = await this.getAccountIdFromUser(username)
    const puppetId = await this.getPuppetFromAccountId(accountId)

    if (validCredentials) {
      const ses = req.session
      ses.username = username
      ses.success = '1'
      ses.status = 'logged_in_player'
      ses.logged = true
      ses.userId = accountId
      ses.puppetId = puppetId
    }

    const root = create().ele('AccountLoginResponse')
    const success = root.ele('success')
    success.txt(validCredentials)

    root.ele('account', { account_id: accountId })

    const xml = root.end({ prettyPrint: true })
    res.setHeader('content-type', 'text/xml')
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
    const car = await Cars.findOne({ $or: [{ _id: identifier }, { accountId: identifier }, { racecarId: identifier }] })

    if (car) {
      return true
    }

    return false
  }

  async retrieveCar (identifier) {
    const car = await Cars.findOne({ $or: [{ _id: identifier }, { accountId: identifier }, { racecarId: identifier }] })

    if (car) {
      return car
    }

    return false
  }

  async retrieveCarByOwnerAccount (owner) {
    const car = await Cars.findOne({ ownerAccount: owner })

    if (car) {
      return car
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

  async retrieveCarPlayerStatus (identifier) {
    const status = await CarPlayerStatus.findById(identifier)

    if (status) {
      return status
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

  async getPuppetFromAccountId (accountId) {
    const account = await this.retrieveAccountFromIdentifier(accountId)

    if (account) {
      return account.puppet
    }

    return 0
  }

  async retrieveAccountData (username) {
    const data = new URLSearchParams()

    data.append('username', username)
    data.append('secretKey', process.env.API_TOKEN)

    const request = await axios.post('https://sunrise.games/api/internal/Account.php', data, {
      headers: {
        'Accept-Encoding': 'application/json',
        'User-Agent': userAgent
      }
    })
    return request.data
  }

  async checkLogin (username, password) {
    const data = new URLSearchParams()

    data.append('username', username)
    data.append('password', password)
    data.append('serverType', 'World of Cars Online')

    return await axios.post('https://sunrise.games/api/login/alt/', data, {
      headers: {
        'Accept-Encoding': 'application/json',
        'User-Agent': userAgent
      }
    })
  }

  async retrieveAccountFromIdentifier (identifier) {
    return await Account.findById(identifier)
  }

  async retrieveAccountFromUser (username) {
    return await Account.findOne({ username })
  }

  async retrieveAccountFromCarId (carId) {
    return await Account.findOne({ $or: [{ playerId: carId }, { racecarId: carId }] })
  }

  async verifyCredentials (username, password) {
    let account = await this.retrieveAccountFromUser(username)

    if (!account) {
      // Check if its in the Sunrise Games database.
      const res = await this.checkLogin(username, password)
      const errorCode = res.data.errorCode

      if (errorCode === 0) {
        // Create a brand new account
        account = await this.createAccount(username, password)
      } else {
        return false
      }
    }

    const match = bcrypt.compareSync(password, account.password)

    if (!match) {
      // Check if its in the Sunrise Games database.
      const res = await this.checkLogin(username, password)
      const errorCode = res.data.errorCode

      if (errorCode === 0) {
        // Our main Sunrise Games password changed, the one in the database is outdated.
        // Generate new hash for bcrypt
        account.password = bcrypt.hashSync(password, saltRounds)
        await account.save()
      } else {
        return false
      }
    }

    return match
  }

  async createCar (accountId) {
    const account = await this.retrieveAccountFromIdentifier(accountId)
    const carObj = new Racecar()

    const serialized = libamf.serialize(carObj, libamf.ENCODING.AMF3)
    const data = libamf.deserialize(serialized, libamf.ENCODING.AMF3)

    // Store our car.
    const car = new Cars({
      _id: await this.getNextDoId(),
      carData: data,
      ownerAccount: await this.getUserNameFromAccountId(accountId),
      accountId,
      racecarId: await this.getNextDoId()
    })

    // AMF data
    car.carData.userId = accountId
    car.carData.playerId = car._id
    car.carData.racecarId = car.racecarId

    const saved = await car.save()

    // Create a new PlayerStatus for this car
    const status = new CarPlayerStatus({
      _id: await this.getNextDoId(),
      ownerAccount: car.ownerAccount,
      accountId
    })
    await status.save()

    // Save the information into the account.
    account.playerId = car._id
    account.racecarId = car.racecarId
    account.statusId = status._id
    await account.save()

    return saved.carData
  }

  async createAccount (username, password) {
    if (!await this.isUsernameAvailable(username)) {
      // Sanity check
      return false
    }

    // Store the account object.
    const account = new Account({
      _id: await this.getNextDoId(),
      username,
      password: bcrypt.hashSync(password, saltRounds),
      puppet: 0
    })

    return await account.save()
  }

  async checkCodeRedeemedByUser (username, code) {
    const account = await this.retrieveAccountFromUser(username)

    if (account) {
      if (account.codesRedeemed === undefined) {
        // Add code redemption array to Account object
        account.codesRedeemed = {}
        await account.save()
      }

      return account.codesRedeemed.includes(code)
    }

    return false
  }

  async setCodeAsRedeemedByUser (username, code) {
    const account = await this.retrieveAccountFromUser(username)

    if (account) {
      account.codesRedeemed.push(code)
      await account.save()
    }
  }

  async retrieveRedeemableCode (code) {
    const redeemableCode = await RedeemableCodes.findOne({ $and: [{ codeName: code }, { expirationDate: { $gt: new Date() } }] })

    if (redeemableCode) {
      return redeemableCode
    }

    return false
  }
}

module.exports = Database

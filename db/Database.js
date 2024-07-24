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

const bcrypt = require('bcrypt')

const axios = require('axios').default

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

  isCarFaulty (car) {
    if (car.carData == undefined || car.carData.carName == "" || car.carData.carNumber == 0) {
      return true
    }
    return false
  }

  async doesCarExist (identifier) {
    const car = await Cars.findOne({ $or: [{ _id: identifier }, { dislId: identifier }, { playerId: identifier }] })

    if (car) {
      // Check for faulty car data:
      if (this.isCarFaulty(car)) {
        console.log(`doesCarExist: ${car.ownerAccount}'s car is faulty!  Returning false.`)
        return false
      }
      return true
    }

    return false
  }

  async retrieveCar (identifier, checkifFaulty = true) {
    const car = await Cars.findOne({ $or: [{ _id: identifier }, { dislId: identifier }, { playerId: identifier }] })

    if (car) {
      if (!car.justCreated && checkifFaulty) {
        if (this.isCarFaulty(car)) {
          console.log(`retrieveCar: ${car.ownerAccount}'s car is faulty!  Returning false.`)
          return false
        }
      }
      return car
    }

    return false
  }

  async retrieveCarByOwnerAccount (owner) {
    const car = await Cars.findOne({ ownerAccount: owner })

    if (car) {
      if (this.isCarFaulty(car)) {
        console.log(`retrieveCarByOwnerAccount: ${car.ownerAccount}'s car is faulty!  Returning false.`)
        return false
      }
      return car
    }

    return false
  }

  async retrieveCarData (identifier, checkifFaulty = true) {
    const car = await this.retrieveCar(identifier)

    if (car) {
      if (!car.justCreated && checkifFaulty) {
        // Check for faulty car data:
        if (car.carData == undefined || car.carData.carName == "" || car.carData.carNumber == 0) {
          console.log(`retrieveCarData: ${car.ownerAccount}'s car is faulty!  Returning nothing.`)
          return false
        }
      }
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

  async retrieveAccountData (username) {
    const data = new URLSearchParams()

    data.append('username', username)
    data.append('secretKey', process.env.API_TOKEN)

    const request = await axios.post('https://sunrise.games/api/internal/Account.php', data, {
      headers: {
        'Accept-Encoding': 'application/json'
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
        'Accept-Encoding': 'application/json'
      }
    })
  }

  async retrieveAccountFromIdentifier (identifier) {
    return await Account.findById({ _id: identifier })
  }

  async retrieveAccountFromUser (username) {
    return await Account.findOne({ username })
  }

  async verifyCredentials (username, password) {
    let account = await this.retrieveAccountFromUser(username)

    if (!account) {
      // Check if its in the Sunrise Games database.
      const res = await this.checkLogin(username, password)
      const errorCode = res.data.errorCode

      if (errorCode === 0) {
        // Create a brand new account
        await this.createAccount(username, password)

        account = await this.retrieveAccountFromUser(username)
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
        account.save()
      } else {
        return false
      }
    }

    return match
  }

  async createCar (accountId) {
    let playerId = await Cars.countDocuments({}) + 1
    console.log(playerId)

    const carObj = new Racecar()

    const serialized = libamf.serialize(carObj, libamf.ENCODING.AMF3)
    const data = libamf.deserialize(serialized, libamf.ENCODING.AMF3)

    // Check for a faulty car if there is one and delete it.
    let car = await Cars.findOne({ $or: [{ _id: accountId }, { dislId: accountId }, { playerId: accountId }] })
    if (car) {
      if (this.isCarFaulty(car)) {
        console.log(`createCar: Deleting ${car.ownerAccount}'s faulty car.`)
        playerId = accountId
        await car.deleteOne()
      } else {
        console.log(`createCar: ${car.ownerAccount} attempted to re-create their car!`)
        return false
      }
    }

    // Store our car.
    car = new Cars({
      _id: accountId,
      carData: data,
      ownerAccount: await this.getUserNameFromAccountId(accountId),
      dislId: 0,
      playerId: playerId,
      racecarId: 0,
      justCreated: true
    })

    // These will get replaced by actual OTP database ids on login.
    car.carData.userId = accountId
    car.carData.playerId = playerId
    car.carData.racecarId = playerId // TODO: Is this okay?

    await car.save()

    return true
  }

  async createAccount (username, password) {
    if (!await this.isUsernameAvailable(username)) {
      // Sanity check
      return false
    }

    // Store the account object.
    const account = new Account({
      _id: await Account.countDocuments({}) + 1,
      username,
      password: bcrypt.hashSync(password, saltRounds)
    })

    await account.save()

    return true
  }
}

module.exports = Database

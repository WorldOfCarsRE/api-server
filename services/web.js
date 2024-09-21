/* global server:writable, create:writable */
/* global db, account:writeable */

server = global.server
create = global.create

const express = require('express')

const CryptoJS = require('crypto-js')

const loginQueue = []

server.app.get('/', (req, res) => {
  res.send('World of Cars API service.')
})

function verifyAuthorization (token) {
  return token === process.env.API_TOKEN
}

function generateRandomNumber () {
  return Math.floor(Math.random() * 101)
}

async function generateToken (username) {
  const accData = await db.retrieveAccountData(username)

  const data = {
    playToken: username,
    SpeedChatPlus: accData.SpeedChatPlus,
    OpenChat: accData.OpenChat,
    Member: accData.Member,
    Timestamp: Math.floor(new Date().getTime() / 1000) + 10 * 60,
    dislId: accData.dislId,
    accountType: accData.accountType,
    LinkedToParent: accData.LinkedToParent,
    token: '',
    Banned: accData.Banned,
    Terminated: accData.Terminated
  }

  const key = CryptoJS.enc.Hex.parse(process.env.TOKEN_KEY)
  const iv = CryptoJS.lib.WordArray.random(16) // Generate random IV (16 bytes)

  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })

  const ivBase64 = CryptoJS.enc.Base64.stringify(iv)
  const encryptedBase64 = encrypted.toString()

  return btoa(JSON.stringify({
    iv: ivBase64,
    data: encryptedBase64
  }))
}

async function handleWhoAmIRequest (req, res) {
  const ses = req.session

  let success = false
  let accountId = -1
  let userName = ''
  const speedChatPrompt = 'false'

  if (ses.success) {
    success = true
  }

  const root = create().ele('WhoAmIResponse')

  const item = root.ele('success')
  item.txt(success)

  const status = root.ele('status')
  const user = root.ele('username')

  if (ses.logged && ses.username && ses.userId) {
    status.txt('logged_in_player')
    user.txt(ses.username)

    accountId = ses.userId
    userName = ses.username

    // TODO: A way to toggle SpeedChat Plus, re-enable when ready
    // const accData = await db.retrieveAccountData(userName)
    // speedChatPrompt = `${Boolean(!accData.SpeedChatPlus)}`
  } else {
    status.txt('not_logged_in')
  }

  account = root.ele('account', { account_id: accountId })
  account.ele('first_name')
  account.ele('dname').txt(userName)
  account.ele('age').txt(0)
  account.ele('touAccepted').txt('basic')
  account.ele('access').txt('true')
  account.ele('speed_chat_prompt').txt(speedChatPrompt)

  root.ele('userTestAccessAllowed').txt('false')
  root.ele('testUser').txt('false')

  if (ses.puppetId) {
    root.ele('puppet_id').txt(ses.puppetId)
  }

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
}

server.app.get('/carsds/api/WhoAmIRequest', async (req, res) => {
  await handleWhoAmIRequest(req, res)
})

server.app.post('/carsds/api/WhoAmIRequest', async (req, res) => {
  await handleWhoAmIRequest(req, res)
})

server.app.get('/dxd/flashAPI/login', async (req, res) => {
  await db.handleFlashLogin(req, res)
})

server.app.post('/dxd/flashAPI/login', async (req, res) => {
  await db.handleFlashLogin(req, res)
})

server.app.post('/dxd/flashAPI/checkUsernameAvailability', async (req, res) => {
  const username = req.body.username
  const status = await db.isUsernameAvailable(username)

  const root = create().ele('response')
  root.ele('success').txt(status)

  if (!status) {
    // Specified username is taken, give some suggestions to choose from.
    const results = root.ele('results')

    const words = [
      'Amazing',
      'Cool',
      'Super',
      'Fantastic'
    ]

    const randomIndex = Math.floor(Math.random() * words.length)

    results.ele('suggestedUsername1').txt(`${username}${generateRandomNumber()}`)
    results.ele('suggestedUsername2').txt(`${username}${generateRandomNumber()}`)
    results.ele('suggestedUsername3').txt(`${words[randomIndex]}${username}`)
  }

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

server.app.post('/dxd/flashAPI/createAccount', async (req, res) => {
  const status = await db.createAccount(req.body.username.toLowerCase(), req.body.password)
  const accountId = await db.getAccountIdFromUser(req.body.username)

  const root = create().ele('response')
  root.ele('success').txt(status)

  const results = root.ele('results')
  results.ele('userId').txt(accountId)

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

server.app.post('/carsds/api/AccountLoginRequest', async (req, res) => {
  await db.handleAccountLogin(req, res)
})

server.app.get('/carsds/api/AccountLoginRequest', async (req, res) => {
  await db.handleAccountLogin(req, res)
})

server.app.get('/carsds/api/GameEntranceRequest', (req, res) => {
  const root = create().ele('GameEntranceRequestResponse')
  const item = root.ele('success')
  item.txt('true')

  const queue = root.ele('queue')
  const canEnter = queue.ele('can_enter_game')
  canEnter.txt(loginQueue.length > 0 ? 'false' : 'true')

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

server.app.get('/carsds/api/QueueStatsRequest', (req, res) => {
  const root = create().ele('QueueStatsRequestResponse')

  const queue = root.ele('queue')

  // TODO: Implement queue
  queue.ele('est_queue_before_you').txt(0)

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

server.app.get('/carsds/api/GenerateTokenRequest', async (req, res) => {
  const root = create().ele('GenerateTokenRequestResponse')

  const ses = req.session

  const item = root.ele('success')
  item.txt(ses ? 'true' : 'false')

  if (ses.username) {
    const token = root.ele('token')
    token.txt(process.env.LOCALHOST_INSTANCE === 'true' ? ses.username : await generateToken(ses.username))
  }

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

server.app.post('/carsds/api/RedeemPromoCodeRequest', async (req, res) => {
  const root = create().ele('RedeemPromoCodeRequestResponse')
  const valid = req.body.code === 'launch'
  const ses = req.session

  const item = root.ele('success')
  item.txt(valid ? 'true' : 'false')

  const redeemed = await db.checkCodeRedeemedByUser(ses.username, req.body.code)

  if (ses.username && valid && !redeemed) {
    // TODO: Dynamic codes and items
    const coins = 1000

    const reward = root.ele('reward')
    reward.ele('description').txt('car coins')
    reward.ele('quantity').txt(coins)

    const car = await db.retrieveCarByOwnerAccount(ses.username)

    if (car) {
      const carData = car.toObject().carData
      carData.carCoins += coins
      car.carData = carData
      await car.save()
      await db.setCodeAsRedeemedByUser(ses.username, req.body.code)
    }
  }

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

server.app.use(express.json())

server.app.post('/carsds/api/internal/setCarData', async (req, res) => {
  if (!verifyAuthorization(req.headers.authorization)) {
    return res.status(401).send('Authorization failed.')
  }

  const data = req.body

  if (data.playToken && data.fieldData) {
    const car = await db.retrieveCarByOwnerAccount(data.playToken)
    console.log(car, data.fieldData)
    Object.assign(car, data.fieldData)
    await car.save()
    return res.status(200).send({ success: true, message: 'Success.' })
  }

  return res.status(501).send({ success: false, message: 'Something went wrong.' })
})

server.app.get('/carsds/api/internal/retrieveAccount', async (req, res) => {
  if (!verifyAuthorization(req.headers.authorization)) {
    return res.status(401).send('Authorization failed.')
  }

  res.setHeader('content-type', 'application/json')
  if (req.query.userName) {
    let account = await db.retrieveAccountFromUser(req.query.userName)
    if (account) {
      account = account.toObject()
      delete account.password
      return res.end(JSON.stringify(
        account
      ))
    }
  }

  return res.status(404).send({ message: `Could not find account from username ${req.query.userName}` })
})

server.app.get('/carsds/api/internal/retrieveCar', async (req, res) => {
  if (!verifyAuthorization(req.headers.authorization)) {
    return res.status(401).send('Authorization failed.')
  }

  res.setHeader('content-type', 'application/json')
  if (req.query.identifier) {
    res.end(JSON.stringify(
      await db.retrieveCar(req.query.identifier))
    )
    return
  }

  if (req.query.playToken) {
    res.end(JSON.stringify(
      await db.retrieveCarByOwnerAccount(req.query.playToken))
    )
    return
  }

  return res.status(400).send({})
})

server.app.get('/carsds/api/internal/retrieveObject/:identifier', async (req, res) => {
  if (!verifyAuthorization(req.headers.authorization)) {
    return res.status(401).send('Authorization failed.')
  }

  res.setHeader('content-type', 'application/json')
  if (req.params.identifier) {
    // Check for account
    let account = await db.retrieveAccountFromIdentifier(req.params.identifier)
    if (account) {
      // Convert Mongoose docs to JS objects so we can make
      // changes to it.
      account = account.toObject()
      // Don't send the account's hashed password
      delete account.password

      account.objectName = 'Account'
      return res.end(JSON.stringify(
        account
      ))
    }

    // Check for Car
    let car = await db.retrieveCar(req.params.identifier)
    if (car) {
      car = car.toObject()

      if (car._id === Number(req.params.identifier)) {
        car.objectName = 'DistributedCarPlayer'
      } else if (car.racecarId === Number(req.params.identifier)) {
        car.objectName = 'DistributedRaceCar'
      } else {
        car.objectName = 'Unknown'
      }

      return res.end(JSON.stringify(
        car
      ))
    }

    // Check for CarPlayerStatus
    let status = await db.retrieveCarPlayerStatus(req.params.identifier)
    if (status) {
      status = status.toObject()

      status.objectName = 'CarPlayerStatus'
      return res.end(JSON.stringify(
        status
      ))
    }

    return res.status(404).send({ message: `Object ${req.params.identifier} not found!` })
  }
})

server.app.post('/carsds/api/internal/updateObject/:identifier', async (req, res) => {
  if (!verifyAuthorization(req.headers.authorization)) {
    return res.status(401).send('Authorization failed.')
  }

  const data = req.body

  let updated = false
  if (req.params.identifier) {
    // Check for account
    const account = await db.retrieveAccountFromIdentifier(req.params.identifier)
    if (account) {
      Object.assign(account, data)
      await account.save()
      updated = true
    }

    if (!updated) {
      const car = await db.retrieveCar(req.params.identifier)
      if (car) {
        const carData = car.toObject().carData
        Object.assign(carData, data)
        car.carData = carData
        await car.save()
        updated = true
      }
    }

    if (!updated) {
      const status = await db.retrieveCarPlayerStatus(req.params.identifier)
      if (status) {
        Object.assign(status, data)
        await status.save()
        updated = true
      }
    }

    if (updated) {
      return res.send({ message: 'Updated successfully!' })
    } else {
      return res.status(404).send({ message: `Could not update ${req.params.identifier}` })
    }
  }
})

server.app.post('/dxd/flashAPI/getFamilyStructure', (req, res) => {
  // TODO: Implement parent accounts
  const root = create().ele('response')
  root.ele('success').txt(0)

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

server.app.post('/dxd/flashAPI/lookupAccount', async (req, res) => {
  const root = create().ele('response')
  const ses = req.session

  if (ses && ses.userId) {
    const userId = ses.userId
    const account = await db.retrieveAccountFromIdentifier(userId)

    if (account) {
      root.ele('success').txt(1)

      root.ele('acceptedTOU').txt(true) // TODO: Does not seem we have the TOU text, so we auto accept for now

      const results = root.ele('results')

      const accData = await db.retrieveAccountData(account.username)

      results.ele('firstName').txt(accData.FirstName)
      results.ele('lastName').txt(accData.LastName)
      results.ele('email').txt(accData.Email)
      results.ele('username').txt(account.username)
      results.ele('swid').txt(accData.dislId)
      results.ele('age').txt(accData.Age)
      results.ele('userId').txt(ses.userId)

      if (accData.Age >= 18) {
        results.ele('hoh').txt(true)
      }

      if (accData.SpeedChatPlus === 1) {
        results.ele('canWhitelistChat').txt(true)
        results.ele('canWhitelistChatValidationType').txt(0)
      } else {
        results.ele('canWhitelistChat').txt(false)
      }

      if (accData.OpenChat === 1) {
        results.ele('chatLevel').txt(3) // TODO: Implement the chat types
        results.ele('chatLevelValidationType').txt(0)
      } else {
        results.ele('chatLevel').txt(0)
      }
    }
  }

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  console.log(xml)
  res.send(xml)
})

server.app.post('/commerce/flashapi/lookupOffers', async (req, res) => {
  // TODO: Implement me
  const root = create().ele('response')
  root.ele('success').txt(1)

  root.ele('offers')

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

server.app.get('/dxd/flashAPI/getTermsOfUseText', async (req, res) => {
  // TODO: Same as above
  const root = create().ele('response')
  root.ele('success').txt(1)

  const results = root.ele('results')
  results.ele('tou')

  const xml = root.end({ prettyPrint: true })
  res.setHeader('content-type', 'text/xml')
  res.send(xml)
})

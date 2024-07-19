/* global server:writable, create:writable */
/* global db, account:writeable */

server = global.server
create = global.create

const express = require('express')

const CryptoJS = require('crypto-js')

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
    token: ''
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

  if (ses.success) {
    success = true
  }

  const root = create().ele('WhoAmIResponse')
  // root.ele('puppet_id').txt(101) // Mater Puppet

  const item = root.ele('success')
  item.txt(success)

  const status = root.ele('status')
  const user = root.ele('username')

  if (ses.logged && ses.username && ses.userId) {
    status.txt('logged_in_player')
    user.txt(ses.username)

    accountId = ses.userId
    userName = ses.username
  } else {
    status.txt('not_logged_in')
  }

  const accData = await db.retrieveAccountData(userName)

  account = root.ele('account', { account_id: accountId })
  account.ele('first_name')
  account.ele('dname').txt(userName)
  account.ele('age').txt(0)
  account.ele('touAccepted').txt('basic')
  account.ele('access').txt('true')
  account.ele('speed_chat_prompt').txt(Boolean(accData.SpeedChatPlus))

  root.ele('userTestAccessAllowed').txt('false')
  root.ele('testUser').txt('false')

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
  canEnter.txt('true')

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

server.app.use(express.json())

server.app.post('/carsds/api/internal/setCarData', async (req, res) => {
  if (!verifyAuthorization(req.headers.authorization)) {
    return res.status(401).send('Authorization failed.')
  }

  const data = req.body

  if (data.playToken && data.fieldData) {
    const car = await db.retrieveCarByOwnerAccount(data.playToken)
    Object.assign(car, data.fieldData)
    car.save()
    return res.status(200).send({ success: true, message: 'Success.' })
  }

  return res.status(501).send({ success: false, message: 'Something went wrong.' })
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
      await db.retrieveCarFromUser(req.query.playToken))
    )
    return
  }

  return res.status(400).send({})
})

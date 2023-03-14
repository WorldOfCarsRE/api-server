server = global.server
create = global.create

server.app.get('/', (req, res) => {
  res.send('World of Cars API service.')
})

server.app.get('/carsds/api/WhoAmIRequest', async (req, res) => {
  const ses = req.session

  let success = false
  let accountId = -1

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
  } else {
    status.txt('not_logged_in')
  }

  account = root.ele('account', { account_id: accountId })
  account.ele('first_name')
  account.ele('dname')
  account.ele('age').txt(0)
  account.ele('touAccepted').txt('basic')
  account.ele('access').txt('true')
  account.ele('speed_chat_prompt').txt('false')

  root.ele('userTestAccessAllowed').txt('false')
  root.ele('testUser').txt('false')

  const xml = root.end({ prettyPrint: true })
  res.send(xml)
})

server.app.get('/dxd/flashAPI/login', async (req, res) => {
  await db.handleFlashLogin(req, res)
})

server.app.post('/dxd/flashAPI/login', async (req, res) => {
  await db.handleFlashLogin(req, res)
})

server.app.post('/dxd/flashAPI/checkUsernameAvailability', async (req, res) => {
  const status = await db.isUsernameAvailable(req.body.username)

  const root = create().ele('response')
  root.ele('success').txt(status)

  const xml = root.end({ prettyPrint: true })
  res.send(xml)
})

server.app.post('/dxd/flashAPI/createAccount', async (req, res) => {
  const status = await db.createAccount(req.body.username, req.body.password)
  const accountId = await db.getAccountIdFromUser(req.body.username)

  const root = create().ele('response')
  root.ele('success').txt(status)

  const results = root.ele('results')
  results.ele('userId').txt(accountId)

  const xml = root.end({ prettyPrint: true })
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
  res.send(xml)
})

server.app.get('/carsds/api/GenerateTokenRequest', (req, res) => {
  const root = create().ele('GenerateTokenRequestResponse')

  const ses = req.session

  const item = root.ele('success')
  item.txt('true')

  if (ses.username) {
    const token = root.ele('token')
    token.txt(ses.username)
  }

  const xml = root.end({ prettyPrint: true })
  res.send(xml)
})

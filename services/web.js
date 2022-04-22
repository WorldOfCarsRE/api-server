server = global.server;
create = global.create;

server.app.get('/', (req, res) => {
    res.send('World of Cars API service.')
})

server.app.get('/carsds/api/WhoAmIRequest', (req, res) => {
    const root = create().ele('WhoAmIResponse');

    const item = root.ele('success');
    item.txt('true');

    const status = root.ele('status');
    status.txt('not_logged_in');

    account = root.ele('account', {'account_id': '-1'})
    account.ele('first_name');
    account.ele('dname');
    account.ele('age').txt(0);
    account.ele('touAccepted').txt('basic');
    account.ele('access').txt('true');
    account.ele('speed_chat_prompt').txt('false');

    root.ele('userTestAccessAllowed').txt('false');
    root.ele('testUser').txt('false');

    const xml = root.end({prettyPrint: true});
    res.send(xml);
})

server.app.get('/dxd/flashAPI/login', (req, res) => {
    const root = create().ele('result');

    const success = root.ele('success');
    success.txt('0');

    const err = root.ele('error');
    err.txt('PARAM_ERROR');

    const input = root.ele('input');
    input.ele('cookieValue');

    input.ele('loginType').txt('hard');

    root.ele('token');
    root.ele('type').txt('hard');
    root.ele('banURL');

    const xml = root.end({prettyPrint: true});
    res.send(xml);
})

server.app.get('/carsds/api/AccountLoginRequest', (req, res) => {
    const root = create().ele('AccountLoginResponse');
    const item = root.ele('success');
    item.txt('true');

    const xml = root.end({prettyPrint: true});
    res.send(xml);
})

server.app.get('/carsds/api/GameEntranceRequest', (req, res) => {
    const root = create().ele('GameEntranceRequestResponse');
    const item = root.ele('success');
    item.txt('true');

    const queue = root.ele('queue');
    const canEnter = queue.ele('can_enter_game');
    canEnter.txt('true');

    const xml = root.end({prettyPrint: true});
    res.send(xml);
})

server.app.get('/carsds/api/GenerateTokenRequest', (req, res) => {
    const root = create().ele('GenerateTokenRequestResponse');

    const item = root.ele('success');
    item.txt('true');

    const token = root.ele('token')
    token.txt('developer')

    const xml = root.end({prettyPrint: true});
    res.send(xml);
})
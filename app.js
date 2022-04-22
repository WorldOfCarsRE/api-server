const libamf = require('libamf');
const ArrayCollection = require('libamf/src/amf/flash/flex/ArrayCollection');
const CatalogItem = require('./catalog/CatalogItem');
const CatalogItemRaceSeries = require('./catalog/CatalogItemRaceSeries');
const CatalogItemWorldZone = require('./catalog/CatalogItemWorldZone')
var cors = require('cors')

const Racecar = require('./racecar/Racecar');

const {create} = require('xmlbuilder2');

libamf.Service.RequireRegistration = false;
libamf.Server.DisableDefaultHome = true;

libamf.registerClassAlias('com.disney.cars.domain.catalog.Item', CatalogItem);
libamf.registerClassAlias('com.disney.cars.domain.catalog.racing.RaceSeries', CatalogItemRaceSeries);
libamf.registerClassAlias('com.disney.cars.domain.catalog.world.WorldZone', CatalogItemWorldZone)

libamf.registerClassAlias('com.disney.cars.domain.racecar.Racecar', Racecar);

const server = new libamf.Server({
    path: '/carsds/messagebroker/amf'
});

class PlayerService extends libamf.Service {
    constructor() {
        super('player');
    }

    getRuleStates(playerId, __, tutorialRuleId) {
        console.log('getRuleStates: ', playerId + ' ' + __ + ' ' + tutorialRuleId);

        const resp = new ArrayCollection();

        // Having a empty array means autoLogin is true.
        resp.push(1);

        return resp;
    }
}

class RaceCarService extends libamf.Service {
    constructor() {
        super('racecar');
    }

    getRacecarIdsByUserId(accountId) {
        console.log('getRacecarIdsByUserId: ', accountId);

        const resp = new ArrayCollection();
        resp.push(1);
        return resp;
    }

    getRacecarOnLogin(racecarId) {
        console.log('getRacecarOnLogin: ', racecarId);

        const resp = new Racecar();
        return resp;
    }
}

class CatalogService extends libamf.Service {
    constructor() {
        super('catalog');
    }

    getTreeById(id, depth) {
        console.log('getTreeById:', id, depth);

        const resp = new ArrayCollection();
        resp.push(new CatalogItemRaceSeries());
        return resp;
    }

    getItemsByType(itemType) {
        console.log('getItemsByType: ', itemType);

        const resp = new ArrayCollection();
        resp.push(new CatalogItemWorldZone());
        return resp;
    }

    getItem(itemId) {
        console.log('getItem: ', itemId);
    }
}

server.on('data', packet => {
    console.log(packet);
})

const catalogService = new CatalogService();
const raceCarService = new RaceCarService();
const playerService = new PlayerService();

server.registerService(catalogService);
server.registerService(raceCarService);

server.app.use(cors())

server.registerService(playerService);

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

server.listen(8013, () => {
    console.log('Listening on port 8013');
});
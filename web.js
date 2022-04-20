const express = require('express')
const app = express()
const port = 8014
const {create} = require('xmlbuilder2');

app.get('/', (req, res) => {
  res.send('World of Cars web API service.')
})

app.get('/carsds/api/WhoAmIRequest', (req, res) => {
    res.send('');
})

app.get('/carsds/api/AccountLoginRequest', (req, res) => {
    const root = create().ele('AccountLoginResponse');
    const item = root.ele('success');
    item.txt('true');

    const xml = root.end({prettyPrint: true});
    res.send(xml);
})

app.get('/carsds/api/GameEntranceRequest', (req, res) => {
    const root = create().ele('GameEntranceRequestResponse');
    const item = root.ele('success');
    item.txt('true');

    const queue = root.ele('queue');
    const canEnter = queue.ele('can_enter_game');
    canEnter.txt('true');

    const xml = root.end({prettyPrint: true});
    res.send(xml);
})

app.get('/carsds/api/GenerateTokenRequest', (req, res) => {
    const root = create().ele('GenerateTokenRequestResponse');
    const item = root.ele('success');
    item.txt('true');

    const xml = root.end({prettyPrint: true});
    res.send(xml);
})

app.listen(port, () => {
  console.log(`World of Cars web service listening on ${port}!`)
})
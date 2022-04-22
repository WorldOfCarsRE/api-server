// Include our globals.
require('./globals');

server = global.server;

server.on('data', packet => {
    console.log(packet);
})

server.listen(8013, () => {
    console.log('Listening on port 8013');
});
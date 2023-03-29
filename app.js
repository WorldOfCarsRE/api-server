// Include our configuration info.
require('dotenv').config()

// Include our globals.
require('./globals')

server = global.server

/* global server: writeable */

server.on('data', packet => {
  console.log(packet)
})

server.listen(8013, () => {
  console.log('Listening on port 8013')
})

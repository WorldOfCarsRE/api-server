const net = require('net')

const netserver = net.createServer(function (socket) {
  socket.addListener('error', function (err) {
    socket.end && socket.end() || socket.destroy && socket.destroy()
  })
  let xml = '<?xml version="1.0"?>\n<!DOCTYPE cross-domain-policy SYSTEM \n"http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">\n<cross-domain-policy>\n'
  xml += '<site-control permitted-cross-domain-policies="master-only"/>\n'
  xml += '<allow-access-from domain="*" to-ports="*"/>\n'
  xml += '</cross-domain-policy>\n'
  if (socket && socket.readyState == 'open') {
    socket.write(xml)
    socket.end()
  }
})
netserver.addListener('error', function (err) {})
netserver.listen(843, '0.0.0.0')

/* global libamf:writeable, Yard:writeable */

libamf = global.libamf
Yard = global.Yard

class YardService extends libamf.Service {
  constructor () {
    super('yard-service')
  }

  getYard () {
    // TODO
    console.log(userSession)
    return new Yard()
  }
}

module.exports = YardService

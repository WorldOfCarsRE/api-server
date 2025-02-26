/* global libamf:writeable, Yard:writeable */
/* global userSession:writeable, db:writeable */

libamf = global.libamf
Yard = global.Yard

class YardService extends libamf.Service {
  constructor () {
    super('yard-service')
  }

  async getYardByPlayerId (playerId) {
    const yard = new Yard()

    const car = await db.retrieveCar(playerId)
    if (!car) {
      console.log(`getYardByPlayerId: Couldn't find car with playerId: ${playerId}`)
      return yard
    }

    yard.playerId = playerId
    yard.permissionMask = car.yardPermissionMask

    return yard
  }

  async updateYardPermissionMask (level) {
    const car = await db.retrieveCar(userSession.userId)
    if (!car) {
      console.log(`updateYardPermissionMask: Couldn't find car with userId: ${userSession.userId}`)
      return
    }

    car.yardPermissionMask = level

    await car.save()
  }

  async getYard () {
    const yard = new Yard()

    const car = await db.retrieveCar(userSession.userId)
    if (!car) {
      console.log(`getYard: Couldn't find car with userId: ${userSession.userId}`)
      return yard
    }

    if (car.yardPermissionMask === undefined) {
      // Add default Yard privacy level to Car object
      car.yardPermissionMask = yard.permissionMask
      await car.save()
    }

    yard.playerId = car.carData.playerId
    yard.permissionMask = car.yardPermissionMask

    return yard
  }
}

module.exports = YardService

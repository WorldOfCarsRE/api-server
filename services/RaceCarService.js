libamf = global.libamf
ArrayCollection = global.ArrayCollection

Racecar = global.Racecar

class RaceCarService extends libamf.Service {
  constructor () {
    super('racecar')
  }

  async updateRacecar (carObj) {
    const car = await db.retrieveCar(carObj.playerId)

    if (car) {
      const serialized = libamf.serialize(carObj, libamf.ENCODING.AMF3)
      car.serializedData = serialized
      car.save()
    }

    return carObj
  }

  async insertCustomItems (carObj) {
    const car = await db.retrieveCar(carObj.playerId)

    if (car) {
      const serialized = libamf.serialize(carObj, libamf.ENCODING.AMF3)
      car.serializedData = serialized
      car.save()
    }

    return carObj
  }

  async getRacecarIdsByUserId (accountId) {
    console.log('getRacecarIdsByUserId: ', accountId)

    const serializedData = await db.retrieveCarData(accountId)

    const car = libamf.deserialize(serializedData, libamf.ENCODING.AMF3)

    const carId = car.playerId

    const resp = new ArrayCollection()
    resp.push(carId)
    return resp
  }

  async getRacecarOnLogin (racecarId) {
    console.log('getRacecarOnLogin: ', racecarId)

    const dbCar = await db.retrieveCar(racecarId)

    if (dbCar) {
      const car = libamf.deserialize(dbCar.serializedData, libamf.ENCODING.AMF3)
      return car
    }
  }

  async getRacecarByUserId (accountId) {
    console.log('getRacecarByUserId: ', accountId)

    if (!await db.doesCarExist(accountId)) {
      await db.createCar(accountId)
    }

    const serializedData = await db.retrieveCarData(accountId)

    const car = libamf.deserialize(serializedData, libamf.ENCODING.AMF3)
    return car
  }
}

module.exports = RaceCarService

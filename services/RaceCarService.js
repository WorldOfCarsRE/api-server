libamf = global.libamf
ArrayCollection = global.ArrayCollection

Racecar = global.Racecar

class RaceCarService extends libamf.Service {
  constructor () {
    super('racecar')
  }

  async createSerializedRaceCar (carData) {
    const car = new Racecar()
    Object.assign(car, carData)

    return libamf.serialize(car, libamf.ENCODING.AMF3)
  }

  async updateRacecar (carObj) {
    const serialized = libamf.serialize(carObj, libamf.ENCODING.AMF3)
    const car = await db.retrieveCar(carObj.playerId)

    if (car) {
      car.carData = libamf.deserialize(serialized, libamf.ENCODING.AMF3)
      car.save()
    }

    return carObj
  }

  async insertCustomItems (carObj) {
    const serialized = libamf.serialize(carObj, libamf.ENCODING.AMF3)
    const car = await db.retrieveCar(carObj.playerId)

    if (car) {
      car.carData = libamf.deserialize(serialized, libamf.ENCODING.AMF3)
      car.save()
    }

    return carObj
  }

  async getRacecarIdsByUserId (accountId) {
    console.log('getRacecarIdsByUserId: ', accountId)

    const car = await db.retrieveCarData(accountId)
    const carId = car.playerId

    const resp = new ArrayCollection()
    resp.push(carId)
    return resp
  }

  async getRacecarOnLogin (racecarId) {
    console.log('getRacecarOnLogin: ', racecarId)

    const dbCar = await db.retrieveCar(racecarId)

    if (dbCar) {
      const serialized = await this.createSerializedRaceCar(dbCar)
      return libamf.deserialize(serialized, libamf.ENCODING.AMF3)
    }
  }

  async getRacecarByUserId (accountId) {
    console.log('getRacecarByUserId: ', accountId)

    if (!await db.doesCarExist(accountId)) {
      await db.createCar(accountId)
    }

    const carData = await db.retrieveCarData(accountId)
    const serialized = await this.createSerializedRaceCar(carData)

    return libamf.deserialize(serialized, libamf.ENCODING.AMF3)
  }
}

module.exports = RaceCarService

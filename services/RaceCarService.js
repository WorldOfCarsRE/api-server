/* global libamf:writeable, ArrayCollection:writeable */
/* global db, Racecar:writeable */

libamf = global.libamf
ArrayCollection = global.ArrayCollection

Racecar = global.Racecar

class RaceCarService extends libamf.Service {
  constructor () {
    super('racecar')
  }

  async createRaceCar (carData) {
    const car = new Racecar()
    Object.assign(car, carData)

    // Some attribute types are wrong from DB, causing client errors.
    // TODO: Better way of solving this?
    // Example: TypeError: Error #1034: Type Coercion failed: cannot convert []@2e3c5de8161 to com.disney.net.amfObjects.ServerArray.

    const decalSlots = new ArrayCollection(car.decalSlots)
    car.decalSlots = decalSlots

    const trophyItemList = car.trophyItemList.length === 0 ? new ArrayCollection() : new ArrayCollection(car.trophyItemList)
    car.trophyItemList = trophyItemList

    const animationList = car.animationList.length === 0 ? new ArrayCollection() : new ArrayCollection(car.animationList)
    car.animationList = animationList

    const addonItemList = car.addonItemList.length === 0 ? new ArrayCollection() : new ArrayCollection(car.addonItemList)
    car.addonItemList = addonItemList

    const sponsorList = car.sponsorList.length === 0 ? new ArrayCollection() : new ArrayCollection(car.sponsorList)
    car.sponsorList = sponsorList

    const danceSequenceList = car.danceSequenceList.length === 0 ? new ArrayCollection() : new ArrayCollection(car.danceSequenceList)
    car.danceSequenceList = danceSequenceList

    const customItemList = car.customItemList.length === 0 ? new ArrayCollection() : new ArrayCollection(car.customItemList)
    car.customItemList = customItemList

    const stretches = car.stretches.length === 0 ? new ArrayCollection() : new ArrayCollection(car.stretches)
    car.stretches = stretches

    const consumableItemList = car.consumableItemList.length === 0 ? new ArrayCollection() : new ArrayCollection(car.consumableItemList)
    car.consumableItemList = consumableItemList

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
    console.log(`getRacecarIdsByUserId: ${accountId}`)

    const car = await db.retrieveCarData(accountId)
    const carId = car.playerId

    const resp = new ArrayCollection()

    if (carId !== undefined) {
      resp.push(carId)
    }

    return resp
  }

  async getRacecarOnLogin (racecarId) {
    console.log(`getRacecarOnLogin: ${racecarId}`)

    const dbCar = await db.retrieveCarData(racecarId)

    if (dbCar) {
      const serialized = await this.createRaceCar(dbCar)
      return libamf.deserialize(serialized, libamf.ENCODING.AMF3)
    }
  }

  async getRacecars (identifier) {
    const resp = new ArrayCollection()
    resp.push(await this.getRacecarByUserId(identifier))
    return resp
  }

  async getRacecarsByUserIds (userIds) {
    const resp = new ArrayCollection()

    for (const userId of userIds) {
      resp.push(await this.getRacecarByUserId(userId))
    }

    return resp
  }

  async getRacecarByUserId (identifier) {
    console.log(`getRacecarByUserId: ${identifier}`)

    if (!await db.doesCarExist(identifier)) {
      await db.createCar(identifier)
    }

    const carData = await db.retrieveCarData(identifier)
    const serialized = await this.createRaceCar(carData)

    return libamf.deserialize(serialized, libamf.ENCODING.AMF3)
  }
}

module.exports = RaceCarService

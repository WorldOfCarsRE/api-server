libamf = global.libamf;
ArrayCollection = global.ArrayCollection;

Racecar = global.Racecar;

class RaceCarService extends libamf.Service {
    constructor() {
        super('racecar');
    }

    async updateRacecar(carObj) {
        var car = await db.retrieveCar(carObj.playerId);

        if (car) {
            var serialized = libamf.serialize(carObj, libamf.ENCODING.AMF3);
            car.serializedData = serialized;
            car.save();
        }

        return carObj;
    }

    async insertCustomItems(carObj) {
        var car = await db.retrieveCar(carObj.playerId);

        if (car) {
            var serialized = libamf.serialize(carObj, libamf.ENCODING.AMF3);
            car.serializedData = serialized;
            car.save();
        }

        return carObj;
    }

    async getRacecarIdsByUserId(accountId) {
        console.log('getRacecarIdsByUserId: ', accountId);

        var serializedData = await db.retrieveCarData(accountId);

        var car = libamf.deserialize(serializedData, libamf.ENCODING.AMF3);

        var carId = car.playerId;

        const resp = new ArrayCollection();
        resp.push(carId);
        return resp;
    }

    async getRacecarOnLogin(racecarId) {
        console.log('getRacecarOnLogin: ', racecarId);

        var dbCar = await db.retrieveCar(racecarId);

        if (dbCar) {
            var car = libamf.deserialize(dbCar.serializedData, libamf.ENCODING.AMF3);
            return car;
        }
    }

    async getRacecarByUserId(accountId) {
        console.log('getRacecarByUserId: ', accountId);

        if (!await db.doesCarExist(accountId)) {
            await db.createCar(accountId);
        }

        var serializedData = await db.retrieveCarData(accountId);

        var car = libamf.deserialize(serializedData, libamf.ENCODING.AMF3);
        return car;
    }
}

module.exports = RaceCarService;
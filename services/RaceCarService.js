libamf = global.libamf;
ArrayCollection = global.ArrayCollection;

Racecar = global.Racecar;

class RaceCarService extends libamf.Service {
    constructor() {
        super('racecar');
    }

    getRacecarIdsByUserId(accountId) {
        console.log('getRacecarIdsByUserId: ', accountId);

        const racecarId = 1;

        const resp = new ArrayCollection();
        resp.push(racecarId);
        return resp;
    }

    getRacecarOnLogin(racecarId) {
        console.log('getRacecarOnLogin: ', racecarId);

        const resp = new Racecar();
        return resp;
    }
}

module.exports = RaceCarService;
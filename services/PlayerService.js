/* global libamf:writeable, ArrayCollection:writeable */

libamf = global.libamf
ArrayCollection = global.ArrayCollection

class PlayerService extends libamf.Service {
  constructor () {
    super('player')
  }

  getRuleStates (playerId, carId, ruleIds) {
    console.log(`getRuleStates: ${playerId} - ${carId} - ${ruleIds}`)

    const resp = new ArrayCollection()

    if (carId === 0) {
      // Having a empty array means autoLogin is true (go to tutorial).
      resp.push(1)
    } else {
      // TODO: Profile view case
    }

    return resp
  }

  getBlockUserIds () {
    return new ArrayCollection()
  }

  getBadgesByPlayerId (playerId) {
    console.log(`getBadgesByPlayerId: ${playerId}`)

    return new ArrayCollection()
  }
}

module.exports = PlayerService

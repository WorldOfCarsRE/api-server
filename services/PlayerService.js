/* global libamf:writeable, ArrayCollection:writeable */

libamf = global.libamf
ArrayCollection = global.ArrayCollection
Player = global.Player

class PlayerService extends libamf.Service {
  constructor () {
    super('player')
  }

  async getPlayer (playerId) {
    console.log(`getPlayer: ${playerId}`)

    const player = new Player()
    const car = await db.retrieveCar(playerId)
    if (!car) {
      console.log(`getPlayer: Couldn't find car with playerId: ${playerId}`)
      return
    }

    // This call is only used on LobbyCarFrame (Racing Lobbies) and CarLogoSprite,
    // so set only the needed values.
    player.userId = car.accountId
    // TODO: player.access

    return player

  }

  getRuleStates (playerId, carId, ruleIds) {
    console.log(`getRuleStates: ${playerId} - ${carId} - ${ruleIds}`)

    const resp = new ArrayCollection()

    if (carId === 0) {
      // Having a empty array means autoLogin is true (go to tutorial).
      // resp.push(1)
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

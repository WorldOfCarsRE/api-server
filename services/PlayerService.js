/* global libamf:writeable, ArrayCollection:writeable, Player:writeable, db:writeable */

libamf = global.libamf
ArrayCollection = global.ArrayCollection
Player = global.Player
RuleStateAMF = global.RuleStateAMF

class PlayerService extends libamf.Service {
  constructor () {
    super('player')
  }

  async getPlayerOriginalStartDate (playerId) {
    const car = await db.retrieveCar(playerId)
    if (!car) {
      console.log(`getPlayerOriginalStartDate: Couldn't find car with playerId: ${playerId}`)
      return
    }

    if (car.membershipStart === undefined) {
      // Add membership start date to Car object
      car.membershipStart = new Date()
      await car.save()
    }

    return car.membershipStart.toISOString().split('T')[0]
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

  async getRuleStates (playerId, carIdOrRuleIds, ruleIds) {
    console.log(`getRuleStates: ${playerId} - ${carIdOrRuleIds} - ${ruleIds}`)

    const resp = new ArrayCollection()

    if (carIdOrRuleIds === 0) {
      // Having a empty array means autoLogin is true (go to tutorial).
      // resp.push(1)
    } else {
      const car = await db.retrieveCar(playerId)
      if (!car) {
        console.log(`getRuleStates: Couldn't find car with playerId: ${playerId}`)
        return
      }

      for (const ruleId of carIdOrRuleIds) {
        const ruleState = car.ruleStates.find(rs => rs[0] === ruleId)

        if (!ruleState) {
          console.log(`getRuleStates: Couldn't find rule state: ${ruleId}`)
          continue
        }

        const [_, count, accumulator] = ruleState
        resp.push(new RuleStateAMF(ruleId, playerId, car.racecarId, count, accumulator))
      }
    }

    return resp
  }

  getBlockUserIds () {
    return new ArrayCollection()
  }

  async getBadgesByPlayerId (playerId) {
    console.log(`getBadgesByPlayerId: ${playerId}`)

    const resp = new ArrayCollection()

    const car = await db.retrieveCar(playerId)
    if (!car) {
      console.log(`getBadgesByPlayerId: Couldn't find car with playerId: ${playerId}`)
      return
    }

    const playerBadges = car.badges

    for (const badgeId of playerBadges) {
      resp.push(new Badge(badgeId))
    }

    return resp
  }
}

module.exports = PlayerService

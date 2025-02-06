/* global libamf:writeable, ArrayCollection:writeable */
/* global RacecarHighScore:writeable, db:writeable */

libamf = global.libamf
ArrayCollection = global.ArrayCollection
RacecarHighScore = global.RacecarHighScore

class LeaderboardService extends libamf.Service {
  constructor () {
    super('leaderboard')
  }

  async getRacecarTopHighScores (contextId, limit, daily) {
    console.log(`getRacecarTopHighScores: ${contextId} - ${limit} - ${daily}`)

    // TODO: Retrieve leaderboard data

    return new ArrayCollection()
  }

  async getRacecarHighScore (racecarId, contextId, daily) {
    console.log(`getRacecarHighScore: ${racecarId} - ${contextId} - ${daily}`)

    const car = await db.retrieveCarData(racecarId)

    if (!car) {
      console.log(`getRacecarHighScore: Couldn't find car with racecarId: ${racecarId}`)
      return
    }

    // TODO: Retrieve leaderboard data

    return new RacecarHighScore(car.playerId, racecarId, car.carName)
  }

  async getRacecarsHighScores (racecarIds, contextId, daily) {
    console.log(`getRacecarsHighScores: ${racecarIds} - ${contextId} - ${daily}`)

    // TODO: Retrieve leaderboard data

    return new ArrayCollection()
  }
}

module.exports = LeaderboardService

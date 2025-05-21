class RuleStateAMF {
  constructor (ruleId, playerId, carId, count, accumulator) {
    this.accumulator = accumulator
    this.count = count
    this.ruleId = ruleId
    this.carId = carId
    this.playerId = playerId
  }
}

module.exports = RuleStateAMF

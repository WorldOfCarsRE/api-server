class RuleStateAMF {
  constructor (ruleId, playerId, carId, count, accumulator) {
    this.persistenceMode = 0
    this.accumulator = accumulator
    this.modifyTime = new Date()
    this.createTime = new Date()
    this.count = count
    this.carId = carId
    this.ruleId = ruleId
    this.dirty = 0
    this.playerId = playerId
  }
}

module.exports = RuleStateAMF

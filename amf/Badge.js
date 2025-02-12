class Badge {
  constructor (type = 0, badgeId = 0) {
    this.createTime = new Date()
    this.type = type
    this.badgeId = badgeId
  }
}

module.exports = Badge

class Badge {
  constructor (badgeId = 0) {
    this.createTime = new Date()
    this.type = 0
    this.badgeId = badgeId
  }
}

module.exports = Badge

const YARD_PRIVACY_PUBLIC = 0

// eslint-disable-next-line no-unused-vars
const YARD_PRIVACY_FRIENDS = 1

// eslint-disable-next-line no-unused-vars
const YARD_PRIVACY_PRIVATE = 2

class Yard {
  constructor (playerId = 0, permissionMask = YARD_PRIVACY_PUBLIC) {
    this.regionMask = 0
    this.playerId = playerId
    this.visitCount = 0
    this.catalogItemId = 10001 // TODO: Dynamic
    this.createTime = new Date()
    this.totalTime = 0
    this.lastVisit = new Date()
    this.permissionMask = permissionMask
    this.yardId = 0
    this.modifyTime = new Date()
  }
}

module.exports = Yard

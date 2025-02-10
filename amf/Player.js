/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

const PLAYER_ACCESS_FREE = 1
// const PLAYER_ACCESS_SUBSCRIBER = 2

class Player {
  constructor () {
    this.lastLogout = new Date()
    this.userId = 0
    this.carCoins = 0
    this.careercarList = new ArrayCollection()
    this.garageItemList = new ArrayCollection()
    this.active = true
    this.racecarList = new ArrayCollection()
    this.points = 0
    this.access = PLAYER_ACCESS_FREE
    this.logoid = 0
    this.modifyTime = new Date()
    this.playerTrackList = new ArrayCollection()
    this.createTime = new Date()
    this.playerId = 0
    this.dname = ''
    this.totalTime = 0
    this.lastLogin = new Date()
    this.health = 0
    this.yard = null
    this.originalSubscriptionTime = new Date()
  }
}

module.exports = Player

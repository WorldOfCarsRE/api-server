/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class Racecar {
  constructor () {
    this.chassisType = 0
    this.consumableSlot = 0
    this.active = false
    this.decalSlots = new ArrayCollection()
    this.printableBackgroundId = 0
    this.totalMiles = 0
    this.costumeId = 0
    this.trophyItemList = new ArrayCollection()
    this.modifyTime = new Date()
    this.dashboardTintId = 0
    this.activeGearId = 1
    this.logoBackgroundColor = 0
    this.eyeColor = 0
    this.raceLevel = 0
    this.logoBackgroundId = 0
    this.carNumber = 0
    this.fans = 0
    this.gender = 0
    this.animationList = new ArrayCollection()
    this.profileBackgroundId = 59000
    this.userId = 0
    this.addonItemList = new ArrayCollection()
    this.logoFontId = 0
    this.playerId = 0
    this.racecarId = 0
    this.sponsorList = new ArrayCollection()
    this.racingPoints = 0
    this.danceSequenceList = new ArrayCollection()
    this.wheel = 0
    this.color = 0
    this.consumableStack = 0
    this.dashboardTextureId = 0
    this.detailingId = 0
    this.raceSeries = 44000
    this.activeSponsorId = 0
    this.logoFontColor = 0
    this.customItemList = new ArrayCollection()
    this.stretches = new ArrayCollection()
    // FIXME?: The client sets the stretches to [[0, 0, 0, 0, 0, 0]] instead???
    this.stretches.push(0, 0, 0, 0, 0, 0)
    this.consumableItemList = new ArrayCollection()
    this.tire = 0
    this.createTime = new Date()
    this.carName = ''
    this.careerType = 0
    this.carCoins = 0
    this.gears = new ArrayCollection()
    this.gears.push(1)
  }
}

module.exports = Racecar

const CatalogItem = require('./CatalogItem')

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemRaceLevel extends CatalogItem {
  constructor (itemId) {
    super()

    this.itemId = itemId

    this.nameUrl = ''
    this.victoryPapparazziSoundIds = new ArrayCollection()

    this.proTrackItemId = 1
    this.milestoneQuestId = 0
    this.victoryFlashCount = 0
    this.sponsorChoosenRuleId = 0
    this.unlockedItemId = 0
    this.racingPointsMinimum = 0

    this.sponsorIds = new ArrayCollection()
    this.sponsorIds.push(1)
  }
}

module.exports = CatalogItemRaceLevel

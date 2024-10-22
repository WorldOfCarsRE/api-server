const CatalogItem = require('./CatalogItem')

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemRaceLevel extends CatalogItem {
  constructor (itemId, proTrackId, racingPoints, sponsorsIds = []) {
    super()

    this.itemId = itemId

    this.nameUrl = ''
    this.victoryPapparazziSoundIds = new ArrayCollection()

    this.proTrackItemId = proTrackId
    this.milestoneQuestId = 0
    this.victoryFlashCount = 0
    this.sponsorChoosenRuleId = 0
    this.unlockedItemId = 0
    this.racingPointsMinimum = racingPoints

    this.sponsorIds = new ArrayCollection()
    this.sponsorIds.push(...sponsorsIds)
  }
}

module.exports = CatalogItemRaceLevel

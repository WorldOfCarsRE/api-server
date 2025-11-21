const CatalogItem = require('./CatalogItem')

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemRaceLevel extends CatalogItem {
  constructor (proTrackId, milestoneQuestId, sponsorChoosenRuleId, unlockedItemId, racingPoints, sponsorsIds) {
    super()

    this.nameUrl = ''
    this.victoryPapparazziSoundIds = new ArrayCollection()

    this.proTrackItemId = proTrackId
    this.milestoneQuestId = milestoneQuestId
    this.victoryFlashCount = 0
    this.sponsorChoosenRuleId = sponsorChoosenRuleId
    this.unlockedItemId = unlockedItemId
    this.racingPointsMinimum = racingPoints

    this.sponsorIds = new ArrayCollection()
    this.sponsorIds.push(...sponsorsIds)
  }
}

module.exports = CatalogItemRaceLevel

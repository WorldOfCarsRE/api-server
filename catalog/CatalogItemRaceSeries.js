const CatalogItem = require('./CatalogItem')

Vector = global.libamf.Vector
ArrayCollection = global.ArrayCollection

CatalogItemRaceTrack = global.CatalogItemRaceTrack
CatalogItemRaceLevel = global.CatalogItemRaceLevel

class CatalogItemRaceSeries extends CatalogItem {
  constructor (itemId) {
    super()

    this.itemId = itemId

    this.raceLevelIds = new ArrayCollection()
    this.raceLevelIds.push(1)

    this.proTrackItemId = 1
    this.milestoneQuestId = 0

    this.sponsorChoosenRuleId = 0
    this.titleUrl = ''

    this.sponsorIds = new ArrayCollection()
    this.sponsorIds.push(0)
  }
}

module.exports = CatalogItemRaceSeries

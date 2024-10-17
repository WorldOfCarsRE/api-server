const CatalogItem = global.CatalogItem

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemRaceSeries extends CatalogItem {
  constructor (itemId) {
    super()

    this.itemId = itemId

    this.raceLevelIds = new ArrayCollection()
    this.raceLevelIds.push(1)

    this.proTrackItemId = 1
    this.milestoneQuestId = 0

    this.sponsorChoosenRuleId = 0
    this.titleUrl = 'car_g_rac_ttl_pistonCupCircuit.swf'

    this.sponsorIds = new ArrayCollection()
    this.sponsorIds.push(0)
  }
}

module.exports = CatalogItemRaceSeries

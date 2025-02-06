const CatalogItem = global.CatalogItem

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemRaceSeries extends CatalogItem {
  constructor (itemId) {
    super()

    this.itemId = itemId

    this.raceLevelIds = new ArrayCollection()
    this.raceLevelIds.push(41001, 41002, 41003, 41004, 41005, 41006)

    this.proTrackItemId = 1
    this.milestoneQuestId = 0

    this.sponsorChoosenRuleId = 0
    this.titleUrl = 'car_g_rac_ttl_pistonCupCircuit.swf'

    this.sponsorIds = new ArrayCollection()
    this.sponsorIds.push(0)
  }
}

module.exports = CatalogItemRaceSeries

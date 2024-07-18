/* global CatalogPlayerItem: writeable */
/* global ArrayCollection: writeable */

CatalogPlayerItem = require('./CatalogPlayerItem')
ArrayCollection = global.ArrayCollection

class CatalogPlayerStoreItem extends CatalogPlayerItem {
  constructor (itemId, name, description) {
    super()

    this.itemId = itemId
    this.name = name
    this.description = description

    this.sponsorIds = new ArrayCollection()
    this.sponsorIds.push(1)

    this.storeThumbnail = ''
    this.membershipRequired = false
    this.storeAvailabilityPeriods = new ArrayCollection()
    this.storeAvailabilityEnd = new Date()
    this.badgeIds = new ArrayCollection()
    this.storePrice = 0
    this.ruleIds = new ArrayCollection()
    this.storeAvailabilityStart = new Date()
    this.raceLevelId = 0
    this.raceLevel = 0
  }
}

module.exports = CatalogPlayerStoreItem

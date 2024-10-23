/* global CatalogCarItem: writeable, ArrayCollection:writeable */

CatalogCarItem = global.CatalogCarItem
ArrayCollection = global.ArrayCollection

class CatalogItemCarDNA extends CatalogCarItem {
  constructor (decalSlots = [], profileBackgroundId = 0, costumeId = 0) {
    super()

    this.gender = 0
    this.stretchValues = new ArrayCollection()
    this.decalSlots = new ArrayCollection()
    this.decalSlots.push(...decalSlots)
    this.type = 0
    this.logoFontId = 0
    this.wheel = 0
    this.color = 0
    this.chassis = 0
    this.logoFontColor = 0
    this.merged = true
    this.tire = 0
    this.logoBackgroundColor = 0
    this.eyeColor = 0
    this.costumeId = costumeId
    this.logoBackgroundId = 0
    this.appliedAddonIds = new ArrayCollection()
    this.detailing = 0
    this.profileBackgroundId = profileBackgroundId
    this.carNumber = 0
  }
}

module.exports = CatalogItemCarDNA

/* global CatalogCarItem: writeable, ArrayCollection:writeable */

CatalogCarItem = global.CatalogCarItem
ArrayCollection = global.ArrayCollection

class CatalogItemCarDNA extends CatalogCarItem {
  constructor () {
    super()

    this.gender = 0
    this.stretchValues = new ArrayCollection()
    this.decalSlots = new ArrayCollection()
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
    this.costumeId = 0
    this.logoBackgroundId = 0
    this.appliedAddonIds = new ArrayCollection()
    this.detailing = 0
    this.profileBackgroundId = 0
    this.carNumber = 0
  }
}

module.exports = CatalogItemCarDNA

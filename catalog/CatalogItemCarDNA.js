/* global CatalogCarItem: writeable, ArrayCollection:writeable */

CatalogCarItem = global.CatalogCarItem
ArrayCollection = global.ArrayCollection

class CatalogItemCarDNA extends CatalogCarItem {
  constructor (name, description, storeThumbnail, decalSlots = [], color = 0, detailing = 0) {
    super()

    this.name = name
    this.description = description
    this.storeThumbnail = storeThumbnail

    this.gender = 0
    this.stretchValues = new ArrayCollection()
    this.decalSlots = new ArrayCollection()
    this.decalSlots.push(...decalSlots)
    this.type = 0
    this.logoFontId = 0
    this.wheel = 0
    this.color = color
    this.chassis = 0
    this.logoFontColor = 0
    this.merged = true
    this.tire = 0
    this.logoBackgroundColor = 0
    this.eyeColor = 0
    this.costumeId = 0
    this.logoBackgroundId = 0
    this.appliedAddonIds = new ArrayCollection()
    this.detailing = detailing
    this.profileBackgroundId = 0
    this.carNumber = 0
  }
}

module.exports = CatalogItemCarDNA

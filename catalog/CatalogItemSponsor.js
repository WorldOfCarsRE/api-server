/* global CatalogItem: writeable */

CatalogItem = global.CatalogItem

class CatalogItemSponsor extends CatalogItem {
  constructor (name, sponsorLevel, chooserBackground, genericBooth, logoImage, mainBooth = '') {
    super()

    this.name = name

    this.soundAlias = ''
    this.sponsorLevel = sponsorLevel
    this.sponsorChooserBackgroundImage = chooserBackground
    this.thumbnailImage = ''
    this.unlockText = ''
    this.costumeId = 0
    this.genericBooth = genericBooth
    this.raceSeriesId = 0
    this.raceLevelId = 0
    this.logoImage = logoImage
    this.profileBackgroundId = 0
    this.soundGroup = ''
    this.mainBooth = mainBooth
  }
}

module.exports = CatalogItemSponsor

/* global CatalogItem: writeable */

CatalogItem = global.CatalogItem

class CatalogItemSponsor extends CatalogItem {
  constructor (name, sponsorLevel, chooserBackground, genericBooth, logoImage, mainBooth = '', costumeId = 0, profileBackgroundId = 0) {
    super()

    this.name = name

    this.soundAlias = ''
    this.sponsorLevel = sponsorLevel
    this.sponsorChooserBackgroundImage = chooserBackground
    this.thumbnailImage = ''
    this.unlockText = ''
    this.costumeId = costumeId
    this.genericBooth = genericBooth
    this.raceSeriesId = 0
    this.raceLevelId = 0
    this.logoImage = logoImage
    this.profileBackgroundId = profileBackgroundId
    this.soundGroup = ''
    this.mainBooth = mainBooth
  }
}

module.exports = CatalogItemSponsor

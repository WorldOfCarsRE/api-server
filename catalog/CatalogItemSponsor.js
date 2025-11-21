/* global CatalogItem: writeable */

CatalogItem = global.CatalogItem

class CatalogItemSponsor extends CatalogItem {
  constructor (name, sponsorLevel, chooserBackground, genericBooth, logoImage, costumeId, profileBackgroundId, mainBooth = '', soundAlias = '') {
    super()

    this.name = name

    this.soundAlias = soundAlias
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
    this.soundGroup = 'VoiceOver'
    this.mainBooth = mainBooth
  }
}

module.exports = CatalogItemSponsor

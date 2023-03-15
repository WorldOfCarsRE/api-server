CatalogItem = global.CatalogItem

class CatalogItemSponsor extends CatalogItem {
  constructor () {
    super()

    this.soundAlias = ''
    this.sponsorLevel = 0
    this.sponsorChooserBackgroundImage = ''
    this.thumbnailImage = ''
    this.unlockText = ''
    this.costumeId = 0
    this.genericBooth = ''
    this.raceSeriesId = 0
    this.raceLevelId = 0
    this.logoImage = ''
    this.profileBackgroundId = 0
    this.soundGroup = ''
    this.mainBooth = ''
  }
}

module.exports = CatalogItemSponsor

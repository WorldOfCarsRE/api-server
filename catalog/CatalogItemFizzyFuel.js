CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemFizzyFuel extends CatalogPlayerStoreItem {
  constructor (itemId, name, description, storeThumbnail, storePrice, maxOwnable = 10) {
    super (itemId, name, description, storeThumbnail, storePrice)

    this.color = 0
    this.emoteIconImage = ''
    this.effect = 0
    this.emoteId = 0
    this.dashboardButtonImage = ''
    this.soundId = 0

    this.maximumOwnable = maxOwnable
  }
}

module.exports = CatalogItemFizzyFuel

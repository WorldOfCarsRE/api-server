/* global CatalogPlayerStoreItem: writeable */

CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemFizzyFuel extends CatalogPlayerStoreItem {
  constructor (itemId, name, description, storeThumbnail, storePrice, color, effect, emoteId, dashboardButtonImage, soundId, maximumOwnable = 10) {
    super(itemId, name, description, storeThumbnail, storePrice)

    this.maximumOwnable = maximumOwnable

    this.color = color
    this.emoteIconImage = ''
    this.effect = effect
    this.emoteId = emoteId
    this.dashboardButtonImage = dashboardButtonImage
    this.soundId = soundId
  }
}

module.exports = CatalogItemFizzyFuel

CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemConsumable extends CatalogPlayerStoreItem {
  constructor (itemId, name, description, storeThumbnail, storePrice, type) {
      super(itemId, name, description, storeThumbnail, storePrice)

      this.maximumOwnable = 99

      this.mapSpriteCatalogItemId = 0
      this.type = type
      this.clientScript = ''
  }
}

module.exports = CatalogItemConsumable

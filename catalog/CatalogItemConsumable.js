CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemConsumable extends CatalogPlayerStoreItem {
  constructor (itemId, name, description, storeThumbnail, storePrice, mapSpriteId, type, clientScript) {
      super(itemId, name, description, storeThumbnail, storePrice)

      this.maximumOwnable = 99

      this.mapSpriteCatalogItemId = mapSpriteId
      this.type = type
      this.clientScript = clientScript
  }
}

module.exports = CatalogItemConsumable

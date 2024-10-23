CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemYardItem extends CatalogPlayerStoreItem {
  constructor (itemId, name, description, storeThumbnail, storePrice, subcategoryId = 0, maxOwnable = 50) {
    super (itemId, name, description, storeThumbnail, storePrice)

    this.assetId = 0
    this.serverScript = ''

    this.maximumOwnable = maxOwnable
    this.categoryId = 6
    this.subcategoryId = subcategoryId
  }
}

module.exports = CatalogItemYardItem

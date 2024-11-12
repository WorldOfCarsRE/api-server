CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemStack extends CatalogPlayerStoreItem {
  constructor (itemId, name, description, storeThumbnail, storePrice, stackItemId, quantity) {
    super(itemId, name, description, storeThumbnail, storePrice)

    this.quantity = quantity
    this.stackItemId = stackItemId
  }
}

module.exports = CatalogItemStack
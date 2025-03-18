/* global CatalogPlayerStoreItem: writeable */

CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemStack extends CatalogPlayerStoreItem {
  constructor (itemId, name, description, storeThumbnail, storePrice, stackItemId, quantity) {
    super(itemId, name, description, storeThumbnail, storePrice)

    this.maximumOwnable = 99
    this.quantity = quantity
    this.stackItemId = stackItemId
  }
}

module.exports = CatalogItemStack

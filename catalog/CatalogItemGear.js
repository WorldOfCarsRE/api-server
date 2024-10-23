const CatalogCarItem = global.CatalogCarItem

class CatalogItemGear extends CatalogCarItem {
  constructor (itemId, name, description, storeThumbnail, storePrice) {
    super()

    this.itemId = itemId
    this.name = name
    this.description = description
    this.storeThumbnail = storeThumbnail
    this.storePrice = storePrice
    this.maximumOwnable = 99

    this.physicsId = 100
    this.tabButton = 'gear1Button'
    this.gear = 1
  }
}

module.exports = CatalogItemGear

const CatalogCarItem = global.CatalogCarItem

class CatalogItemGear extends CatalogCarItem {
  constructor (itemId) {
    super()

    this.itemId = itemId

    this.physicsId = 100
    this.tabButton = 'gear1Button'
    this.gear = 1
  }
}

module.exports = CatalogItemGear

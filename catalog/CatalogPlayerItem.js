const CatalogItem = global.CatalogItem

class CatalogPlayerItem extends CatalogItem {
  constructor () {
    super()

    this.maximumOwnable = 0
    this.categoryId = 0
    this.ownershipEnd = new Date()
    this.startState = 0
    this.subcategoryId = 0
    this.careerType = 0
  }
}

module.exports = CatalogPlayerItem

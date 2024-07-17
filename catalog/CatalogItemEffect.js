const CatalogItem = global.CatalogItem
ArrayCollection = global.ArrayCollection

class CatalogItemEffect extends CatalogItem {
  constructor (assetUrls, priority = 0, position = 0) {
    super()

    this.assets = new ArrayCollection(...assetUrls)
    this.priority = priority
    this.position = position
  }
}

module.exports = CatalogItemEffect

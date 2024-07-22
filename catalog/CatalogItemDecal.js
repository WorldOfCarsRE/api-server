const CatalogCarItem = require('./CatalogCarItem')

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemDecal extends CatalogCarItem {
  constructor (assetUrls, decalType) {
    super()

    this.type = decalType

    this.assets = new ArrayCollection(...assetUrls)
    this.slots = new ArrayCollection()
  }
}

module.exports = CatalogItemDecal

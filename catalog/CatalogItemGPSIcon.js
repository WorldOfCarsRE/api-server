/* global CatalogItem: writeable */

CatalogItem = global.CatalogItem

class CatalogItemGPSIcon extends CatalogItem {
  constructor (standardType) {
    super()

    this.customImage = ''
    this.standardType = standardType
  }
}

module.exports = CatalogItemGPSIcon

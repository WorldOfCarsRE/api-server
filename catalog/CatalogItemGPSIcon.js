/* global CatalogItem: writeable */

CatalogItem = global.CatalogItem

class CatalogItemGPSIcon extends CatalogItem {
  constructor () {
    super()

    this.customImage = ''
    this.standardType = ''
  }
}

module.exports = CatalogItemGPSIcon

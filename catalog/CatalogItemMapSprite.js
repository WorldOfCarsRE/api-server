const CatalogItem = global.CatalogItem

class CatalogItemMapSprite extends CatalogItem {
  constructor (offsetX, offsetY, sortOffsetX, sortOffsetY, asset = '', frameNames = []) {
    super()

    this.offsetX = offsetX
    this.offsetY = offsetY
    this.sortOffsetX = sortOffsetX
    this.sortOffsetY = sortOffsetY
    this.asset = asset
    this.jobIcon = ''
    this.frameNames = frameNames
  }
}

module.exports = CatalogItemMapSprite

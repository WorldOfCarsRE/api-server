const CatalogItem = global.CatalogItem

class CatalogItemMapSprite extends CatalogItem {
  constructor () {
    super()

    this.offsetX = 40
    this.offsetY = 36
    this.sortOffsetX = 40
    this.sortOffsetY = 36
    this.asset = ''
    this.jobIcon = ''
    this.frameNames = []
  }
}

module.exports = CatalogItemMapSprite

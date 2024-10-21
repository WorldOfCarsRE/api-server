const CatalogItem = global.CatalogItem

class CatalogItemMapSprite extends CatalogItem {
  constructor () {
    super()

    this.offsetX = 0
    this.offsetY = 0
    this.sortOffsetX = 0
    this.sortOffsetY = 0
    this.asset = ''
    this.jobIcon = ''
    this.frameNames = []
  }
}
  
module.exports = CatalogItemMapSprite
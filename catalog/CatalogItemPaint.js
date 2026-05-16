const CatalogCarItem = require('./CatalogCarItem')

class CatalogItemPaint extends CatalogCarItem {
  constructor (color, itemId, name, description, storeThumbnail) {
    super()

    this.color = color
    this.itemId = itemId
    this.name = name
    this.description = description
    this.storeThumbnail = storeThumbnail
  }
}

module.exports = CatalogItemPaint

const CatalogCarItem = require('./CatalogCarItem')

class CatalogItemWheel extends CatalogCarItem {
  constructor (image) {
    super()

    this.image = image
  }
}

module.exports = CatalogItemWheel

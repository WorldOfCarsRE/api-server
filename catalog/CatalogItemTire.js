const CatalogCarItem = require('./CatalogCarItem')

class CatalogItemTire extends CatalogCarItem {
  constructor (image) {
    super()

    this.image = image
  }
}

module.exports = CatalogItemTire

CatalogCarItem = global.CatalogCarItem

class CatalogItemDetailing extends CatalogCarItem {
  constructor (name, description, storeThumbnail, storePrice, image) {
    super()

    this.name = name
    this.description = description
    this.storeThumbnail = storeThumbnail
    this.storePrice = storePrice

    this.image = image
  }
}

module.exports = CatalogItemDetailing

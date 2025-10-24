CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemBadge extends CatalogPlayerStoreItem {
  constructor (name, description, image, imageSmall) {
    super()

    this.name = name
    this.description = description

    this.unlockText = ''
    this.image = image
    this.imageSmall = imageSmall
  }
}

module.exports = CatalogItemBadge
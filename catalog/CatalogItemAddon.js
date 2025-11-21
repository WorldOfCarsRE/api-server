CatalogCarItem = global.CatalogCarItem

class CatalogItemAddon extends CatalogCarItem {
  constructor (name, description, storeThumbnail, storePrice, attachedto, smod) {
    super()

    this.name = name
    this.description = description
    this.storeThumbnail = storeThumbnail
    this.storePrice = storePrice

    this.attachedto = attachedto
    this.tint = true
    this.smod = smod
  }
}

module.exports = CatalogItemAddon

/* CatalogPlayerStoreItem:writeable */

const CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemProfileTheme extends CatalogPlayerStoreItem {
  constructor (storeThumbnail, backgroundImage) {
    super()

    this.storeThumbnail = storeThumbnail

    this.backgroundImage = backgroundImage
  }
}

module.exports = CatalogItemProfileTheme

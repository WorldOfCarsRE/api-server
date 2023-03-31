/* CatalogPlayerStoreItem:writeable */

const CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemProfileTheme extends CatalogPlayerStoreItem {
  constructor (backgroundImage) {
    super()

    this.backgroundImage = backgroundImage
  }
}

module.exports = CatalogItemProfileTheme

/* CatalogPlayerStoreItem:writeable */

const CatalogPlayerStoreItem = global.CatalogPlayerStoreItem

class CatalogItemEmote extends CatalogPlayerStoreItem {
  constructor (name, storeThumbnail, sani, overheadIcon) {
    super(null, name, null, storeThumbnail)

    this.sani = sani
    this.overheadIcon = overheadIcon
  }
}

module.exports = CatalogItemEmote

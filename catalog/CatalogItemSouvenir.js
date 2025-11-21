CatalogItemBadge = global.CatalogItemBadge

class CatalogItemSouvenir extends CatalogItemBadge {
  constructor (name, description, badgeId, image, imageSmall) {
    super(name, description, image, imageSmall)

    this.categoryBadgeId = badgeId
    this.type = 0
  }
}

module.exports = CatalogItemSouvenir

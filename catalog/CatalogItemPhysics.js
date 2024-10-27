const CatalogItem = global.CatalogItem

class CatalogItemPhysics extends CatalogItem {
  constructor () {
    super()

    // TODO: Implement gears.
    this.drag = 2500
    this.power = 25000
    this.drift = 0.2
    this.mass = 1400
  }
}

module.exports = CatalogItemPhysics

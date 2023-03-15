const CatalogItem = require('./CatalogItem')

class CatalogItemPhysics extends CatalogItem {
  constructor () {
    super()

    // TODO: Figure out actual physics data.
    this.drag = 100
    this.power = 1000
    this.drift = 100
    this.mass = 100
  }
}

module.exports = CatalogItemPhysics

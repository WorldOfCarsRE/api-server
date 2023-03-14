const CatalogItem = require('./CatalogItem')

class CatalogItemPhysics extends CatalogItem {
  constructor () {
    super()

    this.drag = new Number()
    this.power = new Number()
    this.drift = new Number()
    this.mass = new Number()
  }
}

module.exports = CatalogItemPhysics

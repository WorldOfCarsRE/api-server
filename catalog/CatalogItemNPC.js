const CatalogItem = require('./CatalogItem')

class CatalogItemNPC extends CatalogItem {
  constructor () {
    super()

    this.packName = ''
    this.defaultSaniId = 0
    this.shadowScaleY = new Number()
    this.logoUrl = ''
    this.swfUrl = ''
    this.shadowScaleX = new Number()
    this.portraitUrl = ''
    this.smod = 'car_r_chr_avt_stock.smod'
    this.spriteStripUrl = ''
    this.logoColor = 0
  }
}

module.exports = CatalogItemNPC

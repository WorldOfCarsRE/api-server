const CatalogItem = global.CatalogItem

class CatalogItemNPC extends CatalogItem {
  constructor (name) {
    super()

    this.packName = 'car_k_chr_frn_materLow.dpak'
    this.defaultSaniId = 31011
    this.shadowScaleY = 0
    this.logoUrl = ''
    this.swfUrl = ''
    this.shadowScaleX = 0
    this.portraitUrl = ''
    this.smod = 'car_r_chr_frn_materLow.smod'
    this.spriteStripUrl = ''
    this.logoColor = 0
    this.name = name
  }
}

module.exports = CatalogItemNPC

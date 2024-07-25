const CatalogItem = global.CatalogItem

class CatalogItemNPC extends CatalogItem {
  constructor (packName = 'car_k_chr_frn_materLow.dpak', name = 'Mater', smod = 'car_r_chr_frn_materLow.smod', logoUrl = '', defaultSaniId = 31011) {
    super()

    this.packName = packName
    this.defaultSaniId = defaultSaniId
    this.shadowScaleY = 0
    this.logoUrl = logoUrl
    this.swfUrl = ''
    this.shadowScaleX = 0
    this.portraitUrl = 'car_g_bcg_pfl_checkeredFlag.swf'
    this.smod = smod
    this.spriteStripUrl = ''
    this.logoColor = 0
    this.name = name
  }
}

module.exports = CatalogItemNPC

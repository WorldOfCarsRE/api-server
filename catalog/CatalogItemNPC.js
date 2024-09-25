const CatalogItem = global.CatalogItem

class CatalogItemNPC extends CatalogItem {
  constructor (packName = 'car_k_chr_frn_materLow.dpak', name = 'Mater', smod = 'car_r_chr_frn_mater.smod', logoUrl = '', portraitUrl = 'car_g_ico_chr_mater.jpg', defaultSaniId = 31011) {
    super()

    this.packName = packName
    this.defaultSaniId = defaultSaniId
    this.shadowScaleY = 0
    this.logoUrl = logoUrl
    this.swfUrl = ''
    this.shadowScaleX = 0
    this.portraitUrl = portraitUrl
    this.smod = smod
    this.spriteStripUrl = ''
    this.logoColor = 0
    this.name = name
  }
}

module.exports = CatalogItemNPC

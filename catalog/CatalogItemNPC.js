const CatalogItem = global.CatalogItem

class CatalogItemNPC extends CatalogItem {
  constructor (packName, name, smod, logoUrl, portraitUrl, defaultSaniId = 31011) {
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

CatalogItemAnimation = global.CatalogItemAnimation

class CatalogItemSimpleAnimation extends CatalogItemAnimation {
  constructor (saniName) {
    super()

    this.sani = `car_a_chr_avt_sports_${saniName || 'idlescan'}.sani`
  }
}

module.exports = CatalogItemSimpleAnimation

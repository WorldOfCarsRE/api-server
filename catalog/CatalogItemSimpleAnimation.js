/* global CatalogItemAnimation: writeable */

CatalogItemAnimation = global.CatalogItemAnimation

class CatalogItemSimpleAnimation extends CatalogItemAnimation {
  constructor (saniName, fullName = '') {
    super()
    if (fullName) {
      this.sani = fullName
    } else {
      this.sani = `car_a_chr_avt_sports_${saniName || 'idlescan'}.sani`
    }
  }
}

module.exports = CatalogItemSimpleAnimation

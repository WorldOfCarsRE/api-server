/* global CatalogItemAnimation: writeable */

CatalogItemAnimation = global.CatalogItemAnimation

class CatalogItemSimpleAnimation extends CatalogItemAnimation {
  constructor (saniName, fullName = '') {
    super()

    this.sani = fullName || `car_a_chr_avt_sports_${saniName || 'idlescan'}.sani`
  }
}

module.exports = CatalogItemSimpleAnimation

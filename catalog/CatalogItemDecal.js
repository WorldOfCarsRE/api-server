const CatalogCarItem = global.CatalogCarItem

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemDecal extends CatalogCarItem {
  constructor () {
    super()

    this.type = 1

    this.assets = new ArrayCollection()
    this.assets.push('car_t_chr_avt_stock_sideWindows.jpg')

    this.slots = new ArrayCollection()
  }
}

module.exports = CatalogItemDecal

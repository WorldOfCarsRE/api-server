/* global ArrayCollection: writeable */
/* global CatalogItem: writeable */

ArrayCollection = global.ArrayCollection
CatalogItem = global.CatalogItem

class CatalogItemStore extends CatalogItem {
  constructor () {
    super()

    this.openVO = ''
    this.canRotateCar = false
    this.viewURL = ''
    this.inventoryIds = new ArrayCollection()
    this.expansionCustomPrice = ''
    this.dialogSwf = ''
    this.npcId = 0
    this.dialogBackground = ''
    this.npcAnimationId = 0
    this.tryOnVendorEmoteIds = new ArrayCollection()
    this.idleAnimations = ''
    this.dialogPromo = ''
    this.tryOnVendorSoundIds = new ArrayCollection()
    this.expansionURL = ''
    this.closeVO = ''
  }
}

module.exports = CatalogItemStore

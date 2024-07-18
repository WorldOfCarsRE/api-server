/* global ArrayCollection: writeable */
/* global CatalogItem: writeable */

ArrayCollection = global.ArrayCollection
CatalogItem = global.CatalogItem

class CatalogItemStore extends CatalogItem {
  constructor (name, openVO, viewURL, idleAnimations, expansionURL, closeVO) {
    super()

    this.name = name
    this.openVO = openVO
    this.canRotateCar = false
    this.viewURL = viewURL
    this.inventoryIds = new ArrayCollection()
    this.expansionCustomPrice = ''
    this.dialogSwf = ''
    this.npcId = 0
    this.dialogBackground = ''
    this.npcAnimationId = 0
    this.tryOnVendorEmoteIds = new ArrayCollection()
    this.idleAnimations = idleAnimations
    this.dialogPromo = ''
    this.tryOnVendorSoundIds = new ArrayCollection()
    this.expansionURL = expansionURL
    this.closeVO = closeVO
  }
}

module.exports = CatalogItemStore

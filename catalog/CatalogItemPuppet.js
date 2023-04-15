const CatalogItem = global.CatalogItem

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemPuppet extends CatalogItem {
  constructor (npcId, name) {
    super()

    this.npcId = npcId
    this.name = name
    this.repelRadius = 0
    this.chatBubbleColor = 0
    this.idleAnimationId = 0
    this.textOutlineColor = 0
    this.nameHeight = 0
    this.animationIds = new ArrayCollection()
    this.collisionHeight = 0
    this.collisionWidth = 0
    this.textColor = 0
    this.phraseIds = new ArrayCollection()
  }
}

module.exports = CatalogItemPuppet

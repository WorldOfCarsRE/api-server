const CatalogItem = global.CatalogItem

/* global ArrayCollection: writeable */

ArrayCollection = global.ArrayCollection

class CatalogItemPuppet extends CatalogItem {
  constructor (npcId, name, idleAnimationId = 33274, chatBubbleColor = 0, textOutlineColor = 0) {
    super()

    this.npcId = npcId
    this.name = name
    this.repelRadius = 0
    this.chatBubbleColor = chatBubbleColor
    this.idleAnimationId = idleAnimationId
    this.textOutlineColor = textOutlineColor
    this.nameHeight = 120 // Currently set to CarSprite default
    this.animationIds = new ArrayCollection()
    this.collisionHeight = 67 // Currently set to ISOCar HEIGHT value
    this.collisionWidth = 37 // Currently set to ISOCar WIDTH value
    this.textColor = 16777215 // Currently set to value found in the CarSprite player setter function
    this.phraseIds = new ArrayCollection()
  }
}

module.exports = CatalogItemPuppet

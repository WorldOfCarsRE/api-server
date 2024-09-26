/* global ArrayCollection: writeable */
/* global CatalogItem: writeable */

ArrayCollection = global.ArrayCollection
CatalogItem = global.CatalogItem

class CatalogItemQuest extends CatalogItem {
  constructor (name, description, backgroundImage, thumbnailImage) {
    super()

    this.name = name
    this.description = description

    this.startRuleId = 0
    this.rewardIds = new ArrayCollection()
    this.rewardIds.push(22229, 22230)
    this.abandonRuleId = 0
    this.backgroundImage = backgroundImage
    this.thumbnailImage = thumbnailImage
    this.stepIds = new ArrayCollection()
    this.stepIds.push(22223, 22224)
    this.turnInRuleId = 0
    this.membersOnly = false
    this.resetRuleId = 0
    this.completionText = ''
    this.endRuleId = 0
  }
}

module.exports = CatalogItemQuest

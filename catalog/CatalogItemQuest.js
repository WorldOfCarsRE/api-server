/* global ArrayCollection: writeable */
/* global CatalogItem: writeable */

ArrayCollection = global.ArrayCollection
CatalogItem = global.CatalogItem

class CatalogItemQuest extends CatalogItem {
  constructor (name, description, backgroundImage, thumbnailImage, stepIds, rewardIds, startRuleId, abandonRuleId, endRuleId, membersOnly = false) {
    super()

    this.name = name
    this.description = description

    this.startRuleId = startRuleId
    this.rewardIds = new ArrayCollection()
    this.rewardIds.push(...rewardIds)
    this.abandonRuleId = abandonRuleId
    this.backgroundImage = backgroundImage
    this.thumbnailImage = thumbnailImage
    this.stepIds = new ArrayCollection()
    this.stepIds.push(...stepIds)
    this.turnInRuleId = 0
    this.membersOnly = membersOnly
    this.resetRuleId = 0
    this.completionText = ''
    this.endRuleId = endRuleId
  }
}

module.exports = CatalogItemQuest

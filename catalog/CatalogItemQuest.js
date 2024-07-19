/* global ArrayCollection: writeable */
/* global CatalogItem: writeable */

ArrayCollection = global.ArrayCollection
CatalogItem = global.CatalogItem

class CatalogItemQuest extends CatalogItem {
  constructor () {
    super()

    this.startRuleId = 0
    this.rewardIds = new ArrayCollection()
    this.abandonRuleId = 0
    this.backgroundImage = ''
    this.thumbnailImage = ''
    this.stepIds = new ArrayCollection()
    // TODO: public var fullRewards:Vector.<CatalogItemQuestReward>;
    // TODO: public var fullSteps:Vector.<CatalogItemQuestStep>;
    this.turnInRuleId = 0
    this.membersOnly = false
    this.resetRuleId = 0
    this.completionText = ''
    this.endRuleId = 0
  }
}

module.exports = CatalogItemQuest

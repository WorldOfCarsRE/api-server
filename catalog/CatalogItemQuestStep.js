/* global CatalogItem: writeable */

CatalogItem = global.CatalogItem

class CatalogItemQuestStep extends CatalogItem {
  constructor (name, ruleId, goal = 1) {
    super()

    this.name = name
    this.description = ''

    this.goal = goal
    this.ruleId = ruleId
    this.type = 0
    this.thumbnail = ''
  }
}

module.exports = CatalogItemQuestStep

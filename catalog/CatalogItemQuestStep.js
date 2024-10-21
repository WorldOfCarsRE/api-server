/* global CatalogItem: writeable */

CatalogItem = global.CatalogItem

class CatalogItemQuestStep extends CatalogItem {
  constructor (name, description = '') {
    super()

    this.name = name
    this.description = description

    this.goal = 0
    this.ruleId = 0
    this.type = 0
    this.thumbnail = ''
  }
}

module.exports = CatalogItemQuestStep

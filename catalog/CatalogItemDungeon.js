const CatalogItemWorldZone = require('./CatalogItemWorldZone')

class CatalogItemDungeon extends CatalogItemWorldZone {
  constructor (name, visitedRuleId, titleUrl, mapUrl, miniMapUrl, scriptUrl) {
    super(name, visitedRuleId, titleUrl, mapUrl, miniMapUrl, scriptUrl)
  }
}

module.exports = CatalogItemDungeon

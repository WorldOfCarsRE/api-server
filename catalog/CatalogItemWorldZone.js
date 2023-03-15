const CatalogItem = require('./CatalogItem')

class CatalogItemWorldZone extends CatalogItem {
  constructor (name, visitedRuleId, titleUrl, mapUrl, miniMapUrl, scriptUrl = 'scripts/isoworld/radiator_springs.lua') {
    super()

    this.name = name
    this.visitedRuleId = visitedRuleId
    this.outTransitionUrl = 'car_f_trn_gam_loaderTransition.swf'
    this.titleUrl = titleUrl
    this.mapUrl = mapUrl
    this.miniMapUrl = miniMapUrl

    this.scriptUrl = scriptUrl
  }
}

module.exports = CatalogItemWorldZone

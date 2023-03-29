const CatalogItem = global.CatalogItem

class CatalogItemMinigame extends CatalogItem {
  constructor (gameName, name) {
    super()

    this.eventId = 0
    this.gatingURL = ''
    this.gameName = gameName
    this.name = name
  }
}

module.exports = CatalogItemMinigame

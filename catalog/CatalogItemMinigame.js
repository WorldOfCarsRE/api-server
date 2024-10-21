const CatalogItem = global.CatalogItem

class CatalogItemMinigame extends CatalogItem {
  constructor (gameName, name, eventId) {
    super()

    this.eventId = eventId
    this.gatingURL = ''
    this.gameName = gameName
    this.name = name
  }
}

module.exports = CatalogItemMinigame

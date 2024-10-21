const CatalogItemMinigame = global.CatalogItemMinigame

class CatalogItemMicrogame extends CatalogItemMinigame {
  constructor (gameName, name, eventId) {
    super(gameName, name, eventId)

    this.exitButtonW = 0
    this.exitButtonX = 0
    this.exitButtonY = 0
    this.playButtonText = ''
    this.containerW = 800
    this.exitButtonH = 0
    this.containerH = 568
  }
}

module.exports = CatalogItemMicrogame

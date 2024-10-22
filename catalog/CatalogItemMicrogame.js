const CatalogItemMinigame = global.CatalogItemMinigame

class CatalogItemMicrogame extends CatalogItemMinigame {
  constructor (gameName, name, eventId) {
    super(gameName, name, eventId)

    this.exitButtonW = 33
    this.exitButtonX = 640
    this.exitButtonY = 8
    this.playButtonText = ''
    this.containerW = 680
    this.exitButtonH = 31
    this.containerH = 498
  }
}

module.exports = CatalogItemMicrogame

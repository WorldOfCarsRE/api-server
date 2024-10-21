const CatalogItemMinigame = global.CatalogItemMinigame

class CatalogItemMicrogame extends CatalogItemMinigame {
  constructor (gameName, name) {
    super(gameName, name)

    this.exitButtonW = 0
    this.exitButtonX = 0
    this.exitButtonY = 0
    this.playButtonText = ''
    this.containerW = 0
    this.exitButtonH = 0
    this.containerH = 0
  }
}

module.exports = CatalogItemMicrogame

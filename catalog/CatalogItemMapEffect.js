const CatalogItem = global.CatalogItem

class CatalogItemMapEffect extends CatalogItem {
  constructor (teleportMapID = 0, minigameRadius = 59 * 0.7) {
    super()

    this.spinoutDuration = 0
    this.boostPowerIncrease = 0
    this.blastAnimID = 0
    this.teleportMapID = teleportMapID
    this.geyserTorque = 0
    this.boostRadius = 0
    this.multiPlayerRaceName = ''
    this.geyserRadius = 0
    this.dustDevilRadius = 0
    this.dustDevilDuration = 0
    this.teleportRadius = 0
    this.slipperyDragScale = 0
    this.minigameID = 0
    this.dustDevilForce = 0
    this.minigameDropPoint = ''
    this.slipperyPowerScale = 0
    this.slipperyMaxSteerAngle = 0
    this.geyserBarrelRolls = 0
    this.blastDuration = 0
    this.jumpVelocity = 0
    this.multiPlayerRaceDropPoint = ''
    this.blastRadius = 0
    this.storeID = 0
    this.singlePlayerRaceDropPoint = ''
    this.slipperyDrift = 0
    this.storeRadius = 0
    this.singlePlayerRaceID = 0
    this.boostDuration = 0
    this.spinoutAnimID = 0
    this.jumpRadius = 0
    this.multiPlayerRaceRadius = 0
    this.singlePlayerRaceName = 0
    this.minigameRadius = minigameRadius
    this.singlePlayerRaceRadius = 0
    this.slipperyRadius = 0
    this.boostAnimID = 0
    this.geyserJumpVelocity = 0
    this.blastForceMagnitude = 0
    this.spinoutRadius = 0
  }
}
module.exports = CatalogItemMapEffect

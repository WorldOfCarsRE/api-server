class RacecarHighScore {
  constructor (carId, racecarId, carName) {
      this.carId = carId
      this.logoFontId = 0
      this.racecarId = racecarId
      this.modifyTime = 0
      this.createTime = 0
      this.contextId = 0
      this.logoFontColor = 0
      this.logoBackgroundColor = 0
      this.logoBackgroundId = 0
      this.fields = {'bestTime': 0, 'bestLap': 0, 'points': 0}
      this.carNumber = 0
      this.carName = carName
  }
}

module.exports = RacecarHighScore

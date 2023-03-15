CatalogItem = global.CatalogItem

class CatalogItemSimpleSound extends CatalogItem {
  constructor (group, alias) {
    super()

    // Group and Alias for a sound can be found through game_audio.xml.
    // https://github.com/WorldOfCarsRE/media/blob/main/WorldOfCarsOnline/worldofcars/game/config/game_audio.xml
    this.group = group
    this.alias = alias
  }
}

module.exports = CatalogItemSimpleSound

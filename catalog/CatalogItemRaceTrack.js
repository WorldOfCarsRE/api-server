/* global ArrayCollection: writeable */

const CatalogItemDungeon = global.CatalogItemDungeon
ArrayCollection = global.ArrayCollection

class CatalogItemRaceTrack extends CatalogItemDungeon {
  constructor (proTrack, spClientScriptUrl, titleUrl, scriptUrl, mapUrl, miniMapUrl, group, alias, physicsUrl) {
    super()

    this.proTrack = proTrack
    this.spClientScriptUrl = spClientScriptUrl
    this.racers = new ArrayCollection()
    this.racers.push(31016) // Boost
    this.racers.push(31017) // DJ
    this.racers.push(31018) // Wingo
    this.racers.push(31019) // Snot Rod
    this.titleUrl = titleUrl
    this.scriptUrl = scriptUrl
    this.mapUrl = mapUrl
    this.miniMapUrl = miniMapUrl
    this.photoFinishTrackUrl = 'car_f_gui_gam_photoFinish.swf'
    this.physicsUrl = physicsUrl
    this.startingTrackSegment = 1
    this.lapsToWin = 3
    this.group = group
    this.alias = alias
  }
}

module.exports = CatalogItemRaceTrack

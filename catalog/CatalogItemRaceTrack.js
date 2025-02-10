/* global ArrayCollection: writeable */

const CatalogItemDungeon = global.CatalogItemDungeon
ArrayCollection = global.ArrayCollection

class CatalogItemRaceTrack extends CatalogItemDungeon {
  constructor (name, description, proTrack, spClientScriptUrl, mpClientScriptUrl, titleUrl, scriptUrl, mapUrl, miniMapUrl, group, alias, physicsUrl, exitMapId, logoUrl, sceneryUrl, brandingMapUrl) {
    super()

    this.name = name
    this.description = description

    this.proTrack = proTrack
    this.spClientScriptUrl = spClientScriptUrl
    this.mpClientScriptUrl = mpClientScriptUrl
    this.racers = new ArrayCollection()
    this.racers.push(31018) // Boost
    this.racers.push(31016) // Snot Rod
    this.racers.push(31019) // Wingo
    this.titleUrl = titleUrl
    this.mpClientScriptUrl = mpClientScriptUrl
    this.mapUrl = mapUrl
    this.miniMapUrl = miniMapUrl
    this.photoFinishTrackUrl = 'car_f_gui_gam_photoFinish.swf'
    this.physicsUrl = physicsUrl
    this.startingTrackSegment = 1
    this.lapsToWin = 3
    this.exitMapId = exitMapId
    this.group = group
    this.alias = alias
    this.logoUrl = logoUrl
    this.sceneryUrl = sceneryUrl
    this.onLeaderboards = true
    this.raceFinishedEventId = 1
    this.brandingMapUrl = brandingMapUrl
  }
}

module.exports = CatalogItemRaceTrack

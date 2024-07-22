/* global ArrayCollection: writeable */

const CatalogItemDungeon = global.CatalogItemDungeon
ArrayCollection = global.ArrayCollection

class CatalogItemRaceTrack extends CatalogItemDungeon {
  // FIXME: This race track doesn't seem to load at the moment, for now we will use another map for experimenting.
  // constructor (proTrack = false, spClientScriptUrl = 'sp_ccs', titleUrl = 'car_f_gui_ttl_carburetorCounty_en_US.swf', scriptUrl = 'sp_ccs', mapUrl = 'car_w_trk_rsp_CarburetorCountySpeedway') {
  constructor (proTrack = false, spClientScriptUrl = 'sp_ccs', titleUrl = 'car_f_gui_ttl_twistinTailfinTrk_en_US.swf', scriptUrl = 'sp_ccs', mapUrl = 'car_w_trk_tfn_TwistinTailfinTrails', miniMapUrl = 'car_g_map_trk_twistinTailfin.swf',
    group = 'Music', alias = 'TwistinTailfinTrack') {
    super()

    this.proTrack = proTrack
    this.spClientScriptUrl = spClientScriptUrl
    this.racers = new ArrayCollection()
    this.racers.push(31016) // Boost
    this.racers.push(31017) // Boost
    this.racers.push(31018) // Boost
    this.titleUrl = titleUrl
    this.scriptUrl = scriptUrl
    this.mapUrl = mapUrl
    this.miniMapUrl = miniMapUrl
    this.photoFinishTrackUrl = 'car_f_gui_gam_photoFinish.swf'
    this.physicsUrl = 'car_w_trk_tfn_twistinTailfin_SS_V1_phys.xml'
    this.startingTrackSegment = 1
    this.lapsToWin = 3
    this.group = group
    this.alias = alias
  }
}

module.exports = CatalogItemRaceTrack

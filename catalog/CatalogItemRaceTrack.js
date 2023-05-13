/* global ArrayCollection: writeable */

const CatalogItemDungeon = global.CatalogItemDungeon
ArrayCollection = global.ArrayCollection

class CatalogItemRaceTrack extends CatalogItemDungeon {
  // FIXME: This race track doesn't seem to load at the moment, for now we will use another map for experimenting.
  // constructor (proTrack = false, spClientScriptUrl = 'sp_ccs', titleUrl = 'car_f_gui_ttl_carburetorCounty_en_US.swf', scriptUrl = 'sp_ccs', mapUrl = 'car_w_trk_rsp_CarburetorCountySpeedway') {
  constructor (proTrack = false, spClientScriptUrl = 'sp_ccs', titleUrl = 'car_f_gui_ttl_twistinTailfinTrk_en_US.swf', scriptUrl = 'sp_ccs', mapUrl = 'car_w_trk_tfn_TwistinTailfinTrails', miniMapUrl = 'car_g_map_env_redhoodValley.swf') {
    super()

    this.proTrack = proTrack
    this.spClientScriptUrl = spClientScriptUrl
    this.racers = new ArrayCollection()
    this.titleUrl = titleUrl
    this.scriptUrl = scriptUrl
    this.mapUrl = mapUrl
    this.miniMapUrl = miniMapUrl
    this.photoFinishTrackUrl = 'car_f_gui_gam_photoFinish.swf'
    this.physicsUrl = 'car_w_trk_tfn_twistinTailfin_SS_V1_phys.xml'
  }
}

module.exports = CatalogItemRaceTrack

/* global ArrayCollection: writeable */

const CatalogItemDungeon = global.CatalogItemDungeon
ArrayCollection = global.ArrayCollection

class CatalogItemRaceTrack extends CatalogItemDungeon {
  constructor (proTrack = false, spClientScriptUrl = 'sp_ccs', titleUrl = 'car_f_gui_ttl_carburetorCounty_en_US.swf', scriptUrl = 'sp_ccs', mapUrl = 'car_w_trk_rsp_CarburetorCountySpeedway') {
    super()

    this.proTrack = proTrack
    this.spClientScriptUrl = spClientScriptUrl
    this.racers = new ArrayCollection()
    this.titleUrl = titleUrl
    this.scriptUrl = scriptUrl
    this.mapUrl = mapUrl
  }
}

module.exports = CatalogItemRaceTrack

const CatalogItemWorldZone = require('./CatalogItemWorldZone')

class CatalogItemDungeon extends CatalogItemWorldZone {
  constructor (itemId) {
    super(itemId, 'New Player Tutorial', 'car_f_evt_rsn_newPlayerRsnBackStory_en_US.swf', 'car_w_env_rsp_NewPlayer', 'car_g_map_env_newPlayer.swf', 'new_player_tutorial')

    this.itemId = itemId
  }
}

module.exports = CatalogItemDungeon

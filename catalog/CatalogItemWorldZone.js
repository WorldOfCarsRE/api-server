const CatalogItem = require('./CatalogItem');

class CatalogItemWorldZone extends CatalogItem {
    constructor() {
        super();

        this.visitedRuleId = 0;
        this.outTransitionUrl = '';
        this.titleUrl = 'car_f_gui_ttl_radiatorSprings_en_US.swf';
        this.mapUrl = 'car_w_env_rsp_RadiatorSprings';
        this.miniMapUrl = 'car_f_gui_map_carburetorCounty_en_US.swf';
    }
}

module.exports = CatalogItemWorldZone

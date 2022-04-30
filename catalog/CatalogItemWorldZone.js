const CatalogItem = require('./CatalogItem');

class CatalogItemWorldZone extends CatalogItem {
    constructor() {
        super();

        this.visitedRuleId = 0;
        this.outTransitionUrl = '';
        this.titleUrl = 'car_g_gui_ttl_carburetorCounty_en_US.swf';
    }
}

module.exports = CatalogItemWorldZone
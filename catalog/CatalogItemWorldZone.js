const CatalogItem = require('./CatalogItem');

class CatalogItemWorldZone extends CatalogItem {
    constructor() {
        super();

        this.visitedRuleId = 0;
        this.outTransitionUrl = '';
        this.titleUrl = 'car_g_rac_ban_mcQueensRacingSeries.ajpg';
    }
}

module.exports = CatalogItemWorldZone
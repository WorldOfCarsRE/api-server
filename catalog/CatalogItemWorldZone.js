const CatalogItem = require('./CatalogItem');

class CatalogItemWorldZone extends CatalogItem {
    constructor() {
        super();

        this.visitedRuleId = 0;
    }
}

module.exports = CatalogItemWorldZone
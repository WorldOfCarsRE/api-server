const CatalogItem = require('./CatalogItem');

class CatalogItemRaceSeries extends CatalogItem {
    constructor(itemId) {
        super();

        this.itemId = itemId;
    }
}

module.exports = CatalogItemRaceSeries
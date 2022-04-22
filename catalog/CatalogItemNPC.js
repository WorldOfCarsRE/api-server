const CatalogItem = require('./CatalogItem');

class CatalogItemNPC extends CatalogItem {
    constructor() {
        super();

        this.smod = '';
    }
}

module.exports = CatalogItemNPC
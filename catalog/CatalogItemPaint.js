const CatalogItem = require('./CatalogItem');

class CatalogItemPaint extends CatalogItem {
    constructor() {
        super();

        this.color = 0;
    }
}

module.exports = CatalogItemPaint
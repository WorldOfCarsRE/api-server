const CatalogItem = require('./CatalogItem');

class CatalogItemPaint extends CatalogItem {
    constructor(color) {
        super();

        this.color = color;
    }
}

module.exports = CatalogItemPaint
const CatalogItem = require('./CatalogItem');

class CatalogItemNPC extends CatalogItem {
    constructor() {
        super();

        this.smod = 'car_r_chr_avt_stock.smod';
    }
}

module.exports = CatalogItemNPC
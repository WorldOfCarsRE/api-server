const CatalogItem = require('./CatalogItem');

ArrayCollection = global.ArrayCollection;

class CatalogItemDecal extends CatalogItem {
    constructor() {
        super();

        this.type = 1;

        this.assets = new ArrayCollection();
        this.assets.push('car_t_cst_eyl_avatar.jpg');

        this.slots = new ArrayCollection();
    }
}

module.exports = CatalogItemDecal
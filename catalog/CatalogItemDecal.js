const CatalogItem = require('./CatalogItem');

ArrayCollection = global.ArrayCollection;

class CatalogItemDecal extends CatalogItem {
    constructor() {
        super();

        this.type = 1;
        this.assets = new ArrayCollection();
        this.slots = new ArrayCollection();
    }
}

module.exports = CatalogItemDecal
const CatalogPlayerItem = require('./CatalogPlayerItem');

ArrayCollection = global.ArrayCollection;

class CatalogPlayerStoreItem extends CatalogPlayerItem {
    constructor() {
        super();

        this.sponsorIds = new ArrayCollection();
        this.storeThumbnail = '';
    }
}

module.exports = CatalogPlayerStoreItem
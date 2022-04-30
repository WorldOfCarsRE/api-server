const CatalogItemDungeon = require('./CatalogItemDungeon');

class CatalogItemRaceTrack extends CatalogItemDungeon {
    constructor(itemId) {
        super();

        this.itemId = itemId;
    }
}

module.exports = CatalogItemRaceTrack
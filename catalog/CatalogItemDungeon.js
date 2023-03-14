const CatalogItemWorldZone = require('./CatalogItemWorldZone');

class CatalogItemDungeon extends CatalogItemWorldZone {
    constructor(itemId) {
        super();

        this.name = "New Player Tutorial"
        this.itemId = itemId;

        this.scriptUrl = 'new_player_tutorial';
    }
}

module.exports = CatalogItemDungeon;

CatalogItemRaceSeries = global.CatalogItemRaceSeries;
CatalogItemWorldZone = global.CatalogItemWorldZone;

libamf = global.libamf;
ArrayCollection = global.ArrayCollection;

const {items} = require('../constants');

class CatalogService extends libamf.Service {
    constructor() {
        super('catalog');
    }

    getItemsByIds(itemIds) {
        const array = new ArrayCollection();

        for (const itemId of itemIds) {
            console.log(itemId);

            var item = items[itemId]['itemObj'];
            array.push(item);
        }

        return array;
    }

    getTreeById(id, depth) {
        console.log('getTreeById:', id, depth);

        const resp = new ArrayCollection();
        resp.push(new CatalogItemRaceSeries());
        return resp;
    }

    getItemsByType(itemType) {
        console.log('getItemsByType:', itemType);

        const resp = new ArrayCollection();
        resp.push(new CatalogItemWorldZone());
        return resp;
    }

    getItem(itemId) {
        console.log('getItem:', itemId);

        var item = items[itemId]['itemObj'];
        item.itemId = itemId;

        return item;
    }
}

module.exports = CatalogService
CatalogItemRaceSeries = global.CatalogItemRaceSeries;
CatalogItemWorldZone = global.CatalogItemWorldZone;

libamf = global.libamf;
ArrayCollection = global.ArrayCollection;

const {clientData} = require('../constants');

class CatalogService extends libamf.Service {
    constructor() {
        super('catalog');
    }

    getItemsByIds(itemIds) {
        const array = new ArrayCollection();

        for (const itemId of itemIds) {
            var item = clientData[itemId]['classObj'];

            console.log(item);

            array.push(item);
        }

        return array;
    }

    getTreeById(id, depth) {
        console.log('getTreeById:', id, depth);

        const resp = new ArrayCollection();
        resp.push(new CatalogItemRaceSeries(44000));
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

        var item = clientData[itemId]['classObj'];

        return item;
    }
}

module.exports = CatalogService
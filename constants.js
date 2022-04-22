const CatalogItemPaint = require('./catalog/CatalogItemPaint');
const CatalogItemChassis = require('./catalog/CatalogItemChassis');
const CatalogItemNPC = require('./catalog/CatalogItemNPC');

var clientData = {};

clientData[5501] = {
    'name': 'Sports',
    'classObj': new CatalogItemChassis()
};

clientData[20210] = {
    'name': 'Red Lightening',
    'classObj': new CatalogItemPaint(15804939)
};

clientData[15001] = {
    'name': 'Downtown',
    'classObj': new CatalogItemWorldZone()
};

clientData[10101] = {
    'name': 'Eye Color',
    'classObj': new CatalogItemChassis()
};

clientData[30601] = {
    'name': 'Wheel',
    'classObj': new CatalogItemChassis()
};

clientData[30502] = {
    'name': 'Tire',
    'classObj': new CatalogItemChassis()
};

clientData[51103] = {
    'name': 'Car Decal',
    'classObj': new CatalogItemChassis()
};

clientData[51104] = {
    'name': 'Car Decal',
    'classObj': new CatalogItemChassis()
};

clientData[20206] = {
    'name': 'Gray Vee',
    'classObj': new CatalogItemPaint(10526621)
};

clientData[20207] = {
    'name': 'Octagonal Orange',
    'classObj': new CatalogItemPaint(15033856)
};

clientData[15002] = {
    'name': '?',
    'classObj': new CatalogItemNPC()
};

clientData[15003] = {
    'name': '?',
    'classObj': new CatalogItemNPC()
};

clientData[31010] = {
    'name': '?',
    'classObj': new CatalogItemNPC()
};

clientData[15006] = {
    'name': '?',
    'classObj': new CatalogItemChassis()
};

clientData[20209] = {
    'name': 'Powerhouse Purple',
    'classObj': new CatalogItemPaint(10571765)
}

clientData[20201] = {
    'name': 'DJ Blue',
    'classObj': new CatalogItemPaint(167913)
}

clientData[20205] = {
    'name': 'Chick Hicks Green',
    'classObj': new CatalogItemPaint(7322195)
}

module.exports = {clientData};
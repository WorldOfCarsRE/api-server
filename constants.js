const CatalogItemPaint = require('./catalog/CatalogItemPaint');
const CatalogItemChassis = require('./catalog/CatalogItemChassis');

var items = {};

items[5501] = {
    'name': 'Sports',
    'itemObj': new CatalogItemChassis()
};

items[20210] = {
    'name': 'Red Lightening',
    'itemObj': new CatalogItemPaint()
};

items[10101] = {
    'name': 'Eye Color',
    'itemObj': new CatalogItemChassis()
};

items[30601] = {
    'name': 'Wheel',
    'itemObj': new CatalogItemChassis()
};

items[30502] = {
    'name': 'Tire',
    'itemObj': new CatalogItemChassis()
};

items[51103] = {
    'name': 'Car Decal',
    'itemObj': new CatalogItemChassis()
};

items[51104] = {
    'name': 'Car Decal',
    'itemObj': new CatalogItemChassis()
};

items[20206] = {
    'name': '?',
    'itemObj': new CatalogItemChassis()
};

items[20207] = {
    'name': '?',
    'itemObj': new CatalogItemChassis()
};

items[15003] = {
    'name': '?',
    'itemObj': new CatalogItemChassis()
};

items[31010] = {
    'name': '?',
    'itemObj': new CatalogItemChassis()
};

items[15006] = {
    'name': '?',
    'itemObj': new CatalogItemChassis()
};

module.exports = {items};
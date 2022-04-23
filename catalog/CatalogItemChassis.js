const CatalogCarItem = require('./CatalogCarItem');

ArrayCollection = global.ArrayCollection;

class CatalogItemChassis extends CatalogCarItem {
    constructor() {
        super();

        this.baseProperties = new ArrayCollection();
        this.modelUrl = '';
        this.dynamicJoints = new ArrayCollection();
        this.shading = '';
        this.offsets = new ArrayCollection();
        this.subClip = '';
        this.base = '';
        this.subClip = new ArrayCollection();
        this.base = '';
        this.slots = new ArrayCollection();
        this.staticJoints = new ArrayCollection();
    }
}

module.exports = CatalogItemChassis
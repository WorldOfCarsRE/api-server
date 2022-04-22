const CatalogItem = require('./CatalogItem');

ArrayCollection = global.ArrayCollection;

class CatalogItemChassis extends CatalogItem {
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
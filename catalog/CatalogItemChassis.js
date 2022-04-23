const CatalogCarItem = require('./CatalogCarItem');

ArrayCollection = global.ArrayCollection;

class CatalogItemChassis extends CatalogCarItem {
    constructor() {
        super();

        this.baseProperties = new Object();
        this.baseProperties.body_main = 'body';
        this.baseProperties.eye_left = 'eye_left';
        this.baseProperties.eye_right = 'eye_right';

        this.modelUrl = 'car_r_chr_avt_sports.smod';
        this.dynamicJoints = new ArrayCollection();
        this.shading = '';
        this.offsets = new ArrayCollection();
        this.subClip = '';
        this.base = '';
        this.slots = new ArrayCollection();
        this.staticJoints = new ArrayCollection();
    }
}

module.exports = CatalogItemChassis
const CatalogCarItem = require('./CatalogCarItem');

ArrayCollection = global.ArrayCollection;

class CatalogItemChassis extends CatalogCarItem {
    constructor() {
        super();

        this.baseProperties = new Object();
        this.baseProperties.body_main = 'body';
        this.baseProperties.eye_left = 'eye_left';
        this.baseProperties.eye_right = 'eye_right';

        this.baseProperties.eyelids_male = 'car_t_cst_eyl_avatar.jpg';
        this.baseProperties.eyelids_female = 'car_t_cst_eyl_avatar_female.jpg';

        this.modelUrl = 'car_r_chr_avt_sports.smod';
        this.dynamicJoints = new ArrayCollection();
        this.shading = 'car_t_chr_avt_shadow.png';
        this.offsets = new ArrayCollection();
        this.subClip = '';
        this.base = '';
        this.slots = new ArrayCollection();
        this.staticJoints = new ArrayCollection();
    }
}

module.exports = CatalogItemChassis
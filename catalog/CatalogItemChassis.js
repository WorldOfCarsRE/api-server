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

        this.baseProperties.eyelids_top = 'eyelid_top';
        this.baseProperties.eyelids_bottom = 'eyelid_bot';

        this.baseProperties.wheels_left_front = 'rim_left_front';
        this.baseProperties.wheels_left_rear = 'rim_left_rear';
        this.baseProperties.wheels_right_front = 'rim_right_front';
        this.baseProperties.wheels_right_rear = 'rim_right_rear';

        this.baseProperties.tirewalls_left_front = 'tirewall_left_front';
        this.baseProperties.tirewalls_left_rear = 'tirewall_left_rear';
        this.baseProperties.tirewalls_right_front = 'tirewall_right_front';
        this.baseProperties.tirewalls_right_rear = 'tirewall_right_rear';

        this.modelUrl = 'car_r_chr_avt_sports.smod';
        this.dynamicJoints = new ArrayCollection();
        // this.shading = 'car_t_chr_avt_shadow.png';
        // The shading URL below might be correct but kept the above URL just in case
        this.shading = 'car_t_cst_pjb_sports_shading.swf';
        this.offsets = new ArrayCollection();
        this.subClip = 'sports';
        this.base = '';
        this.slots = new ArrayCollection();
        this.staticJoints = new ArrayCollection();
    }
}

module.exports = CatalogItemChassis
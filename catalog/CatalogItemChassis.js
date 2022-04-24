const CatalogCarItem = require('./CatalogCarItem');
const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');

ArrayCollection = global.ArrayCollection;
CatalogChassisJointDynamic = global.CatalogChassisJointDynamic;
CatalogChassisJointStatic = global.CatalogChassisJointStatic;
CatalogItemChassisJointOffset = global.CatalogItemChassisJointOffset;
CatalogItemChassisJointSlot = global.CatalogItemChassisJointSlot;

class CatalogItemChassis extends CatalogCarItem {
    constructor(name) {
        super();

        // The base properties are the same throughout all chassis'.
        // They don't need changing.
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

        this.modelUrl = `car_r_chr_avt_${name}.smod`;

        let xmlData = fs.readFileSync(`assets/chassis/${name}.xml`, 'utf-8');
        let parser = new XMLParser({ignoreAttributes : false});
        let config = parser.parse(xmlData).config;

        this.dynamicJoints = new ArrayCollection();
        this.staticJoints = new ArrayCollection();

        this.offsets = new ArrayCollection();
        this.slots = new ArrayCollection();

        // Joints
        let joints = config.joints;
        // Dynamic Joints
        let dynamic = joints.defaults[0].joint;
        for (let joint of dynamic) {
            let dynamicJoint = new CatalogChassisJointDynamic();
            dynamicJoint.name = joint["@_name"]
            dynamicJoint.value = Number(joint["@_value"]);
            dynamicJoint.min = Number(joint["@_min"]);
            dynamicJoint.max = Number(joint["@_max"]);
            dynamicJoint.type = joint["@_type"];

            if (joint.linked) {
                joint.linked.forEach(link => {
                    dynamicJoint.linked.push(link["@_name"]);
                });
            }

            this.dynamicJoints.push(dynamicJoint);
        }
        // Static Joints
        let staticJoints = joints.defaults[1].joint;
        for (let joint of staticJoints) {
            let staticJoint = new CatalogChassisJointStatic();
            staticJoint.name = joint["@_name"];
            staticJoint.tx = Number(joint["@_tx"]);
            staticJoint.ty = Number(joint["@_ty"]);
            staticJoint.tz = Number(joint["@_tz"]);

            staticJoint.sx = Number(joint["@_sx"]);
            staticJoint.sy = Number(joint["@_sy"]);
            staticJoint.sz = Number(joint["@_sz"]);

            this.staticJoints.push(staticJoint);
        }

        // Offsets
        for (let joint of joints.offsets.joint) {
            let offset = new CatalogChassisOffset();
            offset.name = joint["@_name"];

            offset.x = Number(joint["@_x"]);
            offset.y = Number(joint["@_y"]);
            offset.z = Number(joint["@_z"]);

            this.offsets.push(offset);
        }

        // Decals (Slots)
        for (let decal of config.decals.decal) {
            let slot = new CatalogChassisSlot();
            slot.pos = decal["@_pos"];
            slot.x = Number(decal["@_x"]);
            slot.y = Number(decal["@_y"]);
            slot.frameWidth = Number(decal["@_frameWidth"]);
            slot.frameHeight = Number(decal["@_frameHeight"]);

            this.slots.push(slot);
        }

        // this.shading = 'car_t_chr_avt_shadow.png';
        // The shading URL below seems to be correct but kept the above URL just in case
        this.shading = config.shading.split('/')[4];
        this.subClip = config.subClip;
        this.base = config.base;
    }
}

module.exports = CatalogItemChassis
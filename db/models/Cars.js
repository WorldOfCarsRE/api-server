/* global mongoose: writeable */

mongoose = global.mongoose

const Cars = new mongoose.model('Cars', {
  _id: { type: Number },
  carData: { type: Object },
  ownerAccount: { type: String },
  accountId: { type: Number }, // Account object id
  racecarId: { type: Number }, // DistributedRaceCar object id
  friends: { type: Array }, // Friends list (of Account object ids)
  membershipStart: { type: Date }, // Membership start date
  yardPermissionMask: { type: Number }, // Yard permission mask
  ruleStates: { type: Array }
})

module.exports = Cars

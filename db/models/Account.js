/* global mongoose: writeable */

mongoose = global.mongoose

const Account = new mongoose.model('Account', {
  _id: { type: Number },
  username: { type: String },
  password: { type: String },
  playerId: { type: Number }, // DistributedCarPlayer object id
  racecarId: { type: Number }, // DistributedRaceCar object id
  statusId: { type: Number }, // CarPlayerStatus object id
  puppet: { type: Number },
  lastLogin: { type: String },
  codesRedeemed: { type: Array }
})

module.exports = Account

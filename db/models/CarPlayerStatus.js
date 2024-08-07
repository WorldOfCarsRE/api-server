/* global mongoose: writeable */

mongoose = global.mongoose

const CarPlayerStatus = new mongoose.model('CarPlayerStatus', {
  _id: { type: Number },
  setLocationType: { type: Number, default: 0 },
  setPrivacySettings: { type: Number, default: 0 },
  ownerAccount: { type: String },
  accountId: { type: Number } //  Account object id
})

module.exports = CarPlayerStatus

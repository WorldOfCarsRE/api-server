/* global mongoose: writeable */

mongoose = global.mongoose

const RedeemableCodes = new mongoose.model('RedeemableCodes', {
  _id: { type: Number },
  codeName: { type: String },
  type: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  quantity: { type: Number },
  rewardId: { type: Number },
  expirationDate: { type: Date }
})

module.exports = RedeemableCodes

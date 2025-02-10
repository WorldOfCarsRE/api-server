/* global mongoose: writeable */

mongoose = global.mongoose

const RaceCodes = new mongoose.model('RaceCodes', {
  _id: { type: Number },
  codeName: { type: String },
  badgeId: { type: Number }
})

module.exports = RaceCodes

/* global mongoose: writeable */

mongoose = global.mongoose

const Account = new mongoose.model('Account', {
  _id: { type: Number },
  username: { type: String },
  password: { type: String },
  puppet: { type: Number }
})

module.exports = Account

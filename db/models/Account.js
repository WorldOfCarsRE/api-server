/* global mongoose: writeable */

mongoose = global.mongoose

const Account = new mongoose.model('Account', {
  _id: { type: Number },
  username: { type: String }
})

module.exports = Account

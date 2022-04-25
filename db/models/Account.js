mongoose = global.mongoose;

var Account = new mongoose.model('Account', {
  _id: {type: Number},
  username: {type: String},
  password: {type: String}
});

module.exports = Account;
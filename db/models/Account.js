mongoose = global.mongoose;

var Account = new mongoose.model('Account', {
  accountId: {type: Number},
  username: {type: String},
  password: {type: String}
});

module.exports = Account;
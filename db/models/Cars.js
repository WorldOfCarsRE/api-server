mongoose = global.mongoose;

var Cars = new mongoose.model('Cars', {
  accountId: {type: Number},
  serializedData: {type: Buffer},
});

module.exports = Cars;
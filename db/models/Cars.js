mongoose = global.mongoose

const Cars = new mongoose.model('Cars', {
  _id: { type: Number }, // This is the accountId
  carData: { type: Object },
  ownerAccount: { type: String },
  dislId: { type: Number } // OTP server Account object id
})

module.exports = Cars

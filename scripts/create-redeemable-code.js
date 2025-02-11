/* global mongoose: writeable */

global.mongoose = require('mongoose')

const readline = require('readline-sync')
const RedeemableCodes = require('../db/models/RedeemableCodes')

async function generateRedeemableCode (codeData) {
  const lastCode = await RedeemableCodes.findOne().sort({ _id: -1 }).limit(1)
  const nextId = lastCode ? lastCode._id + 1 : 1

  const newCode = new RedeemableCodes({
    _id: nextId,
    codeName: codeData.codeName,
    type: codeData.type,
    description: codeData.description,
    thumbnail: codeData.thumbnail,
    quantity: codeData.quantity,
    rewardId: codeData.rewardId,
    expirationDate: codeData.expirationDate
  })

  const savedCode = await newCode.save()
  return savedCode
}

(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/woc')

  console.log('Connected to MongoDB!')

  console.log(await generateRedeemableCode({
    codeName: String(readline.question('Name: ')),
    type: String(readline.question('Type: ')),
    description: String(readline.question('Description: ')),
    thumbnail: String(readline.question('Thumbnail: ')),
    quantity: Number(readline.question('Quantity: ')),
    rewardId: Number(readline.question('Reward Id: ')),
    expirationDate: new Date(String(readline.question('Expiration date: '))) // Examples: year, month or year, month, day
  }))
})()

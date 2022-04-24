mongoose = global.mongoose;

var Account = require('./models/Account');
const bcrypt = require('bcrypt');

const saltRounds = 10;

class Database {
    constructor() {
        mongoose.connect('mongodb://127.0.0.1:27017/woc');

        console.log('Connected to MongoDB!');

        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }

   async isUsernameAvailable(username) {
       var account = await Account.exists({username: username});

       if (account) {
           return false;
       }

       return true;
}


    async createAccount(username, password) {
        if (!this.isUsernameAvailable(username)) {
            // Sanity check
            return false;
        }

        const accountId = await Account.countDocuments({}) + 1;
        console.log('accountId', accountId);

        bcrypt.hash(password, saltRounds, async function(err, hash) {
            if (err) {
                // Something has gone wrong.
                console.log(err);
                return false;
            }

            // Store the account object.
            var account = new Account({
                accountId: accountId,
                username: username,
                password: hash
            });

            await account.save()

            return true;
        });
    }
}

module.exports = Database
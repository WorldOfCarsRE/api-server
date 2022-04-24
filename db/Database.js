mongoose = global.mongoose;

var Account = require('./models/Account');

class Database {
    constructor() {
        mongoose.connect('mongodb://127.0.0.1:27017/woc');

        console.log('Connected to MongoDB!');

        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }

    checkAccountExists(username) {
        Account.exists({name : username}, function (err, doc) {
            if (err) {
                console.log(err);
                return false;
            } else {
                return doc;
            }
        });

        return true;
    }

    async registerAccount(username, password) {
        var accountId = 0;

        Account.countDocuments({}, function(err, docCount) {
            if (err) {
                console.log(err);
            } else {
                accountId = docCount + 1;
            }
        });

        var account = new Account({
            accountId: accountId,
            username: username,
            password: password
        });

        await account.save();
    }
}

module.exports = Database
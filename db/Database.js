mongoose = global.mongoose;
create = global.create;

var Account = require('./models/Account');
const bcrypt = require('bcrypt');

const saltRounds = 12;

class Database {
    constructor() {
        mongoose.connect('mongodb://127.0.0.1:27017/woc');

        console.log('Connected to MongoDB!');

        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }

    async handleFlashLogin(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        if (username == undefined && password == undefined) {
            username = req.query.username;
            password = req.query.password;
        }

        var validCredentials = await this.verifyCredentials(username, password);
        var errorResp = '';

        const root = create().ele('result');

        const success = root.ele('success');
        success.txt(validCredentials);

        const err = root.ele('error');

        if(!validCredentials) {
            errorResp = 'PARAM_ERROR';
        }

        err.txt(errorResp);

        const input = root.ele('input');
        input.ele('cookieValue');

        input.ele('loginType').txt('hard');

        root.ele('token');
        root.ele('type').txt('hard');
        root.ele('banURL');

        root.ele('username').txt(username);

        const xml = root.end({prettyPrint: true});
        res.send(xml);
    }

    async handleAccountLogin(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        if (username == undefined && password == undefined) {
            username = req.query.username;
            password = req.query.password;
        }

        var validCredentials = await this.verifyCredentials(username, password);

        if (validCredentials) {
            console.log('Authenticated!')
            var ses = req.session;
            ses.username = username;
            ses.success = '1';
            ses.status = 'logged_in_player';
            ses.logged = true;
            ses.userId = await this.getAccountIdFromUser(username);
        }

        const root = create().ele('AccountLoginResponse');
        const success = root.ele('success');
        success.txt(validCredentials);

        const xml = root.end({prettyPrint: true});
        res.send(xml);
    }

   async isUsernameAvailable(username) {
       var account = await Account.exists({username: username});

       if (account) {
           return false;
       }

       return true;
}

   async getAccountIdFromUser(username) {
       var account = await this.retrieveAccount(username);

       if (account) {
           return account.accountId;
       }

       return -1;
    }

    async retrieveAccount(username) {
        var account = await Account.findOne({username: username});

        return account;
    }

    async verifyCredentials(username, password) {
        var account = await this.retrieveAccount(username);

        if(!account) {
            return false;
        }

        return bcrypt.compareSync(password, account.password);
    }

    async createAccount(username, password) {
        if (!await this.isUsernameAvailable(username)) {
            // Sanity check
            return false;
        }

        const accountId = await Account.countDocuments({}) + 1;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        // Store the account object.
        var account = new Account({
            accountId: accountId,
            username: username,
            password: hashedPassword
        });

        await account.save();

        return true;
    }
}

module.exports = Database
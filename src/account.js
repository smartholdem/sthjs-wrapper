const Api = require("./api.js");

const Account = {};

Account.getBalance = function (address, callback) {
    Api.get({
        path: "/api/accounts/getBalance",
        qs: {
            address,
        },
        json: true,
    }, callback);
};

Account.getPublicKey = function (address, callback) {
    Api.get({
        path: "/api/accounts/getPublicKey",
        qs: {
            address,
        },
        json: true,
    }, callback);
};

Account.generatePublicKey = function (secretKey, callback) {
    Api.post({
        path: "/api/accounts/generatePublicKey",
        form: {
            secret: secretKey,
        },
        json: true
    }, callback);
};

Account.getAccount = function (address, callback) {
    Api.get({
        path: "/api/accounts",
        qs: {
            address,
        },
        json: true
    }, callback);
};

Account.getVotes = function (address, callback) {
    Api.get({
        path: "/api/accounts/delegates",
        qs: {
            address,
        },
        json: true
    }, callback);
};

module.exports = Account;

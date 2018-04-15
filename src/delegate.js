const Api = require("./api.js");

const Delegate = {};

Delegate.getDelegates = function (qs, callback) {
    Api.get({
        path: "/api/delegates",
        qs,
        json: true
    }, callback);
};

Delegate.getByUsername = function (username, callback) {
    Api.get({
        path: "/api/delegates/get",
        qs: {
            username,
        },
        json: true
    }, callback);
};

Delegate.getByPublicKey = function (publicKey, callback) {
    Api.get({
        path: "/api/delegates/get",
        qs: {
            publicKey,
        },
        json: true
    }, callback);
};

Delegate.getNextForgers = function (callback) {
    Api.get({
        path: "/api/delegates/getNextForgers",
        json: true
    }, callback);
};

Delegate.getDelegate = Delegate.getByUsername;

Delegate.getVoters = function (publicKey, callback) {
    Api.get({
        path: "/api/delegates/voters",
        qs: {
            publicKey,
        },
        json: true
    }, callback);
};

module.exports = Delegate;

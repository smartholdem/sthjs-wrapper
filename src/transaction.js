const sth = require("sthjs");
const Api = require("./api.js");

const Transaction = {};

Transaction.getTransactionsList = function (qs, callback) {
    Api.get({
        path: "/api/transactions",
        qs,
        json: true
    }, callback);
};

Transaction.createTransaction = (passPhrase, recipientAddr, amount, options) => {
    var vendorField, secondPassphrase = null;
    var version = 0x3f;
    var fee = 10000000;
    if(options)
    {
        vendorField = options.vendorField ? options.vendorField : null;
        secondPassphrase = options.secondPassphrase ? options.secondPassphrase : null;
        version = options.version ? options.version : 0x3f;
        fee = options.fee ? options.fee : 10000000;
    }
    var transaction = sth.transaction.createTransaction(recipientAddr, amount, vendorField, passPhrase, secondPassphrase, version, fee);
    return transaction;
};

Transaction.createMultiSignatureTransaction = (passPhrase, options) => {
    let transaction;
    if(options)
    {
        let secondPassphrase = options.secondPassphrase ? options.secondPassphrase : null;
        let lifetime = options.lifetime ? options.lifetime : 0x00;
        let keysgroup = options.keysgroup ? options.keysgroup : null;
        let min = options.min ? options.min : 1;
       transaction = sth.transaction.createMultisignature(passPhrase, secondPassphrase, keysgroup, lifetime, min);
    }
    return transaction;
};

Transaction.createDelegateTransaction = (passPhrase, delegateName, secondPass) => {
    var transaction = sth.delegate.createDelegate(passPhrase, delegateName, secondPass);
    return transaction;
};

Transaction.createSecondSignatureTransaction = (passPhrase, secondPass) => {
    var transaction = sth.signature.createTransaction(passPhrase, secondPass);
    return transaction;
};

Transaction.createVoteTransaction = (passPhrase, votes, secondPass) => {
    var transaction = sth.vote.createVote(passPhrase, votes, secondPass);
    return transaction;
};

Transaction.sendTransactions = (transactions, callback) => {
    Api.initP.then(() => {
        var params = {
            path: "/peer/transactions",
            json: { transactions: transactions },
            headers: {
                "Content-Type": "application/json",
                "os": "node-sthjs",
                "version": "0.1.0",
                "port": 1,
                "nethash": Api.hash
            }
        };

        Api.post(params, callback);

        if(Api.broadcast)
            broadcastTransactions(params, Api.peers);
    });
};

var broadcastTransactions = (params, nodes) => {
    nodes.forEach((node) => {
        params.url = `${node}/peer/transactions`;
        Api.post(params);
    });
};

Transaction.getTransaction = function (transactionId, callback) {
    Api.get({
        path: "/api/transactions/get",
        qs: {
            id: transactionId,
        },
        json: true
    }, callback);
};

Transaction.getUnconfirmedTransaction = function (transactionId, callback) {
    Api.get({
        path: "/api/transactions/unconfirmed/get",
        qs: {
            id: transactionId,
        },
        json: true
    }, callback);
};

Transaction.getUnconfirmedTransactions = function (callback) {
    Api.get({
        path: "/api/transactions/unconfirmed",
        json: true
    }, callback);
};

module.exports = Transaction;

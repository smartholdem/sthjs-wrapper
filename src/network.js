const Api = require("./api.js");

const Network = {};

Network.getHash = (callback) => {
    Api.get({
        path: "/api/blocks/getNetHash",
        json: true
    }, callback);
};

module.exports = Network;

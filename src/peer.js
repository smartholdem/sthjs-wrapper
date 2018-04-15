const Api = require("./api.js");

const Peer = {};

Peer.getPeersList = function (callback) {
    Api.get({
        path: "/api/peers",
        json: true
    }, callback);
};

Peer.getPeer = function (ip, port, callback) {
    Api.get({
        path: "/api/peers/get",
        qs: {
            ip,
            port,
        },
        json: true
    }, callback);
};

Peer.getPeerVersion = function (callback) {
    Api.get({
        path: "/api/peers/version",
        json: true
    }, callback);
};

module.exports = Peer;

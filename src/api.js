const request = require("request");
const seeds = require("./seeds.js");

const Api = {
    node: "",
    seeds: [],
    peers: [],
    hash: ""
};

Api.initP;
Api.broadcast = true;
var isDebug = false;

Api.init = (networkName) => {

    Api.initP = Api.useNet(networkName);
};

Api.setDebug = (debug) => {
    isDebug = debug;
};

Api.broadcastTxs = (broadcast) => {
    Api.broadcast = broadcast;
};

Api.useNet = (netName) => {
    return new Promise((resolve, reject) => {
        if(!seeds[netName])
            reject("Network name doesn't exist");

        var port = 6100;
        if (netName !== "main") {
            port = 6101;

        }

        // var netSeeds = seeds[netName].map((seed) => `${seed}:${netName == "main" ? 6100 : 6101}`);
        var netSeeds = seeds[netName].map((seed) => `${seed}:${port}`);

        if(Api.node == '') // or null
            Api.node = netSeeds[Math.floor(Math.random() * netSeeds.length)];
        Api.seeds = netSeeds;

        Api.get({url: `${Api.node}/api/blocks/getNetHash`, json: true}, (err, success, resp) => {
            if(resp && resp.success)
            {
                Api.hash = resp.nethash;
                console.log("Nethash: " + Api.hash);
                Api.get({url: `${Api.node}/api/peers`, json: true}, (errors, success, response) => {
                    if(response != null && response.success)
                    {

                        Api.peers = response.peers.filter((peer) => peer.status == "OK" && peer.errors == 0)
                                                  .map((p) => `${p.ip}:${netName == "main" ? 6100 : 6101}`);

                        resolve();
                    }
                    else
                        reject("Error getting peers");
                });
            }
            else
                reject("Error getting NetHash");
        });
    });
};

Api.setPreferredNode = (prefNode, main = true) => {
    Api.node = `${prefNode}:${main ? 6100 : 6101}`;
};

Api.get = (config, callback) => {
    config.method = "GET";
    Api.request(config, callback);
};

Api.post = (config, callback) => {
    config.method = "POST";
    Api.request(config, callback);
};

Api.put = (config, callback) => {
    config.method = "PUT";
    Api.request(config, callback);
};

Api.request = (config, callback) => {
    if(!config.url && !Api.initP)
    {
        callback(true, false, {success: false, msg: "Network and peer nodes not initialized"});
        return;
    }

    if(config.url)
        doRequest(config, callback);
    else        
        Api.initP.then(doRequest(config, callback));
};

var doRequest = (config, callback) => {
    config.url = config.url ? config.url : Api.node + config.path;
    config.url = `http://${config.url}`;
    request(
        config,
        (error, response, body) => {
            if (error) {
                if (callback) {
                    callback(error, false, null);
                }
            } else if (callback) {
                callback(null, body.success, body);
            }
        }
    ).on("error", (err) => {
        if(isDebug)
            console.log(err);
    });
}

module.exports = Api;

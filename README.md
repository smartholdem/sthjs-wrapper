# SmartHoldem JS API Wrapper

A Node.JS module which provides a wrapper for the SmartHoldem API.

```shell

npm install --save sthjs-wrapper

```

## Initialization

Before you begin, choose a network to initialize a list of nodes in that network

```js

var smartholdemApi = require('sthjs-wrapper');
var network = 'main'; //or 'dev'

smartholdemApi.setPreferredNode('127.0.0.1:6100') // optional set default your node ip:port
smartholdemApi.init(network);

```

## SmartHoldem API Wrapper Documentation

- [Accounts](/docs/accounts.md)
- [Transactions](/docs/transactions.md)
- [Peers](/docs/peers.md)
- [Blocks](/docs/blocks.md)
- [Delegates](/docs/delegates.md)
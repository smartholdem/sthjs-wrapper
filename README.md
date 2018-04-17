# SmartHoldem JS API Wrapper

## Initialization

Before you begin, choose a network to initialize a list of nodes in that network

```
var smartholdemApi = require("sth-api");
var network = "main" //or "dev"
smartholdemApi.init(network);
```
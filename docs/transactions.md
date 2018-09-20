
## Transactions
API calls related to transactions


### Create Transaction
Creates a transaction object to be sent

**Example**
```js
var smartholdemApi = require("sthjs-wrapper");
var options = {
  vendorField: "Comment field (optional)",
  secondPassphrase: "Sender second passphrase (optional)"
};
var transaction = smartholdemApi.createTransaction("Sender passphrase",
                      "Address of recipient",
                      "Amount to send in 10^8 (Integer)",
                      options);
console.log(transaction);
```

### Create Delegate Transaction
Creates a delegate registration transaction to be sent

**Example**
```js
var smartholdemApi = require("sthjs-wrapper");
var transaction = smartholdemApi.createDelegateTransaction("Passphrase",
                      "Delegate name",
                      "Second passphrase (optional)");
console.log(transaction);
```

### Create Second Signature Transaction
Creates a second signature transaction to be sent

**Example**
```js
var smartholdemApi = require("sthjs-wrapper");
var transaction = smartholdemApi.createSecondSignatureTransaction("Passphrase",
                      "Second passphrase");
console.log(transaction);
```

### Create Vote Transaction
Creates a vote transaction to be sent

**Example**
```js
var smartholdemApi = require("sthjs-wrapper");
var transaction = smartholdemApi.createVoteTransaction("Passphrase",
                      ["+58199578191950019299181920120128129"] //Array of vote strings
                      "Second passphrase");
console.log(transaction);
```

### Send transactions
Broadcasts an array of transactions to multiple nodes

**Example**
```js
var smartholdemApi = require("sthjs-wrapper");
var transaction = smartholdemApi.sendTransactions([Transactions array], (error, success, response) => {
    console.log(response);
});
```

**Response**
```js
{
    success: true,
    transactionIds: [
    "ID of transaction that was sent (String)",
    "ID of transaction that was sent (String)",
    "ID of transaction that was sent (String)",
    ...
    ]
}
```

### Get list of transactions
Transactions list matched by provided parameters.

**Request**
```js
var smartholdemApi = require("sthjs-wrapper");

var parameters = {
  "blockId": "Block id of transaction. (String)",
  "senderId": "Sender address of transaction. (String)",
  "recipientId": "Recipient of transaction. (String)",
  "limit": "Limit of transaction to send in response. Default: 20. Max: 50 (Integer number)",
  "offset": "Offset to load. (Integer number)",
  "orderBy": "Name of column to order. After column name must go 'desc' or 'asc' to choose order type. Example: orderBy=timestamp:desc (String)"
};

smartholdemApi.getTransactionsList(parameters, (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "transactions": [
    {
        id: Transaction ID (String),
        blockid: Block ID (Integer String),
        type: Transaction type (Integer),
        timestamp: Seconds since genesis block (Integer),
        amount: Transaction amount (Integer)
        fee: Transaction fee (Integer),
        vendorField: Vendor field/Comment (String),
        senderId: Sender address (String),
        recipientId: Recipient address (String),
        senderPublicKey: Sender public key (String),
        signature: Transaction signature (String),
        asset: Asset (Object),
        confirmations: Number of confirmations (Integer)
    }
    count: Number of results (String)
  ]
}
```

### Get transaction
Transaction matched by id.

**Request**
```js
var smartholdemApi = require("sthjs-wrapper");
smartholdemApi.getTransaction("String of transaction (String)", (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "transaction": {Transaction Object}
}
```

### Get unconfirmed transaction
Get unconfirmed transaction by id.

**Request**
```js
var smartholdemApi = require("sthjs-wrapper");
smartholdemApi.getUnconfirmedTransaction("String of transaction (String)", (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "transaction": {Transaction Object}
}
```

### Get list of unconfirmed transactions
Get list of unconfirmed transactions.

**Request**
```js
var smartholdemApi = require("sthjs-wrapper");
smartholdemApi.getUnconfirmedTransactions((error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
    "success" : true,
    "transactions" : [list of transaction objects]
}
```

## Accounts
Account related API calls.

### Validate Address

**Request**
```js
const smartholdemApi = require("sthjs-wrapper");
let Result = smartholdemApi.validate("Address of the account");
console.log(Result);
```

**Result**
```
{
  isValid: true
}
```

### Get balance
Get the balance of an account.

**Request**
```js
var smartholdemApi = require("sthjs-wrapper")
smartholdemApi.getBalance("Address of the account", (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "balance": Balance of account (Integer String),
  "unconfirmedBalance": "Unconfirmed balance of account (Integer String)"
}
```
### Get account public key
Get the public key of an account. If the account does not exist the API call will return an error.

**Request**
```js
var smartholdemApi = require("sthjs-wrapper")
smartholdemApi.getPublicKey("Address of the account", (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "publicKey": "Public key of account. (Hex String)"
}
```

### Get account
Returns account information of an address.

**Request**
```js
var smartholdemApi = require("sthjs-wrapper")
smartholdemApi.getAccount("Address of the account", (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "account": {
    "address": "Address of account. (String)",
    "unconfirmedBalance": "Unconfirmed balance of account. (String)",
    "balance": "Balance of account. (String)",
    "publicKey": "Public key of account. (Hex String)",
    "unconfirmedSignature": "If account enabled second signature, but it's still not confirmed. (0 or 1)",
    "secondSignature": "If account enabled second signature. (0 or 1)",
    "secondPublicKey": "Second signature public key. (Hex String)"
  }
}
```
### Get votes of account
Get votes by account address.

**Request**
```js
var smartholdemApi = require("sthjs-wrapper")
smartholdemApi.getVotes("Address of the account", (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "delegates": [
    {
        username: Delegate Name (String),
        address: Delegate Address (String),
        publicKey: Delegate public key (String),
        vote: Number of votes (Integer String),
        producedBlocks: Number of Blocks Produces (Integer),
        missedBlocks: Number of missed blocks (Integer),
        rate: Delegate rank (Integer)
        approval: Percent approval (float)
        productivity: Percent blocks forged (float)
    }
    ...
  ]
}
```

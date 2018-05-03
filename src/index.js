const Api = require("./api.js");
const Account = require("./account.js");
const Transaction = require("./transaction.js");
const Peer = require("./peer.js");
const Network = require("./network.js");
const Block = require("./block.js");
const Delegate = require("./delegate.js");

module.exports = {
    // Api
    init: Api.init,
    setDebug: Api.setDebug,
    setPreferredNode: Api.setPreferredNode,
    broadcastTxs: Api.broadcastTxs,

    // Account
    getBalance: Account.getBalance,
    getPublicKey: Account.getPublicKey,
    getAccount: Account.getAccount,
    getVotes: Account.getVotes,

    // Transaction
    getTransactionsList: Transaction.getTransactionsList,
    getTransactionsListByAddress: Transaction.getTransactionsListByAddress,
    getTransaction: Transaction.getTransaction,
    createTransaction: Transaction.createTransaction,
    createDelegateTransaction: Transaction.createDelegateTransaction,
    createSecondSignatureTransaction: Transaction.createSecondSignatureTransaction,
    createVoteTransaction: Transaction.createVoteTransaction,
    sendTransactions: Transaction.sendTransactions,
    getUnconfirmedTransaction: Transaction.getUnconfirmedTransaction,
    getUnconfirmedTransactions: Transaction.getUnconfirmedTransactions,

    // Peer
    getPeersList: Peer.getPeersList,
    getPeer: Peer.getPeer,
    getPeerVersion: Peer.getPeerVersion,

    // Network
    getHash: Network.getHash,

    // Block
    getBlock: Block.getBlock,
    getBlocks: Block.getBlocks,
    getBlockchainFee: Block.getBlockchainFee,
    getBlockchainHeight: Block.getBlockchainHeight,
    getForgedByAccount: Block.getForgedByAccount,

    // Delegate
    getDelegates: Delegate.getDelegates,
    getDelegate: Delegate.getDelegate,
    getDelegateByPublicKey: Delegate.getByPublicKey,
    getDelegateByUsername: Delegate.getByUsername,
    getNextForgers: Delegate.getNextForgers,
    getVoters: Delegate.getVoters
};

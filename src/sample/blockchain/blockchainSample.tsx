import React from "react";
import { Blockchain } from "../../blockchain/blockchain";
import { Wallet } from "../../blockchain/wallet";

const blockchain = new Blockchain();
const wallet = new Wallet(blockchain);

blockchain.minePendingTransactions(wallet.publicKey);
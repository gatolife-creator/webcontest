import { Transaction } from './transaction';
import { SHA256 } from 'crypto-js';

export class Block {
    preHash: string;
    hash: string;
    timestamp: number;
    difficulty: number;
    transactions: Transaction[];
    nonce: number;

    constructor(preHash: string, transactions: Transaction[]) {
        this.preHash = preHash;
        this.timestamp = Date.now();
        this.difficulty = 2;
        this.transactions = transactions;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash(): string {
        return SHA256(
            this.preHash +
            this.timestamp +
            this.difficulty +
            JSON.stringify(this.transactions) +
            this.nonce
        ).toString();
    }

    validateBlock(): void {
        while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined:" + this.hash);
    }

    hasValidTransactions(): boolean {
        const len = this.transactions.length;
        for (let i = 0; i < len; i++) {
            const tx = this.transactions[i];
            if (!tx.isValid()) return false;
        }
        return true;
    }
}
import { SHA256 } from "crypto-js";
import { ec } from "elliptic";

const secp256k1 = new ec("secp256k1");

export class Transaction {
    from: string;
    to: string;
    amount: number;
    message: string;
    timestamp: number;
    signature: string;

    constructor(from: string, to: string, amount: number, message: string) {
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.message = message;
        this.timestamp = Date.now();
        this.signature = "";
    }

    calculateHash(): string {
        return SHA256(
            this.from +
            this.to +
            this.amount +
            this.message +
            this.timestamp
        ).toString();
    }


    signTransaction(signingKey: ec.KeyPair): void {
        if (signingKey.getPublic("hex") !== this.from) {
            throw new Error("You cannot sign transactions for other wallets!");
        }

        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, "base64");
        this.signature = sig.toDER("hex");
    }

    isValid(): boolean {
        if (this.from === "System") return true;

        if (!this.signature || this.signature.length === 0) {
            throw new Error("このトランザクションに署名がありません");
        }

        const publicKey = secp256k1.keyFromPublic(this.from, "hex");
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}
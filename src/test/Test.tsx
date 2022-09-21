import React from "react";
import { OptionalHash } from "../sample/hash/OptionalHash";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

import { Wallet } from "../blockchain/wallet";
import { Blockchain } from "../blockchain/blockchain";

const blockchain = new Blockchain();
const wallet  = new Wallet(blockchain);
blockchain.minePendingTransactions(wallet.publicKey);

export const Test = () => {
  return (
    <Drawer>
      <Main>
        <OptionalHash />
      </Main>
    </Drawer>
  );
};

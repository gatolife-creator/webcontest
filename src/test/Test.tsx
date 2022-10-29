import React from "react";
import { Quiz, QuizGame } from "../components/QuizGame";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

import { Wallet } from "../blockchain/wallet";
import { Blockchain } from "../blockchain/blockchain";

const blockchain = new Blockchain();
const wallet = new Wallet(blockchain);
blockchain.minePendingTransactions(wallet.publicKey);

const quizzes: Quiz[] = [
  {
    question: "改ざん検知や認証システムに活用されるものは？",
    options: ["バッシュ関数", "ラッシュ関数", "ハッシュ関数", "ダッシュ関数"],
    answer: "ハッシュ関数",
  },
  {
    question: "P2Pの利点は？",
    options: ["システムダウンしにくい", "ハッキングされづらい"],
    answer: "システムダウンしにくい",
  },
];

export const Test = () => {
  return (
    <Drawer>
      <Main>
        <QuizGame quizzes={quizzes}></QuizGame>
      </Main>
    </Drawer>
  );
};

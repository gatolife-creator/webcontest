import React from "react";
import { Quiz, QuizGame } from "../components/QuizGame";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

import { Wallet } from "../blockchain/wallet";
import { Blockchain } from "../blockchain/blockchain";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { SubSectionTitle } from "../components/SubSectionTitle";

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
        {/* <QuizGame quizzes={quizzes}></QuizGame> */}
        <MiniSectionTitle>ソニーグローバルエデュケーション</MiniSectionTitle>
        <SubSectionTitle>会社概要</SubSectionTitle>
        <p>概要概要概要概要</p>
        <p>概要概要概要概要</p>
        <p>概要概要概要概要</p>

        <SubSectionTitle>教育へ活用する訳</SubSectionTitle>
        <p>
          本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本
        </p>
        <SubSectionTitle>今後の取り組み</SubSectionTitle>
        本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本
        <SubSectionTitle>読者へのコメント</SubSectionTitle>
        本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本
      </Main>
    </Drawer>
  );
};

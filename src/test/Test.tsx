import React, { useState } from "react";
import { Quiz, QuizGame } from "../components/QuizGame";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

import { Wallet } from "../blockchain/wallet";
import { Blockchain } from "../blockchain/blockchain";
import { Notification } from "../components/Notification";

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
  const blockchain = new Blockchain();
  const wallet = new Wallet(blockchain);
  const [notifications, setNotifications] = useState<JSX.Element[]>([]);

  const onHandleClick = () => {
    blockchain.minePendingTransactions(wallet.publicKey, (hash: string) =>
      setNotifications([
        ...notifications,
        <Notification
          text={"マイニングに成功しました\n" + hash.substring(0, 20) + "..."}
          time={3000}
        ></Notification>,
      ])
    );
  };
  return (
    <Drawer>
      <Main>
        <button className="btn btn-primary" onClick={() => onHandleClick()}>
          マイニング
        </button>
        {notifications.map((notification) => notification)}
      </Main>
    </Drawer>
  );
};

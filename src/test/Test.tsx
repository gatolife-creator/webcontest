import React, { useState } from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

import { Wallet } from "../blockchain/wallet";
import { Blockchain } from "../blockchain/blockchain";
import { Notification } from "../components/Notification";
import { Block } from "../blockchain/block";

const blockchain = new Blockchain();

export const Test = () => {
  const wallet = new Wallet(blockchain);
  const [notifications, setNotifications] = useState<JSX.Element[]>([]);

  const onHandleClick = () => {
    blockchain.minePendingTransactions(wallet.publicKey, () =>
      setNotifications([
        ...notifications,
        <Notification
          text={"マイニングに成功しました"}
          time={3000}
        ></Notification>,
      ])
    );
  };
  return (
    <Drawer>
      <Main>
        <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {blockchain.chain.map((block: Block) => (
            <div className="my-2 w-64 rounded-md border-[1.5px] border-black bg-white p-3">
              <div className="badge badge-accent badge-lg">
                前回のハッシュ値
              </div>
              <div className="indent-4">
                {block.preHash.substring(0, 15) + "..."}
              </div>
              <hr />
              <div className="badge badge-primary badge-lg">ハッシュ値</div>
              <div className="indent-4">
                {block.hash.substring(0, 15) + "..."}
              </div>
              <hr />
              <div className="badge badge-success badge-lg">ナンス値</div>
              <div className="indent-4">{block.nonce}</div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary block"
          onClick={() => onHandleClick()}
        >
          マイニング
        </button>
        {notifications.map((notification) => notification)}
      </Main>
    </Drawer>
  );
};

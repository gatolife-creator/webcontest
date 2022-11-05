import React, { useState } from "react";
import { Notification } from "../../components/Notification";

import { Transaction } from "../../blockchain/transaction";
import { Block } from "../../blockchain/block";
import { Blockchain } from "../../blockchain/blockchain";
import { Wallet } from "../../blockchain/wallet";

const blockchain = new Blockchain();

export const BlockchainSample = () => {
  const wallet = new Wallet(blockchain);
  const [notifications, setNotifications] = useState<JSX.Element[]>([]);
  const [number, setNumber] = useState(0);

  const onHandleMining = () => {
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

  const onHandleValidation = () => {
    blockchain.isChainValid((message: string) => {
      setNotifications([
        ...notifications,
        <Notification text={message} time={3000}></Notification>,
      ]);
    });
  };

  const onHandleTransactionsView = (e: any) => {
    const value = Number(e.currentTarget.id.replace("block", ""));
    setNumber(value);
  };

  const onHandleFormChange = (e: any) => {
    const kind: string = e.target.id.match(
      /(to|from|amount|timestamp)[0-9]/
    )[1];
    const id = Number(e.target.id.replace(kind, ""));
    switch (kind) {
      case "to":
        blockchain.chain[number].transactions[id].to = e.target.value;
        break;
      case "from":
        blockchain.chain[number].transactions[id].from = e.target.value;
        break;
      case "amount":
        blockchain.chain[number].transactions[id].amount = e.target.value;
        break;
      case "timestamp":
        blockchain.chain[number].transactions[id].timestamp = e.target.value;
        break;
    }
    console.log(kind, id);
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-circle btn-sm absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            <span className="text-2xl">{number}</span>番目のブロック
          </h3>
          <p className="py-4">
            {number ? (
              blockchain.chain[number].transactions.map(
                (transaction: Transaction, index: number) => (
                  <>
                    <form
                      className="form-control"
                      onChange={(e: any) => onHandleFormChange(e)}
                    >
                      <label className="label">
                        <span className="label-text text-lg font-bold">
                          {index}番目のトランザクション
                        </span>
                      </label>
                      <div className="mx-auto my-1">
                        <label className="input-group input-group-sm">
                          <span>送信元</span>
                          <input
                            type="text"
                            defaultValue={transaction.from.substring(0, 15)}
                            className="input input-bordered input-sm"
                            id={`from${index}`}
                          />
                        </label>
                      </div>
                      <div className="mx-auto my-1">
                        <label className="input-group input-group-sm">
                          <span>送信先</span>
                          <input
                            type="text"
                            defaultValue={transaction.to.substring(0, 15)}
                            className="input input-bordered input-sm"
                            id={`to${index}`}
                          />
                        </label>
                      </div>
                      <div className="mx-auto my-1">
                        <label className="input-group input-group-sm">
                          <span>額　　</span>
                          <input
                            type="text"
                            defaultValue={transaction.amount}
                            className="input input-bordered input-sm"
                            id={`amount${index}`}
                          />
                        </label>
                      </div>
                      <div className="mx-auto my-1">
                        <label className="input-group input-group-sm">
                          <span>時刻　</span>
                          <input
                            type="text"
                            defaultValue={transaction.timestamp}
                            className="input input-bordered input-sm"
                            id={`timestamp${index}`}
                          />
                        </label>
                      </div>
                    </form>
                  </>
                )
              )
            ) : (
              <></>
            )}
          </p>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {blockchain.chain.map((block: Block, index: number) => (
          <label
            className="mx-auto my-2 w-64 rounded-md border-[1.5px] border-black bg-white hover:cursor-pointer hover:bg-gray-100"
            htmlFor="my-modal-3"
            key={index}
            id={`block${index}`}
            onClick={(e) => onHandleTransactionsView(e)}
          >
            <div className="w-full rounded-t-md border-t bg-primary p-2 text-center text-2xl font-bold">
              {index}
            </div>
            <div className="p-3">
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
          </label>
        ))}
      </div>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => onHandleMining()}>
          マイニング
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onHandleValidation()}
        >
          検証
        </button>
      </div>
      {notifications.map((notification) => notification)}
    </>
  );
};

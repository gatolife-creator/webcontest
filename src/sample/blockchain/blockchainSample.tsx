import React, { useState } from "react";
import { Notification } from "../../components/Notification";

import { Transaction } from "../../blockchain/transaction";
import { Block } from "../../blockchain/block";
import { Blockchain } from "../../blockchain/blockchain";
import { Wallet } from "../../blockchain/wallet";
import { Link, useLocation, useNavigate } from "react-router-dom";

const blockchain = new Blockchain();
const wallet = new Wallet(blockchain);
const anotherWallet = new Wallet(blockchain);

export const BlockchainSample = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const mode = query.get("mode") as "txview" | "";
  const blockID = Number(query.get("id"));
  let transactions: Transaction[] | null = null;
  try {
    transactions = blockchain.chain[blockID].transactions;
  } catch {
    window.location.href = "/blockchain-sample.html";
  }

  const navigate = useNavigate();

  const [notifications, setNotifications] = useState<JSX.Element[]>([]);

  const onHandleMining = () => {
    blockchain.minePendingTransactions(wallet.publicKey, () =>
      setNotifications([
        ...notifications,
        <Notification
          className="bg-success text-black"
          text={"マイニングに成功しました"}
          time={3000}
        ></Notification>,
      ])
    );
    console.log(blockchain);
  };

  const onHandleValidation = () => {
    blockchain.isChainValid((message: string) => {
      setNotifications([
        ...notifications,
        <Notification
          className={`bg-${
            message === "ブロックチェーンは有効です。" ? "success" : "error"
          } text-black`}
          text={message}
          time={3000}
        ></Notification>,
      ]);
    });
  };

  const onHandleFormSubmit = (e: any) => {
    e.preventDefault();
    const { message } = e.target;
    console.log(message.value);
    const transaction = wallet.createTransaction(
      anotherWallet.publicKey,
      0,
      message.value
    );
    console.log(transaction);
    blockchain.addTransaction(transaction);
    console.log(blockchain);
    e.target.message.value = "";
  };

  const onHandleFormChange = (e: any) => {
    const kind: string = e.target.id.match(
      /(to|from|amount|timestamp)[0-9]/
    )[1];
    const id = Number(e.target.id.replace(kind, ""));
    const transaction = (transactions as Transaction[])[id];
    switch (kind) {
      case "to":
        transaction.to = e.target.value;
        break;
      case "from":
        transaction.from = e.target.value;
        break;
      case "amount":
        transaction.amount = e.target.value;
        break;
      case "timestamp":
        transaction.timestamp = e.target.value;
        break;
    }
    console.log(kind, id);
  };

  return (
    <>
      {mode !== "txview" && (
        <>
          <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {blockchain.chain.map((block: Block, index: number) => (
              <label
                className="mx-auto my-2 w-64 rounded-md border-[1.5px] border-black bg-white hover:cursor-pointer hover:bg-gray-100"
                htmlFor="my-modal-3"
                key={index}
                id={`block${index}`}
                onClick={(e) =>
                  navigate(`/blockchain-sample.html?mode=txview&id=${index}`)
                }
              >
                <div className="w-full rounded-t-md border-t bg-primary p-2 text-center text-2xl font-bold">
                  {index}
                </div>
                <div className="p-3">
                  <div className="badge-accent badge badge-lg">
                    前回のハッシュ値
                  </div>
                  <div className="indent-4">
                    {block.preHash.substring(0, 15) + "..."}
                  </div>
                  <hr />
                  <div className="badge-primary badge badge-lg">ハッシュ値</div>
                  <div className="indent-4">
                    {block.hash.substring(0, 15) + "..."}
                  </div>
                  <hr />
                  <div className="badge-success badge badge-lg">ナンス値</div>
                  <div className="indent-4">{block.nonce}</div>
                </div>
              </label>
            ))}
          </div>
          <div className="btn-group mt-5">
            <button
              className="btn-primary btn"
              onClick={() => onHandleMining()}
            >
              マイニング
            </button>
            <button
              className="btn-primary btn"
              onClick={() => onHandleValidation()}
            >
              検証
            </button>
          </div>
          <form className="my-1" onSubmit={(e) => onHandleFormSubmit(e)}>
            <input
              type="text"
              name="message"
              placeholder="メッセージを送信"
              className="input-bordered input-primary input block w-full max-w-xs"
            />
          </form>
        </>
      )}

      {mode === "txview" && (
        <>
          {(transactions as Transaction[]).length > 0 ? (
            (transactions as Transaction[]).map(
              (transaction: Transaction, index: number) => (
                <React.Fragment key={index}>
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
                      <label className="input-group">
                        <span>送信元</span>
                        <input
                          type="text"
                          defaultValue={transaction.from.substring(0, 15)}
                          className="input-bordered input"
                          id={`from${index}`}
                        />
                      </label>
                    </div>
                    <div className="mx-auto my-1">
                      <label className="input-group">
                        <span>送信先</span>
                        <input
                          type="text"
                          defaultValue={transaction.to.substring(0, 15)}
                          className="input-bordered input"
                          id={`to${index}`}
                        />
                      </label>
                    </div>
                    <div className="mx-auto my-1">
                      <label className="input-group">
                        <span>テキスト</span>
                        <input
                          type="text"
                          defaultValue={transaction.message}
                          className="input-bordered input"
                          id={`amount${index}`}
                        />
                      </label>
                    </div>
                    <div className="mx-auto my-1">
                      <label className="input-group">
                        <span>時刻　</span>
                        <input
                          type="text"
                          defaultValue={transaction.timestamp}
                          className="input-bordered input"
                          id={`timestamp${index}`}
                        />
                      </label>
                    </div>
                  </form>
                </React.Fragment>
              )
            )
          ) : (
            <h3>トランザクションはありません</h3>
          )}
          <Link to="/blockchain-sample.html" className="btn-primary btn">
            戻る
          </Link>
        </>
      )}

      {notifications.map((notification, index) => (
        <React.Fragment key={index}>{notification}</React.Fragment>
      ))}
    </>
  );
};

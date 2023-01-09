import React, { useState } from "react";
import { Notification } from "../../components/Notification";

import { Transaction } from "../../blockchain/transaction";
import { Block } from "../../blockchain/block";
import { Blockchain } from "../../blockchain/blockchain";
import { Wallet } from "../../blockchain/wallet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

const blockchain = new Blockchain();
const wallet = new Wallet(blockchain);
const anotherWallet = new Wallet(blockchain);

export const BlockchainSample = () => {
  const lang = useRecoilValue(langState);
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
  const [pendingCount, setPendingCount] = useState(0);

  const onHandleMining = () => {
    blockchain.minePendingTransactions(wallet.publicKey, () =>
      setNotifications([
        ...notifications,
        <Notification
          className="bg-success text-black"
          text={
            lang === "ja" ? "マイニングに成功しました" : "Successfully mined"
          }
          time={3000}
        />,
      ])
    );
    setPendingCount(0);
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
          text={lang === "ja" ? message : "Blockchain is valid"}
          time={3000}
        />,
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
    blockchain.addTransaction(transaction);
    setNotifications([
      ...notifications,
      <Notification
        className={`bg-success text-black`}
        text={
          lang === "ja" ? "トランザクションを送信しました" : "Transaction sent"
        }
        time={3000}
      />,
    ]);
    setPendingCount(blockchain.pendingTransactions.length);
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
          {pendingCount > 0 && (
            <div className="alert alert-info my-10 shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>{pendingCount}個のトランザクションが承認待ちです。</span>
              </div>
            </div>
          )}

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
                    {lang === "ja" && "前回のハッシュ値"}
                    {lang === "en" && "PreHash"}
                  </div>
                  <div className="indent-4">
                    {block.hash.length >= 15
                      ? block.preHash.substring(0, 15) + "..."
                      : block.preHash}
                  </div>
                  <hr />
                  <div className="badge-primary badge badge-lg">
                    {lang === "ja" && "ハッシュ値"}
                    {lang === "en" && "Hash"}
                  </div>
                  <div className="indent-4">
                    {block.hash.length >= 15
                      ? block.hash.substring(0, 15) + "..."
                      : block.hash}
                  </div>
                  <hr />
                  <div className="badge-success badge badge-lg">
                    {lang === "ja" && "ナンス値"}
                    {lang === "en" && "Nonce"}
                  </div>
                  <div className="indent-4">{block.nonce}</div>
                </div>
              </label>
            ))}
          </div>
          <div className="btn-group mt-5">
            <button
              className="btn btn-primary"
              onClick={() => onHandleMining()}
            >
              {lang === "ja" && "マイニング"}
              {lang === "en" && "Mine"}
            </button>
            <button
              className="btn btn-primary"
              onClick={() => onHandleValidation()}
            >
              {lang === "ja" && "検証"}
              {lang === "en" && "Validate"}
            </button>
          </div>
          <form className="my-1" onSubmit={(e) => onHandleFormSubmit(e)}>
            <input
              type="text"
              name="message"
              placeholder={lang === "ja" ? "テキストを入力" : "Input Text"}
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
                    className="form-control my-5"
                    onChange={(e: any) => onHandleFormChange(e)}
                  >
                    <label className="label">
                      <span className="label-text text-lg font-bold">
                        {lang === "ja" && `${index}番目のトランザクション`}
                        {lang === "en" && `Transaction ${index}`}
                      </span>
                    </label>
                    <div className="my-1">
                      <label className="input-group">
                        <span>
                          {lang === "ja" && "送信元"}
                          {lang === "en" && "From"}
                        </span>
                        <input
                          type="text"
                          defaultValue={transaction.from.substring(0, 15)}
                          className="input-bordered input"
                          id={`from${index}`}
                        />
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="input-group">
                        <span>
                          {lang === "ja" && "送信先"}
                          {lang === "en" && "To"}
                        </span>
                        <input
                          type="text"
                          defaultValue={transaction.to.substring(0, 15)}
                          className="input-bordered input"
                          id={`to${index}`}
                        />
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="input-group">
                        <span>
                          {lang === "ja" && "テキスト"}
                          {lang === "en" && "Text"}
                        </span>
                        <input
                          type="text"
                          defaultValue={transaction.message}
                          className="input-bordered input"
                          id={`amount${index}`}
                        />
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="input-group">
                        <span>
                          {lang === "ja" && "タイムスタンプ"}
                          {lang === "en" && "Timestamp"}
                        </span>
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
            <h3>
              {lang === "ja" && "トランザクションはありません"}
              {lang === "en" && "No Transactions"}
            </h3>
          )}
          <Link to="/blockchain-sample.html" className="btn btn-primary">
            {lang === "ja" && "戻る"}
            {lang === "en" && "Back"}
          </Link>
        </>
      )}

      {notifications.map((notification, index) => (
        <React.Fragment key={index}>{notification}</React.Fragment>
      ))}
    </>
  );
};

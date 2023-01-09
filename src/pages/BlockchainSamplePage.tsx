import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { BlockchainSample } from "../sample/blockchain/blockchainSample";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";
import { SubSectionTitle } from "../components/SubSectionTitle";
import { Important } from "../components/Important";

export const BlockchainSamplePage = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>
            {lang === "ja" && "ブロックチェーンサンプル"}
            {lang === "en" && "Sample Blockchain"}
          </MiniSectionTitle>
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn btn-primary mb-10">
            {lang === "ja" && "使い方を見る"}
            {lang === "en" && "How To Use"}
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative w-11/12 max-w-5xl" htmlFor="">
              <h3 className="text-lg font-bold">
                {lang === "ja" && "使い方"}
                {lang === "en" && "How To Use"}
              </h3>
              <p className="py-4">
                <ul className="list-inside list-decimal">
                  <li>
                    テキストを入力してEnterを押そう。
                    <small>
                      トランザクションプールにトランザクションが追加されるよ。
                    </small>
                  </li>
                  <li>
                    <Important>マイニング</Important>
                    ボタンを押して、ブロックを追加しよう。
                    <small>
                      ブロックをクリックして、中身を確認してみよう。入力したテキストは見つかるかな？
                    </small>
                  </li>
                  <li>
                    <Important>検証</Important>
                    ボタンを押して、ブロックチェーンが改ざんされていないか調べよう。
                  </li>
                </ul>
              </p>
              <h3 className="text-lg font-bold">
                {lang === "ja" && "チャレンジ"}
                {lang === "en" && "Advanced"}
              </h3>
              <p className="py-4">
                <ul className="list-inside list-decimal">
                  <li>
                    データを改ざんしてみよう。
                    <small>
                      ブロックをクリックして、トランザクションを書き換えよう。
                    </small>
                  </li>
                  <li>
                    <Important>検証</Important>
                    ボタンを押して、改ざんされているか確かめよう。
                    <small>改ざんは検知されるかな？</small>
                  </li>
                </ul>
              </p>
            </label>
          </label>
          <BlockchainSample />
        </Main>
      </Drawer>
    </>
  );
};

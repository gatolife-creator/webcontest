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
  if (lang === "ja") {
    document.title = "ブロックチェーンサンプル|ブロックチェーン入門";
  } else if (lang === "en") {
    document.title = "Sample Blockchain|Blockchain World";
  }

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
              {lang === "ja" && <>
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
              </>}
              {lang === "en" && <>
                <p className="py-4">
                  <ul className="list-inside list-decimal">
                    <li>
                      Enter the text and press Enter. <small>Transaction will be added to the transaction pool.</small>
                    </li>
                    <li>
                      Press the <Important>Mining</Important>button to add a block. Let's click on a block to see what it contains. <small>Can you find the text you entered?</small>
                    </li>
                    <li>
                      Press the <Important>Verify</Important> button to find out if the blockchain has been tampered with.
                  </li>
                  </ul>
                </p>
              </>}

              <h3 className="text-lg font-bold">
                {lang === "ja" && "チャレンジ"}
                {lang === "en" && "Advanced"}
              </h3>
              {lang === "ja" && (
                <>
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
                </>
              )}
              {lang === "en" && (
                <>
                  <p className="py-4">
                    <ul className="list-inside list-decimal">
                      <li>
                        Let's tamper with the data. <small>Let's click on a block and rewrite the transaction.</small>
                      </li>
                      <li>
                        Press the <Important>Verify</Important> button to see if it has been tampered with. Will tampering be detected?
                      </li>
                    </ul>
                  </p>
                </>
              )}
            </label>
          </label>
          <BlockchainSample />
        </Main>
      </Drawer>
    </>
  );
};

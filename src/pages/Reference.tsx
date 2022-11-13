import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";

export const Reference = () => {
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>参考書籍</MiniSectionTitle>
          <p className="my-5">
            ・技術評論社
            <br />
            　『図解即戦力
            ブロックチェーンのしくみと開発がこれ1冊でしっかりわかる教科書』
            <br />
            　コンセンサスベイス・株式会社
          </p>

          <p className="my-5">
            ・ダイヤモンド社
            <br />
            　『ブロックチェーン・レボリューション
            ――ビットコインを支える技術はどのようにビジネスと経済、そして世界を変えるのか』
            <br />
            　ドン・タプスコット, アレックス・タプスコット
          </p>
          <p className="my-5">
            ・東洋経済新聞社
            <br />
            　『決定版　ビットコイン＆ブロックチェーン』
            <br />
            　岡田 仁志
          </p>
          <MiniSectionTitle>参考サイト</MiniSectionTitle>
          <p className="my-5">
            ・『公開鍵暗号方式とは？初心者でもわかる公開鍵暗号方式の基礎』
            <br />
            　https://udemy.benesse.co.jp/development/blockchain/public-key-cryptography.html
          </p>
          <p className="my-5">
            ・『ブロックチェーンの歴史』
            <br />
            　https://academy.binance.com/ja/articles/history-of-blockchain
          </p>
          <p className="my-5">
            ・『ビットコインを生んだ「サトシ・ナカモト」の正体は？
            論文の内容は？』 <br />
            　https://bitcoin.dmm.com/column/0130
          </p>
          <p className="my-5">
            ・『サトシ・ナカモトは誰？』
            <br />
            　https://academy.binance.com/ja/articles/who-is-satoshi-nakamoto
          </p>
          <p className="my-5">
            ・『PoW（プルーフ・オブ・ワーク）』
            <br />
            　https://bitcoin.dmm.com/glossary/proof_of_work
          </p>
          <p className="my-5">
            ・『アルトコイン｜証券用語解説集｜野村證券』
            <br />
            　https://www.nomura.co.jp/terms/japan/a/A03151.html
          </p>
          <p className="my-5">
            ・"First presidential vote cast using blockchain technology | Fox
            News"
            <br />
            　https://www.foxnews.com/tech/first-presidential-vote-cast-using-blockchain-technology
          </p>
          <p className="my-5">
            ・"Bitcoin consumes 'more electricity than Argentina'"
            <br />
            　https://www.bbc.com/news/technology-56012952
          </p>
          <p className="my-5">
            ・"SavjeeCoin"
            <br />
            　https://github.com/Savjee/SavjeeCoin
          </p>
        </Main>
      </Drawer>
    </>
  );
};

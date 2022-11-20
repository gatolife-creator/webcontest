import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Pager } from "../components/Pager";

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
            <a
              href="https://udemy.benesse.co.jp/development/blockchain/public-key-cryptography.html"
              className="link-primary link"
            >
              https://udemy.benesse.co.jp/development/blockchain/public-key-cryptography.html
            </a>
          </p>
          <p className="my-5">
            ・『ブロックチェーンの歴史』
            <br />
            <a
              href="https://academy.binance.com/ja/articles/history-of-blockchain"
              className="link-primary link"
            >
              https://academy.binance.com/ja/articles/history-of-blockchain
            </a>
          </p>
          <p className="my-5">
            ・サトシ・ナカモトとは？ 正体不明のビットコイン開発者の正体に迫る |
            coindesk JAPAN | コインデスク・ジャパン
            <br />
            <a
              href="https://www.coindeskjapan.com/keywords/satoshi-nakamoto/"
              className="link-primary link"
            >
              https://www.coindeskjapan.com/keywords/satoshi-nakamoto/
            </a>
          </p>
          <p className="my-5">
            ・『サトシ・ナカモトは誰？ | Binance Academy』
            <br />
            <a
              href="https://academy.binance.com/ja/articles/who-is-satoshi-nakamoto"
              className="link-primary link"
            >
              https://academy.binance.com/ja/articles/who-is-satoshi-nakamoto
            </a>
          </p>
          <p className="my-5">
            ・『PoW（プルーフ・オブ・ワーク）』
            <br />
            <a
              href="https://bitcoin.dmm.com/glossary/proof_of_work"
              className="link-primary link"
            >
              https://bitcoin.dmm.com/glossary/proof_of_work
            </a>
          </p>
          <p className="my-5">
            ・『アルトコイン｜証券用語解説集｜野村證券』
            <br />
            <a
              href="https://www.nomura.co.jp/terms/japan/a/A03151.html"
              className="link-primary link"
            >
              https://www.nomura.co.jp/terms/japan/a/A03151.html
            </a>
          </p>
          <p className="my-5">
            ・『流動性とは？ | Binance Academy』
            <br />
            <a
              href="https://academy.binance.com/ja/articles/liquidity-explained"
              className="link-primary link"
            >
              https://academy.binance.com/ja/articles/liquidity-explained
            </a>
          </p>
          <p className="my-5">
            ・『中国で仮想通貨が「全面禁止」になった理由と、矛盾もはらむ政府の思惑
            | WIRED.jp』
            <br />
            <a
              href="https://wired.jp/2021/10/07/chinas-sweeping-cryptocurrency-ban-inevitable/"
              className="link-primary link"
            >
              https://wired.jp/2021/10/07/chinas-sweeping-cryptocurrency-ban-inevitable/
            </a>
          </p>
          <p className="my-5">
            ・『仮想通貨と電子マネーの違いはなに？それぞれのメリットについて解説！
            - PayPay』
            <br />
            <a
              href="https://paypay.ne.jp/store-media/knowledge/0023_chigai/"
              className="link-primary link"
            >
              https://paypay.ne.jp/store-media/knowledge/0023_chigai/
            </a>
          </p>
          <p className="my-5">
            ・『NFTゲームとは？既存ゲームとの違いとおすすめ6選、利益を出す方法も
            | Coincheck（コインチェック）』
            <br />
            <a
              href="https://paypay.ne.jp/store-media/knowledge/0023_chigai/"
              className="link-primary link"
            >
              https://paypay.ne.jp/store-media/knowledge/0023_chigai/
            </a>
          </p>
          <p className="my-5">
            ・『メタデータ（メタ情報）とは - 意味をわかりやすく - IT用語辞典
            e-Words』
            <br />
            <a
              href="https://e-words.jp/w/%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF.html"
              className="link-primary link"
            >
              https://e-words.jp/w/%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF.html
            </a>
          </p>
          <p className="my-5">
            ・『サプライチェーンとは何か具体例を交えて徹底解説｜三井倉庫グループ』
            <br />
            <a
              href="https://www.mitsui-soko.com/column/2019/11"
              className="link-primary link"
            >
              https://www.mitsui-soko.com/column/2019/11
            </a>
          </p>
          <p className="my-5">
            ・『ブロックチェーンが与えるサプライチェーンマネジメントへのインパクト
            | DATA INSIGHT | NTTデータ』
            <br />
            <a
              href="https://www.nttdata.com/jp/ja/data-insight/2019/0221/"
              className="link-primary link"
            >
              https://www.nttdata.com/jp/ja/data-insight/2019/0221/
            </a>
          </p>
          <p className="my-5">
            ・『NFTとは？仕組みや特徴、関連するおすすめの仮想通貨を初心者向けに解説！
            | CRYPTO INSIGHT powered by ダイヤモンド・ザイ』
            <br />
            <a
              href="https://diamond.jp/crypto/nft/nft/#index_id"
              className="link-primary link"
            >
              https://diamond.jp/crypto/nft/nft/#index_id
            </a>
          </p>
          <p className="my-5">
            ・『話題のNFTって何？ 知っておきたい基礎知識を解説 -
            ITをもっと身近に。ソフトバンクニュース』
            <br />
            <a
              href="https://www.softbank.jp/sbnews/entry/20220721_01"
              className="link-primary link"
            >
              https://www.softbank.jp/sbnews/entry/20220721_01
            </a>
          </p>
          <p className="my-5">
            ・NFTとは？仮想通貨との違いや利益を出す方法、最新の活用例を紹介 |
            Coincheck（コインチェック）
            <br />
            <a
              href="https://coincheck.com/ja/article/454"
              className="link-primary link"
            >
              https://coincheck.com/ja/article/454
            </a>
          </p>
          <p className="my-5">
            ・『【初心者向け】メタバースとは?意味や活用法を分かりやすく解説！ |
            Coincheck（コインチェック）』
            <br />
            <a
              href="https://coincheck.com/ja/article/484"
              className="link-primary link"
            >
              https://coincheck.com/ja/article/484
            </a>
          </p>
          <p className="my-5">
            ・『What Is Delegated Proof of Stake?』
            <br />
            <a
              href="https://crypto.com/university/what-is-dpos-delegated-proof-of-stake"
              className="link-primary link"
            >
              https://crypto.com/university/what-is-dpos-delegated-proof-of-stake
            </a>
          </p>
          <p className="my-5">
            ・"First presidential vote cast using blockchain technology | Fox
            News"
            <br />
            <a
              href="https://www.foxnews.com/tech/first-presidential-vote-cast-using-blockchain-technology"
              className="link-primary link"
            >
              https://www.foxnews.com/tech/first-presidential-vote-cast-using-blockchain-technology
            </a>
          </p>
          <p className="my-5">
            ・"Bitcoin consumes 'more electricity than Argentina'"
            <br />
            <a
              href="https://www.bbc.com/news/technology-56012952"
              className="link-primary link"
            >
              https://www.bbc.com/news/technology-56012952
            </a>
          </p>
          <p className="my-5">
            ・"Nike Sold an NFT Sneaker for $134,000 - The New York Times"
            <br />
            <a
              href="https://www.nytimes.com/2022/05/26/style/nike-nft-sneaker.html"
              className="link-primary link"
            >
              https://www.nytimes.com/2022/05/26/style/nike-nft-sneaker.html
            </a>
          </p>
          <p className="my-5">
            ・"SavjeeCoin"
            <br />
            <a
              href="https://www.bbc.com/news/technology-56012952"
              className="link-primary link"
            >
              https://www.bbc.com/news/technology-56012952
            </a>
          </p>
          <MiniSectionTitle>画像・アイコン</MiniSectionTitle>
          <p className="my-5">
            ・かわいいフリー素材集 いらすとや
            <br />
            　- ホームページ{" "}
            <a href="https://www.irasutoya.com/" className="link-primary link">
              https://www.irasutoya.com/
            </a>
            <br />
            　- 利用規約{" "}
            <a
              href="https://www.irasutoya.com/p/terms.html"
              className="link-primary link"
            >
              https://www.irasutoya.com/p/terms.html
            </a>
          </p>
          <MiniSectionTitle>Webサービス</MiniSectionTitle>

          <Pager direction="back" link="/creators.html" text="制作者紹介" />
          <Pager direction="forward" link="/sitemap.html" text="サイトマップ" />
        </Main>
      </Drawer>
    </>
  );
};

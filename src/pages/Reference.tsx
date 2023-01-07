import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Pager } from "../components/Pager";
import { MdOpenInNew } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const BookInfo = (props: {
  title: string;
  year: number;
  author: string;
  publisher: string;
}) => {
  const lang = useRecoilValue(langState);
  return(
    <div className="mb-10">
      <h3 className="text-lg font-bold sm:text-xl">
        {lang === "ja" && `■ 『${props.title}』`}
        {lang === "en" && `■ "${props.title}"`}  
      </h3>
      <div className="sm:text-md text-md mt-5 indent-5">
        {lang === "ja" && <>
          <p>著者: {props.author}</p>
          <p>出版社: {props.publisher}</p>
          <p>出版: {props.year}年</p>
        </>}
        {lang === "en" && <>
          <p>Author: {props.author}</p>
          <p>Publisher: {props.publisher}</p>
          <p>Published: {props.year}</p>
        </>}
      </div>
    </div>
  )
};

export const SiteInfo = (props: {
  title: string;
  author: string;
  url: string;
  date: string;
}) => {
  const lang = useRecoilValue(langState);
  return(
  <div className="mb-10">
    <h3 className="sm:text-x text-lg font-bold">
      {lang === "ja" && `■『${props.title}』`}
      {lang === "en" && `■"${props.title}"`}
    </h3>
    <div className="sm:text-md text-md mt-5 indent-5">
      {lang === "ja" && (<>
        <p>著者: {props.author}</p>
        <p>
          リンク:{" "}
          <a
            className="link-primary link break-all"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.url}
            <MdOpenInNew style={{ display: "inline", marginLeft: "0.5em" }} />
          </a>
        </p>
        <p>参照日: {props.date}</p>
      </>)}
      {lang === "en" && (<>
        <p>Author: {props.author}</p>
        <p>
          Link:{" "}
          <a
            className="link-primary link break-all"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.url}
            <MdOpenInNew style={{ display: "inline", marginLeft: "0.5em" }} />
          </a>
        </p>
        <p>Reference Date: {props.date}</p>
      </>)}
    </div>
  </div>
)
};

export const MaterialInfo = (props: {
  title: string;
  homePage: string;
  licensePage: string;
}) => (
  <div className="mb-10">
    <h3 className="sm:text-x text-lg font-bold">■『{props.title}』</h3>
    <div className="sm:text-md text-md mt-5 indent-5">
      <p>
        ホームページ:{" "}
        <a
          className="link-primary link break-all"
          href={props.homePage}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.homePage}
          <MdOpenInNew
            style={{ display: "inline", marginLeft: "0.5em" }}
          ></MdOpenInNew>
        </a>
      </p>
      <p>
        利用規約:{" "}
        <a
          className="link-primary link break-all"
          href={props.homePage}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.licensePage}
          <MdOpenInNew
            style={{ display: "inline", marginLeft: "0.5em" }}
          ></MdOpenInNew>
        </a>
      </p>
    </div>
  </div>
);

export const Reference = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>参考書籍</MiniSectionTitle>
          <BookInfo
            title="図解即戦力
            ブロックチェーンのしくみと開発がこれ1冊でしっかりわかる教科書"
            author="コンセンサスベイス・株式会社"
            publisher="技術評論社"
            year={2019}
          />
          <BookInfo
            title="決定版　ビットコイン＆ブロックチェーン"
            author="岡田 仁志"
            publisher="東洋経済新聞社"
            year={2018}
          />
          <BookInfo
            title="ブロックチェーン・レボリューション
            ――ビットコインを支える技術はどのようにビジネスと経済、そして世界を変えるのか"
            author="ドン・タプスコット, アレックス・タプスコット"
            publisher="ダイヤモンド社"
            year={2016}
          />

          <MiniSectionTitle>参考サイト</MiniSectionTitle>

          <SiteInfo
            title="ブロックチェーンの歴史"
            author="Binance Academy"
            url="https://academy.binance.com/ja/articles/history-of-blockchain"
            date="12/22"
          />
          <SiteInfo
            title="タイムスタンプとは？"
            author="総務省"
            url="https://www.soumu.go.jp/main_sosiki/joho_tsusin/security/basic/structure/05.html"
            date="12/26"
          />
          <SiteInfo
            title="アルトコイン｜証券用語解説集｜野村證券"
            author="野村證券"
            url="https://www.nomura.co.jp/terms/japan/a/A03151.html"
            date="12/22"
          />
          <SiteInfo
            title="'英語「hash」の意味・使い方・読み方 | Weblio英和辞書'"
            author="weblio"
            url="https://ejje.weblio.jp/content/hash"
            date="12/26"
          />
          <SiteInfo
            title="公開鍵暗号方式とは？初心者でもわかる公開鍵暗号方式の基礎"
            author="Udemy"
            url="https://udemy.benesse.co.jp/development/blockchain/public-key-cryptography.html"
            date="12/22"
          />
          <SiteInfo
            title="メタデータ（メタ情報）とは - 意味をわかりやすく - IT用語辞典
  e-Words"
            author="e-Words"
            url="https://e-words.jp/w/%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF.html"
            date="12/22"
          />
          <SiteInfo
            title="サトシ・ナカモトとは？ 正体不明のビットコイン開発者の正体に迫る |
            coindesk JAPAN | コインデスク・ジャパン"
            author="coindesk JAPAN"
            url="https://www.coindeskjapan.com/keywords/satoshi-nakamoto/"
            date="12/22"
          />

          <SiteInfo
            title="サトシ・ナカモトは誰？ | Binance Academy"
            author="Binance Academy"
            url="https://academy.binance.com/ja/articles/who-is-satoshi-nakamoto"
            date="12/22"
          />

          <SiteInfo
            title="PoW（プルーフ・オブ・ワーク）"
            author="DMM"
            url="https://bitcoin.dmm.com/glossary/proof_of_work"
            date="12/22"
          />

          <SiteInfo
            title="流動性とは？ | Binance Academy"
            author="Binance Academy"
            url="https://academy.binance.com/ja/articles/liquidity-explained"
            date="12/22"
          />
          <SiteInfo
            title="PoWとPoSの仕組みの違いは？ 採用する代表的な暗号資産も紹介"
            author="CoinDesk Japan"
            url="https://www.coindeskjapan.com/keywords/pow-pos/"
            date="12/27"
          />
          <SiteInfo
            title="ネム（XEM）とは"
            author="GMO Coin"
            url="https://coin.z.com/jp/corp/information/xem/"
            date="12/27"
          />

          <SiteInfo
            title="中国で仮想通貨が「全面禁止」になった理由と、矛盾もはらむ政府の思惑
            | WIRED.jp"
            author="WIRED"
            url="https://wired.jp/2021/10/07/chinas-sweeping-cryptocurrency-ban-inevitable/"
            date="12/22"
          />

          <SiteInfo
            title="仮想通貨と電子マネーの違いはなに？それぞれのメリットについて解説！
            - PayPay"
            author="PayPay"
            url="https://paypay.ne.jp/store-media/knowledge/0023_chigai/"
            date="12/22"
          />

          <SiteInfo
            title="NFTとは？仕組みや特徴、関連するおすすめの仮想通貨を初心者向けに解説！
  | CRYPTO INSIGHT powered by ダイヤモンド・ザイ"
            author="ダイヤモンド・ザイ"
            url="https://diamond.jp/crypto/nft/nft/#index_id"
            date="12/22"
          />
          <SiteInfo
            title="話題のNFTって何？ 知っておきたい基礎知識を解説 -
  ITをもっと身近に。ソフトバンクニュース"
            author="ソフトバンクニュース"
            url="https://www.softbank.jp/sbnews/entry/20220721_01"
            date="12/22"
          />
          <SiteInfo
            title="NFTとは？仮想通貨との違いや利益を出す方法、最新の活用例を紹介 |
  Coincheck（コインチェック）"
            author="Coincheck"
            url="https://coincheck.com/ja/article/454"
            date="12/22"
          />
          <SiteInfo
            title="【初心者向け】メタバースとは?意味や活用法を分かりやすく解説！ |
  Coincheck（コインチェック）"
            author="Coincheck"
            url="https://coincheck.com/ja/article/484"
            date="12/22"
          />
          <SiteInfo
            title="NFTゲームとは？既存ゲームとの違いとおすすめ6選、利益を出す方法も
  | Coincheck（コインチェック）"
            author="Coincheck"
            url="https://paypay.ne.jp/store-media/knowledge/0023_chigai/"
            date="12/22"
          />
          <SiteInfo
            title="サプライチェーンとは何か具体例を交えて徹底解説｜三井倉庫グループ"
            author="三井倉庫グループ"
            url="https://www.mitsui-soko.com/column/2019/11"
            date="12/22"
          />

          <SiteInfo
            title="ブロックチェーンが与えるサプライチェーンマネジメントへのインパクト
            | DATA INSIGHT | NTTデータ"
            author="NTTデータ"
            url="https://www.nttdata.com/jp/ja/data-insight/2019/0221/"
            date="12/22"
          />
          <SiteInfo
            title="Web3領域で起業を目指す学生向け支援制度「Web3 Startups」一期生決定！"
            author="double jump.tokyo"
            url="https://prtimes.jp/main/html/rd/p/000000102.000034671.html"
            date="12/29"
          />
          <SiteInfo
            title="Web3 Startups　一期生"
            author="gumi"
            url="https://hrmos.co/pages/gumi/jobs/web3_001"
            date="12/29"
          />
          <SiteInfo
            title="Veroo"
            author="Veroo"
            url="https://veroo.xyz/"
            date="12/30"
          />
          <SiteInfo
            title="What Is Delegated Proof of Stake?"
            author="crypto.com"
            url="https://crypto.com/university/what-is-dpos-delegated-proof-of-stake"
            date="12/22"
          />
          <SiteInfo
            title="First presidential vote cast using blockchain technology | Fox
            News"
            author="FOX News"
            url="https://www.foxnews.com/tech/first-presidential-vote-cast-using-blockchain-technology"
            date="12/22"
          />
          <SiteInfo
            title="Bitcoin consumes 'more electricity than Argentina'"
            author="BCC"
            url="https://www.bbc.com/news/technology-56012952"
            date="12/22"
          />
          <SiteInfo
            title="Nike Sold an NFT Sneaker for $134,000 - The New York Times"
            author="The New York Times"
            url="https://www.nytimes.com/2022/05/26/style/nike-nft-sneaker.html"
            date="12/22"
          />
          <SiteInfo
            title="SavjeeCoin"
            author="Savjee"
            url="https://github.com/Savjee/SavjeeCoin"
            date="12/22"
          />
          <MiniSectionTitle>画像・アイコン</MiniSectionTitle>
          <MaterialInfo
            title="かわいいフリー素材集 いらすとや"
            homePage="https://www.irasutoya.com/"
            licensePage="https://www.irasutoya.com/p/terms.html"
          ></MaterialInfo>

          <MiniSectionTitle>Webサービス</MiniSectionTitle>
          <MaterialInfo
            title="Google Font"
            homePage="https://fonts.google.com/"
            licensePage="https://fonts.google.com/about"
          ></MaterialInfo>

          <MaterialInfo
            title="RealFaviconGenerator"
            homePage="https://realfavicongenerator.net/"
            licensePage="https://realfavicongenerator.net/terms_of_service"
          ></MaterialInfo>

          <Pager direction="back" link="/creators.html" text={lang === "ja" ? "制作者紹介" : lang === "en" ? "Creators Introduction" : ""} />
          <Pager direction="forward" link="/sitemap.html" text={lang === "ja" ? "サイトマップ" : lang === "en" ? "Site Map" : ""} />
        </Main>
      </Drawer>
    </>
  );
};

import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { Crumb } from "../../components/Crumb";

export const C4S4 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <Crumb chapter={4} section={4} />
        <MiniSectionTitle>
          {lang === "ja" && "メタバース"}
          {lang === "en" && "Metaverse"}
        </MiniSectionTitle>
        <Balloon char="nakamoto">
          {lang === "ja" && "メタバース？なんか聞いたことがあるような...。"}
          {lang === "en" &&
            "Metaverse? Sounds like something I've heard of...."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "うむ。確かに、ブロックチェーンに並んで話題となっているな。"}
          {lang === "en" &&
            "Hmmm. Certainly, it's a hot topic along with blockchain."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "メタバース。名前はかっこいいんですけど、どんなものかはよく知らないんですよね...。"}
          {lang === "en" &&
            "Metaverse. It's a cool name, but I don't really know what it is..."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              一言でいえば、<Important>インターネット上の3D仮想空間</Important>
              。
            </>
          )}
          {lang === "en" && (
            <>
              In a nutshell, it is{" "}
              <Important>a 3D virtual space on the Internet.</Important>
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "仮想空間で他の人とコミュニケーションが取れるといった特徴がある。"}
          {lang === "en" &&
            "It has features such as being able to communicate with others in a virtual space."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "それがブロックチェーンとどんな関係があるんですか？"}
          {lang === "en" && "What does it have to do with blockchain?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "ふっふっふ、それが最も面白いところ。"}
          {lang === "en" && "Hum, that is the most interesting part."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "メターバースにNFTを活用するとどうなるか...。"}
          {lang === "en" &&
            "What is happen when NFTs are utilized in the metaverse....?"}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "NFTはデジタルデータを代替不可能なものにするから...。"}
          {lang === "en" && "NFT makes digital data irreplaceable...."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "まるで現実世界と同じように、数の限られているモノを売り買いできるようになるのか！"}
          {lang === "en" &&
            "It is like the real world, where you can buy and sell things in limited numbers!"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "その通りだ。"}
          {lang === "en" && "Exactly"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              この<Important>メタバース×ブロックチェーン</Important>
              の組み合わせは、様々な企業から注目を浴びている。
            </>
          )}
          {lang === "en" && (
            <>
              This <Important>metaverse x blockchain</Important> combination is
              attracting a lot of attention from various companies.
            </>
          )}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" &&
            "実際、Nikeが2022年4月、RTFKTと共同でNFTのスニーカーを作成、販売した。"}
          {lang === "en" &&
            "In fact, Nike collaborated with RTFKT to create and sell NFT sneakers in April 2022."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "あの有名スポーツブランドまでも！？"}
          {lang === "en" && "Even that famous sports brand!"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              NFTマーケットプレイス<Important>OpenSea</Important>
              から、スニーカーのデザインやその他の情報がみれる。
            </>
          )}
          {lang === "en" && (
            <>
              You can see the sneaker designs and other information from the NFT
              marketplace <Important>OpenSea.</Important>
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "興味があったら、下記リンクから見てみよう。"}
          {lang === "en" &&
            "If you are interested, please visit the link below."}
        </Balloon>
        <div className="text-right">
          <a
            href="https://opensea.io/collection/rtfkt-nike-cryptokicks"
            className="link-primary link"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://opensea.io/collection/rtfkt-nike-cryptokicks
          </a>
        </div>

        <Pager direction="back" />
        <Pager direction="forward" />

        <MiniSectionTitle>
          {lang === "ja" && "参考文献"}
          {lang === "en" && "References"}
        </MiniSectionTitle>
        <BookInfo
          title="図解即戦力
            ブロックチェーンのしくみと開発がこれ1冊でしっかりわかる教科書"
          author="コンセンサスベイス・株式会社"
          publisher="技術評論社"
          year={2019}
        />
        <SiteInfo
          title="【初心者向け】メタバースとは?意味や活用法を分かりやすく解説！ |
  Coincheck（コインチェック）"
          author="Coincheck"
          url="https://coincheck.com/ja/article/484"
          date="12/22"
        />
      </Main>
    </>
  );
};

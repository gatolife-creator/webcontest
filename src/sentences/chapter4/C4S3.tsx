import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { BookInfo, SiteInfo } from "../../pages/Reference";

export const C4S3 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>NFT</MiniSectionTitle>
        <Balloon char="nakamoto">
          {lang === "ja" && "あ〜イライラする〜っ！"}
          {lang === "en" && "Oh, I'm so frustrated!"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "どうしたんだ？"}
          {lang === "en" && "What's wrong with you?"}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "これ見てくださいよ。"}
          {lang === "en" && "Take a look at this."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "うん、どれどれ・・・？なんだただの絵じゃないか。"}
          {lang === "en" &&
            "Yeah, which one...? What is it? It's just a picture."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "ただの絵じゃないですよ。これは僕が大好きなパンクシーの描いた絵なんです。"}
          {lang === "en" &&
            "It's not just a drawing. It's a drawing by my favorite artist, Panksy!"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "そうか・・・。あれ、このアカウント、その人と名前が違うが？"}
          {lang === "en" &&
            "I see... Hey, this account has a different name from that person."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "そうなんですよ！この人パンクシーが描いた絵を自分が描いたと言って、勝手にアップしてるんです。"}
          {lang === "en" &&
            "That's right! This person impersonated Panksy and uploading his drawings without permission."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "でもそれ、ブロックチェーンなら解決できるかもしれないぞ。"}
          {lang === "en" && "But that could be solved with blockchain."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "えっ、ホントですか？"}
          {lang === "en" && "Is it true?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "もちろん本当だ。"}
          {lang === "en" && "Of course it is."}
        </Balloon>
        <Balloon char="node">
          <Important>NFT</Important>にすればな！
        </Balloon>
        <Balloon char="nakamoto">エヌエフティーってなんですか？</Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              NFTはNon-Fungible Tokenの略で、ブロックチェーン上で構築できる
              <Important>代替不可能なトークン</Important>のことだ。
            </>
          )}
          {lang === "en" && (
            <>
              NFT stands for Non-Fungible Token, which is{" "}
              <Important>an irreplaceable token</Important> that can be
              constructed on the blockchain.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">代替不可能？</Balloon>
        <Balloon char="node">唯一無二ということだ。</Balloon>
        <Balloon char="node">
          もし私が、君の持っている100円と、私の持っている100円を交換してくれと頼んだら君は交換してくれるか？
        </Balloon>
        <Balloon char="nakamoto">まあ、はい。同じ値段ですから。</Balloon>
        <Balloon char="node">
          そうだろう。二人の100円は同じ価値であり、交換することができる。つまり「代替可能」ということだ。
        </Balloon>
        <Balloon char="node">
          それとは逆に、例えば君の好きなパンクシーのサインが書かれたTシャツと新品の同じTシャツを交換するか？
        </Balloon>
        <Balloon char="nakamoto">それは譲れないです！</Balloon>
        <Balloon char="nakamoto">
          あっ、これが<Important>「代替不可能」</Important>ってことか！
        </Balloon>
        <Balloon char="node">その通り。</Balloon>
        <Balloon char="nakamoto">
          でもどうやってデジタルのデータに唯一無二の価値をつけられるんですか？
        </Balloon>
        <Balloon char="nakamoto">
          僕知ってますよ。デジタルデータはコピーできること。
        </Balloon>
        <Balloon char="node">
          確かにNFTでもコピーだけなら簡単に出来てしまう。
        </Balloon>
        <Balloon char="node">
          しかしブロックチェーンの改ざんの難しさと透明性によって、コピーしても
          <Important>誰が描いたものかが明確になる</Important>のだ。
        </Balloon>
        <Balloon char="ether">
          なるほど、作成者や所有者の情報をブロックチェーンに記録すればいいわけですか。
        </Balloon>
        <Balloon char="node">その通りだイザワ君。</Balloon>
        <Balloon char="node">
          NFTを活用することによって、デジタルデータの作成者はもちろん、その所有者も明確になる。これによって、従来とは異なるデジタルデータの取引が行えるようになる。
        </Balloon>

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
      </Main>
    </>
  );
};

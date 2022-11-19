import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Link } from "react-router-dom";
import { Important } from "../../components/Important";

export const C4S3 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>NFT</MiniSectionTitle>
        <Balloon char="satoshi">あ〜イライラする〜っ！</Balloon>
        <Balloon char="node">どうしたんだ？</Balloon>
        <Balloon char="satoshi">これ見てくださいよ。</Balloon>
        <Balloon char="node">
          うん、どれどれ・・・？なんだただの絵じゃないか。
        </Balloon>
        <Balloon char="satoshi">
          ただの絵じゃないですよ。これは僕が大好きなナカサトさんの描いた絵なんです。
        </Balloon>
        <Balloon char="node">
          そうか・・・。あれ、このアカウント、その人と名前が違うが？
        </Balloon>
        <Balloon char="satoshi">
          そうなんですよ！この人ナカサトさんが描いた絵を自分が描いたと言って、勝手にアップしてるんです。
        </Balloon>
        <Balloon char="node">
          でもそれ、ブロックチェーンなら解決できるかもしれないぞ。
        </Balloon>
        <Balloon char="satoshi">えっ、ホントですか？</Balloon>
        <Balloon char="node">もちろん本当だ。</Balloon>
        <Balloon char="node">
          <Important>NFT</Important>にすればな！
        </Balloon>
        <Balloon char="satoshi">エヌエフティーってなんですか？</Balloon>
        <Balloon char="node">
          NFTはNon-Fungible Tokenの略で、ブロックチェーン上で構築できる
          <Important>代替不可能なトークン</Important>のことだ。
        </Balloon>
        <Balloon char="satoshi">代替不可能？</Balloon>
        <Balloon char="node">唯一無二ということだ。</Balloon>
        <Balloon char="node">
          もし私が、君の持っている100円と、私の持っている100円を交換してくれと頼んだら君は交換してくれるか？
        </Balloon>
        <Balloon char="satoshi">まあ、はい。同じ値段ですから。</Balloon>
        <Balloon char="node">
          そうだろう。二人の100円は同じ価値であり、交換することができる。つまり「代替可能」ということだ。
        </Balloon>
        <Balloon char="node">
          それとは逆に、例えば君の好きなナカサトさんのサインが書かれたTシャツと新品の同じTシャツを交換するか？
        </Balloon>
        <Balloon char="satoshi">それは譲れないです！</Balloon>
        <Balloon char="satoshi">
          あっ、これが<Important>「代替不可能」</Important>ってことか！
        </Balloon>
        <Balloon char="node">その通り。</Balloon>
        <Balloon char="satoshi">
          でもどうやってデジタルのデータに唯一無二の価値をつけられるんですか？
        </Balloon>
        <Balloon char="satoshi">
          僕知ってますよ。デジタルデータはコピーできること。
        </Balloon>
        <Balloon char="node">
          確かにNFTでもコピーだけなら簡単に出来てしまう。
        </Balloon>
        <Balloon char="node">
          しかしブロックチェーンの改ざんの難しさと透明性によって、コピーしても
          <Important>誰が描いたものかが明確になる</Important>のだ。
        </Balloon>

        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

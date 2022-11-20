import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C4S3 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>NFT</MiniSectionTitle>
        <Balloon char="nakamoto">あ〜イライラする〜っ！</Balloon>
        <Balloon char="node">どうしたんだ？</Balloon>
        <Balloon char="nakamoto">これ見てくださいよ。</Balloon>
        <Balloon char="node">
          うん、どれどれ・・・？なんだただの絵じゃないか。
        </Balloon>
        <Balloon char="nakamoto">
          ただの絵じゃないですよ。これは僕が大好きなナカサトさんの描いた絵なんです。
        </Balloon>
        <Balloon char="node">
          そうか・・・。あれ、このアカウント、その人と名前が違うが？
        </Balloon>
        <Balloon char="nakamoto">
          そうなんですよ！この人ナカサトさんが描いた絵を自分が描いたと言って、勝手にアップしてるんです。
        </Balloon>
        <Balloon char="node">
          でもそれ、ブロックチェーンなら解決できるかもしれないぞ。
        </Balloon>
        <Balloon char="nakamoto">えっ、ホントですか？</Balloon>
        <Balloon char="node">もちろん本当だ。</Balloon>
        <Balloon char="node">
          <Important>NFT</Important>にすればな！
        </Balloon>
        <Balloon char="nakamoto">エヌエフティーってなんですか？</Balloon>
        <Balloon char="node">
          NFTはNon-Fungible Tokenの略で、ブロックチェーン上で構築できる
          <Important>代替不可能なトークン</Important>のことだ。
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
          それとは逆に、例えば君の好きなナカサトさんのサインが書かれたTシャツと新品の同じTシャツを交換するか？
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
      </Main>
    </>
  );
};

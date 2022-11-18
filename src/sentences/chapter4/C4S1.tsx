import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C4S1 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>仮想通貨</MiniSectionTitle>
        <SubSectionTitle>仮想通貨とは</SubSectionTitle>
        <Balloon char="satoshi">さっきまでの説明にたびたび「仮想通貨」って出てきましたけど、電子マネーとどう違うんですか？</Balloon>
        <Balloon char="node">なるほど、確かに電子マネーと仮想通貨は混同されがちだな。</Balloon>
        <Balloon char="node">これらの違いを一言で表すなら、<Important>第三者の信用</Important>を必要とするか否かだ。</Balloon>
        {/* <Balloon char="satoshi">第三者の信用？</Balloon> */}

        <SubSectionTitle>仮想通貨の特徴</SubSectionTitle>
        <Balloon char="node">サトシ君、君が知っている電子マネーを上げてごらん。</Balloon>
        <Balloon char="satoshi">ええと、PayPayにPayPal、楽天Payとかですかね。</Balloon>
        <Balloon char="node">それらの電子マネーを発行しているのは誰かな？</Balloon>
        <Balloon char="satoshi">どれも有名な企業ですね。</Balloon>
        <Balloon char="node">そうだ。じゃあ、もしもどこのだれが作ったのかわからない電子マネーがあったとしたら、君は使いたいか。</Balloon>
        <Balloon char="satoshi">それは嫌ですよ。誰が管理しているかわからないものなんて使いたくありません。</Balloon>
        <Balloon char="node">当然だな。大企業の場合、突然電子マネーが使えなくなってしまう、などのことが起こりづらい。</Balloon>

        <Balloon char="node">一方で仮想通貨はどうかな？</Balloon>
        <Balloon char="satoshi">あれ？仮想通貨って誰が管理するんだろう...？</Balloon>
        <Balloon char="node">答えは<Important>ブロックチェーンの仕組み</Important>だ。</Balloon>
        {/* <Balloon char=""></Balloon> */}
        <Balloon char="node">このように、第三者の信用を必要としないことを<Important>トラストレス</Important>という。</Balloon>
        <Balloon char="satoshi">トラストレスにはどんなメリットがあるんですか？</Balloon>
        {/* <Balloon char="node"></Balloon> */}

        <SubSectionTitle>悪用される仮想通貨</SubSectionTitle>
        <Pager
          direction="back"
        />
        <Pager
          direction="forward"
        />
      </Main>
    </>
  );
};

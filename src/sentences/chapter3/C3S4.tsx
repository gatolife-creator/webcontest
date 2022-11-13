import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C3S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>コンセンサスアルゴリズム（1）</MiniSectionTitle>
      <Balloon char="node">さっきブロックチェーンでは、<Important>承認</Important>作業が行われると言ったな。</Balloon>
      <Balloon char="satoshi">はい。</Balloon>
      <Balloon char="node">この承認を実現する仕組みのことを<Important>コンセンサスアルゴリズム</Important>と言う。ブロックチェーンによってその仕組みは異なるが、まずはビットコインを例に見てみよう。</Balloon>

      <SubSectionTitle>PoW（Proof of Work）</SubSectionTitle>
      <Balloon char="satoshi">Proof of Work...。仕事の証明？</Balloon>
      <Balloon char="node">そう。PoW では世界中のコンピュータが<Important>競って仕事をする</Important>ことで、ブロックを生成している。</Balloon>
      <Balloon char="satoshi">どんな仕事をしているのですか？</Balloon>
      <Balloon char="node">ブロックのハッシュ値を求めたときに、先頭に特定の数以上0が並ぶ値を求めるのだ。</Balloon>
      <Balloon char="satoshi">？？？なんだかこんがらがってきました。</Balloon>
      <Balloon char="node">イザワ君、PoW の図を頼む。</Balloon>
      <Balloon char="node">用意しました。</Balloon>

      

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

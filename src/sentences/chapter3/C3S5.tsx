import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C3S5 = () => {
  return (
    <Main>
      <MiniSectionTitle>コンセンサスアルゴリズム（2）</MiniSectionTitle>
      <Balloon char="node">
        さて、今回はPoWの問題を解消するべく発明された<Important>PoS</Important>
        について見ていこう。
      </Balloon>

      <SubSectionTitle>PoS（Proof of Stake）</SubSectionTitle>
      <Balloon char="node">
        PoWでは、コンピューターの計算能力が高いほど、ブロックを承認できる確率が高くなる。
      </Balloon>
      <Balloon char="node">
        一方、PoSでは<Important>通貨の保有量が高い</Important>
        ほど、ブロックを承認できる確率が高くなる。
      </Balloon>
      <SubSectionTitle>PoSの仕組み</SubSectionTitle>
      <SubSectionTitle>PoSの問題点</SubSectionTitle>
      <SubSectionTitle>新たなコンセンサスアルゴリズム</SubSectionTitle>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

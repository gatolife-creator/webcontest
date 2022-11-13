import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";

export const C3S5 = () => {
  return (
    <Main>
      <MiniSectionTitle>コンセンサスアルゴリズム（2）</MiniSectionTitle>

      <SubSectionTitle>PoS（Proof of Stake）</SubSectionTitle>
      <SubSectionTitle>PoSの仕組み</SubSectionTitle>
      <SubSectionTitle>PoSの問題点</SubSectionTitle>
      <SubSectionTitle>新たなコンセンサスアルゴリズム</SubSectionTitle>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

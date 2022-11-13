import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C3S5 = () => {
  return (
    <Main>
      <MiniSectionTitle>コンセンサスアルゴリズム（2）</MiniSectionTitle>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

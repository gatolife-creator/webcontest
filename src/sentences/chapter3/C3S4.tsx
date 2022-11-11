import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C3S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>コンセンサスアルゴリズム</MiniSectionTitle>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

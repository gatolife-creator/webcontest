import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C3S2 = () => {
  return (
    <Main>
      <MiniSectionTitle>処理の流れ</MiniSectionTitle>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

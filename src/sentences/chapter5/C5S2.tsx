import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";

export const C5S2 = () => {
  return (
    <Main>
      <MiniSectionTitle>環境対策</MiniSectionTitle>

      <Pager
        direction="back"
      />
      <Pager
        direction="forward"
      />
    </Main>
  );
};

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
        text="第一章"
        link="/content.html?chapter=5&section=1"
      />
      <Pager
        direction="forward"
        text="第三節"
        link="/content.html?chapter=5&section=3"
      />
    </Main>
  );
};

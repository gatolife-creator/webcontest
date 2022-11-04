import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";

export const C5S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>ゲーム</MiniSectionTitle>

      <Pager
        direction="back"
        text="第三節"
        link="/content.html?chapter=5&section=3"
      />
      <Pager
        direction="forward"
        text="第五節"
        link="/content.html?chapter=5&section=5"
      />
    </Main>
  );
};

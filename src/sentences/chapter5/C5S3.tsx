import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";

export const C5S3 = () => {
  return (
    <Main>
      <MiniSectionTitle>教育</MiniSectionTitle>

      <Pager
        direction="back"
        text="第二節"
      />
      <Pager
        direction="forward"
        text="第四節"
      />
    </Main>
  );
};

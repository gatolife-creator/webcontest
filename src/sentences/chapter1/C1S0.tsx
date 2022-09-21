import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";

export const C1S0 = () => {
  return (
    <Main>
      これは導入
      <Pager direction="back" text="はじめに" link="/" />
      <Pager
        direction="forward"
        text="第一節"
        link="/content?chapter=1&section=1"
      />
    </Main>
  );
};

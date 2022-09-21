import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";

export const C2S0 = () => {
  return (
    <Main>
      これは第二章の導入
      <Pager
        direction="back"
        text="第三節"
        link="/content?chapter=1&section=3"
      />
      <Pager
        direction="forward"
        text="第一節"
        link="/content?chapter=2&section=1"
      />
    </Main>
  );
};

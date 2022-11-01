import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C2S4 = () => {
  return (
    <Main>
      <SectionTitle>第四節　仮想通貨の仕組みと特徴</SectionTitle>
    
      <MiniSectionTitle>ビットコインの仕組み</MiniSectionTitle>

      <Pager
        direction="back"
        text="第二節"
        link="/content.html?chapter=2&section=2"
      />
      <Pager
        direction="forward"
        text="第三章"
        link="/content.html?chapter=3&section=0"
      />
    </Main>
  );
};

import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";

export const C4S2 = () => {
  return (
    <>
      <Main>
        <MiniSectionTitle>スマートコントラクト</MiniSectionTitle>
        <SubSectionTitle>スマートコントラクトとは</SubSectionTitle>
        <SubSectionTitle>スマートコントラクトの用途</SubSectionTitle>
        <SubSectionTitle>NFT</SubSectionTitle>
        <Pager
          direction="back"
          text="第二章"
          link="/content.html?chapter=4&section=1"
        />
        <Pager
          direction="forward"
          text="第二節"
          link="/content.html?chapter=5&section=0"
        />
      </Main>
    </>
  );
};

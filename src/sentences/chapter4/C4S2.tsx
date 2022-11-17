import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";

export const C4S2 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>スマートコントラクト</MiniSectionTitle>
        <SubSectionTitle>スマートコントラクトとは</SubSectionTitle>
        <SubSectionTitle>スマートコントラクトの用途</SubSectionTitle>
        <SubSectionTitle>NFT</SubSectionTitle>
        <Pager
          direction="back"
        />
        <Pager
          direction="forward"
        />
      </Main>
    </>
  );
};

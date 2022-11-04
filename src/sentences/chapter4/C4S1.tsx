import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";

export const C4S1 = () => {
  return (
    <>
      <Main>
        <MiniSectionTitle>仮想通貨</MiniSectionTitle>
        <SubSectionTitle>仮想通貨とは</SubSectionTitle>
        <SubSectionTitle>仮想通貨の用途、特徴</SubSectionTitle>
        <SubSectionTitle>悪用される仮想通貨</SubSectionTitle>
        <Pager
          direction="back"
          text="第二章"
          link="/content.html?chapter=4&section=0"
        />
        <Pager
          direction="forward"
          text="第二節"
          link="/content.html?chapter=4&section=2"
        />
      </Main>
    </>
  );
};

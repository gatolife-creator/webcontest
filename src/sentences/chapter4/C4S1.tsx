import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C4S1 = () => {
  return (
    <>
      <Main>
        <MiniSectionTitle>仮想通貨</MiniSectionTitle>
        <SubSectionTitle>仮想通貨とは</SubSectionTitle>
        <Balloon char="satoshi">さっきまでの説明にたびたび「仮想通貨」って出てきましたけど、電子マネーとどう違うんですか？</Balloon>
        <Balloon char="node">なるほど、確かに電子マネーと仮想通貨は混同されがちだな。</Balloon>
        <Balloon char="node">これらの違いを一言で表すなら、<Important>第三者の信用</Important>を必要とするか否かだ。</Balloon>

        <SubSectionTitle>仮想通貨の用途、特徴</SubSectionTitle>
        <SubSectionTitle>悪用される仮想通貨</SubSectionTitle>
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

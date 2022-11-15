import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from '../../components/Balloon';

export const C3S2 = () => {
  return (
    <Main>
      <MiniSectionTitle>処理の流れ</MiniSectionTitle>
      <Balloon char="node">次に、</Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

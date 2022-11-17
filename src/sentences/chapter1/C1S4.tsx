// TODO ブロックチェーンの長所を解説することは絶対条件なので、以下の文を参考に修正する。

import React from "react";

import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from '../../components/Balloon';

export const C1S4 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>サトシ・ナカモトは何者？</MiniSectionTitle>
        <Balloon char="satoshi">そういえば、ビットコインの開発者のサトシ・ナカモトってどんな人なんですか？</Balloon>

        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

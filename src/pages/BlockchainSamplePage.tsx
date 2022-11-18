import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { BlockchainSample } from "../sample/blockchain/blockchainSample";
import { MiniSectionTitle } from "../components/MiniSectionTitle";

export const BlockchainSamplePage = () => {
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>ブロックチェーンサンプル</MiniSectionTitle>
          <BlockchainSample></BlockchainSample>
        </Main>
      </Drawer>
    </>
  );
};

import React from "react";
import { Drawer } from "../components/Drawer";
import { Important } from "../components/Important";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { BlockchainSample } from "../sample/blockchain/blockchainSample";

export const BlockchainSamplePage = () => {
  return (
    <>
      <Drawer>
        <Main>
          <BlockchainSample></BlockchainSample>
        </Main>
      </Drawer>
    </>
  );
};

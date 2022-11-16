import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

// import { BlockchainSample } from "../sample/blockchain/blockchainSample";

export const Test = () => {
  console.log("rendered");
  return (
    <Drawer>
      <Main>
        {/* <BlockchainSample></BlockchainSample> */}
      </Main>
    </Drawer>
  );
};

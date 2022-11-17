import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

import { Particles } from "../components/Particles";

// import { BlockchainSample } from "../sample/blockchain/blockchainSample";

export const Test = () => {
  console.log("rendered");
  return (
    <Drawer>
      <Main>
        <Particles></Particles>
        {/* <BlockchainSample></BlockchainSample> */}
      </Main>
    </Drawer>
  );
};

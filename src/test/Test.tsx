import React, { useState } from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

import { Certificate } from "../components/Certificate";
// import { BlockchainSample } from "../sample/blockchain/blockchainSample";

export const Test = () => {
  console.log("rendered");
  const [canvas, setCanvas] = useState<JSX.Element>(<Certificate />);
  return (
    <Drawer>
      <Main>
        {canvas}

        {/* <BlockchainSample></BlockchainSample> */}
      </Main>
    </Drawer>
  );
};

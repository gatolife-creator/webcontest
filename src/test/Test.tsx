import React from "react";
import { OptionalHash } from "../sample/hash/OptionalHash";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

export const Test = () => {
  return (
    <Drawer>
      <Main>
        <OptionalHash />
      </Main>
    </Drawer>
  );
};

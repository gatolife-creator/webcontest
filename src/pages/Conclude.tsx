import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";

export const Conclude = () => {
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>最後に</MiniSectionTitle>
        </Main>
      </Drawer>
    </>
  );
};

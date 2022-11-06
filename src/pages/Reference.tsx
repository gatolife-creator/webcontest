import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";

export const Reference = () => {
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>参考文献</MiniSectionTitle>
          
          <MiniSectionTitle>参考サイト</MiniSectionTitle>
        </Main>
      </Drawer>
    </>
  );
};

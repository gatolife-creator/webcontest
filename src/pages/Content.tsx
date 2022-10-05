import React from "react";
import { useLocation } from "react-router-dom";

import { Drawer } from "../components/Drawer";

import { C1S0 } from "../sentences/chapter1/C1S0";
import { C1S1 } from "../sentences/chapter1/C1S1";
import { C1S2 } from "../sentences/chapter1/C1S2";
import { C1S3 } from "../sentences/chapter1/C1S3";

import { C2S0 } from "../sentences/chapter2/C2S0";
import { C2S1 } from "../sentences/chapter2/C2S1";
import { C2S2 } from "../sentences/chapter2/C2S2";

import { C3S0 } from "../sentences/chapter3/C3S0";
import { C3S1 } from "../sentences/chapter3/C3S1";

export const Content = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const chapter = Number(query.get("chapter"));
  const section = Number(query.get("section"));

  return (
    <Drawer>
      {chapter === 1 ? (
        section === 0 ? (
          <C1S0 />
        ) : section === 1 ? (
          <C1S1 />
        ) : section === 2 ? (
          <C1S2 />
        ) : section === 3 ? (
          <C1S3></C1S3>
        ) : (
          <></>
        )
      ) : chapter === 2 ? (
        section === 0 ? (
          <C2S0 />
        ) : section === 1 ? (
          <C2S1 />
        ) : section === 2 ? (
          <C2S2 />
        ) : (
          <></>
        )
      ) : chapter === 3 ? (
        section === 0 ? (
          <C3S0 />
        ) : section === 1 ? (
          <C3S1 />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </Drawer>
  );
};

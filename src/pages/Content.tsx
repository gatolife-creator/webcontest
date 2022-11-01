import React from "react";
import { useLocation } from "react-router-dom";

import { Drawer } from "../components/Drawer";

import { C1S0 } from "../sentences/chapter1/C1S0";
import { C1S1 } from "../sentences/chapter1/C1S1";
import { C1S2 } from "../sentences/chapter1/C1S2";
import { C1S3 } from "../sentences/chapter1/C1S3";
import { C1S4 } from "../sentences/chapter1/C1S4";

import { C2S0 } from "../sentences/chapter2/C2S0";
import { C2S1 } from "../sentences/chapter2/C2S1";
import { C2S2 } from "../sentences/chapter2/C2S2";
import { C2S3 } from "../sentences/chapter2/C2S3";

import { C3S0 } from "../sentences/chapter3/C3S0";
import { C3S1 } from "../sentences/chapter3/C3S1";
import { C3S2 } from "../sentences/chapter3/C3S2";
import { C3STemp } from "../sentences/chapter3/C3Temp";

export const Content = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const chapter = Number(query.get("chapter"));
  const section = Number(query.get("section"));

  const pages: React.ReactElement[][] = [
    [],
    [<C1S0 />, <C1S1 />, <C1S2 />, <C1S3 />, <C1S4 />],
    [<C2S0 />, <C2S1 />, <C2S2 />, <C2S3 />],
    [<C3S0 />, <C3S1 />, <C3S2 />, <C3STemp />],
  ];

  return (
    <Drawer>{pages[chapter][section] ? pages[chapter][section] : <></>}</Drawer>
  );
};

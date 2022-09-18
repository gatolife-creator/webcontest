import React from "react";
import { useLocation } from "react-router-dom";
import { C1S1 } from "../sentences/chapter1/C1S1";
import { C1S2 } from "../sentences/chapter1/C1S2";
import { C2S1 } from "../sentences/chapter2/C2S1";

export const Content = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const chapter = Number(query.get("chapter"));
  const section = Number(query.get("section"));

  return chapter === 1 ? (
    section === 1 ? (
      <C1S1 />
    ) : section === 2 ? (
      <C1S2 />
    ) : (
      <></>
    )
  ) : section === 1 ? (
    <C2S1 />
  ) : (
    <></>
  );
};

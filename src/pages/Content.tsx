import React from "react";
import { useLocation } from "react-router-dom";
import { C1S1 } from "../sentences/chapter1/C1S1";

export const Content = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  return query.get("chapter") === "1" ? (
    query.get("section") === "1" ? (
      <C1S1 />
    ) : (
      <></>
    )
  ) : query.get("chapter") === "2" ? (
    <>chapter2</>
  ) : query.get("chapter") === "3" ? (
    <>chapter3</>
  ) : (
    <></>
  );
};

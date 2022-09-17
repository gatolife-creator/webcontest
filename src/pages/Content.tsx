import React from "react";
import { useLocation } from "react-router-dom";

export const Content = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  return query.get("chapter") === "1" ? (
    <>chapter1</>
  ) : query.get("chapter") === "2" ? (
    <>chapter2</>
  ) : query.get("chapter") === "3" ? (
    <>chapter3</>
  ) : (
    <></>
  );
};

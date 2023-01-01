import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import { pages } from "../pages/Content";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Pager = (props: {
  direction: "back" | "forward";
  text?: string;
  link?: string;
}) => {
  const lang = useRecoilValue(langState);
  const { direction, text, link } = props;
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const chapter = Number(query.get("chapter"));
  const section = Number(query.get("section"));

  return direction === "back" ? (
    <Link
      to={
        link
          ? link
          : pages[chapter][section - 1]
          ? `/content.html?chapter=${chapter}&section=${section - 1}`
          : `/content.html?chapter=${chapter - 1}&section=${
              pages[chapter - 1].length - 1
            }`
      }
      className="btn-primary btn-lg btn float-left my-7 gap-2 shadow-md"
    >
      <FaArrowLeft />
      {text ? text : lang === "ja" ? "戻る" : lang === "en" ? "Prev" : ""}
    </Link>
  ) : direction === "forward" ? (
    <Link
      to={
        link
          ? link
          : pages[chapter][section + 1]
          ? `/content.html?chapter=${chapter}&section=${section + 1}`
          : `/content.html?chapter=${chapter + 1}&section=${0}`
      }
      className="btn-primary btn-lg btn float-right my-7 gap-2 shadow-md"
    >
      {text ? text : lang === "ja" ? "次へ" : lang === "en" ? "Next" : ""}
      <FaArrowRight />
    </Link>
  ) : (
    <></>
  );
};

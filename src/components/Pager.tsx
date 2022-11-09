import React from "react";
import { Link, useLocation } from "react-router-dom";

import { pages } from "../pages/Content";

export const Pager = (props: {
  direction: "back" | "forward";
  text: string;
  link?: string;
}) => {
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
      <i className="bi bi-arrow-left"></i>
      {text}
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
      {text}
      <i className="bi bi-arrow-right"></i>
    </Link>
  ) : (
    <></>
  );
};

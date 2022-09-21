import React from "react";
import { Link } from "react-router-dom";

export const Pager = (props: {
  direction: "back" | "forward";
  text: string;
  link: string;
}) => {
  const { direction, text, link } = props;
  return direction === "back" ? (
    <Link to={link} className="btn btn-primary gap-2 float-left">
      <i className="bi bi-arrow-left"></i>
      {text}
    </Link>
  ) : direction === "forward" ? (
    <Link to={link} className="btn btn-primary gap-2 float-right">
      {text}
      <i className="bi bi-arrow-right"></i>
    </Link>
  ) : (
    <></>
  );
};

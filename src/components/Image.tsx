import React from "react";

export const Image = (props: {
  src: string;
  style?: {};
  className?: string;
}) => {
  return (
    <img
      src={props.src}
      alt=""
      className={props.className ? props.className : "m-auto my-10 !max-h-[80vh]"}
      style={props.style || { boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, .3)" }}
    />
  );
};

import React from "react";

export const Image = (props: { src: string; style?: {} }) => {
  return (
    <img
      src={props.src}
      alt=""
      className="modal-button m-auto my-10"
      style={props.style || { boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, .3)" }}
    />
  );
};

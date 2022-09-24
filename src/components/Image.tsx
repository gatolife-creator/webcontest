import React from "react";

export const Image = (props: {src: string}) => {
  return (
    <img
      src={props.src}
      alt=""
      className="modal-button m-auto border-black border-2"
    />
  );
};

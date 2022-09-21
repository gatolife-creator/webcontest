import React from "react";

export const Balloon = (props: {
  direction: "left" | "right";
  children: React.ReactNode;
}) => {
  const { direction } = props;
  return direction === "left" ? (
    <>
      <img
        src="https://placeimg.com/160/160/arch"
        alt=""
        className="mask mask-circle w-11 mt-5 mb-5 float-left"
      />
      <p className="p-2 rounded-r-3xl rounded-bl-3xl w-9/12 float-left ml-5 mt-5 mb-5 bg-primary leading-6">
        {props.children}
      </p>
      <div className="clear-left"></div>
    </>
  ) : direction === "right" ? (
    <>
      <img
        src="https://placeimg.com/160/160/arch"
        alt=""
        className="mask mask-circle w-11 mt-5 mb-5 float-right"
      />
      <p className="p-2 rounded-l-3xl rounded-br-3xl w-9/12 float-right mr-5 mt-5 mb-5 bg-primary leading-6">
        {props.children}
      </p>
      <div className="clear-right"></div>
    </>
  ) : (
    <></>
  );
};

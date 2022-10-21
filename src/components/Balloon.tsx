import React from "react";

export const Balloon = (props: {
  direction: "left" | "right";
  children: React.ReactNode;
}) => {
  const { direction } = props;
  return direction === "left" ? (
    <>
      <img
        src="https://thumb.ac-illust.com/1b/1bfa58b9111cec87a2c8006cf89f0dba_t.jpeg"
        alt=""
        className="mask mask-circle float-left mt-5 mb-5 w-16"
      />
      <p className="float-left ml-5 mt-5 mb-5 max-w-3xl rounded-r-3xl rounded-bl-3xl bg-base-200 p-2.5 leading-6">
        {props.children}
      </p>
      <div className="clear-left" />
    </>
  ) : direction === "right" ? (
    <>
      <img
        src="https://thumb.ac-illust.com/1b/1bfa58b9111cec87a2c8006cf89f0dba_t.jpeg"
        alt=""
        className="mask mask-circle float-right mt-5 mb-5 w-16"
      />
      <p className="float-right mr-5 mt-5 mb-5 max-w-3xl rounded-l-3xl rounded-br-3xl bg-base-200 p-2.5 leading-6">
        {props.children}
      </p>
      <div className="clear-right" />
    </>
  ) : (
    <></>
  );
};

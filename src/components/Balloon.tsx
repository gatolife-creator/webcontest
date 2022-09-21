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
        className="mask mask-circle w-16 mt-5 mb-5 float-left"
      />
      <p className="p-2 rounded-r-3xl rounded-bl-3xl max-w-3xl float-left ml-5 mt-5 mb-5 bg-base-200 leading-6">
        {props.children}
      </p>
      <div className="clear-left"></div>
    </>
  ) : direction === "right" ? (
    <>
      <img
        src="https://thumb.ac-illust.com/1b/1bfa58b9111cec87a2c8006cf89f0dba_t.jpeg"
        alt=""
        className="mask mask-circle w-16 mt-5 mb-5 float-right"
      />
      <p className="p-2 rounded-l-3xl rounded-br-3xl max-w-3xl float-right mr-5 mt-5 mb-5 bg-base-200 leading-6">
        {props.children}
      </p>
      <div className="clear-right"></div>
    </>
  ) : (
    <></>
  );
};

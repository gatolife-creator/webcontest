import React from "react";

export const Balloon = (props: {
  char: "nakamoto" | "node" | "ether" | "takahashi";
  children: React.ReactNode;
}) => {
  const { char } = props;
  return char === "node" ? (
    <>
      <img
        src={process.env.PUBLIC_URL + "/imgs/node-sensei.png"}
        alt=""
        className="mask mask-circle float-left mt-5 mb-5 w-12 sm:w-[68px]"
      />
      <p className="float-left my-5 ml-2 max-w-[75%] table-fixed rounded-3xl bg-base-200 p-2.5 px-4 leading-6 shadow-lg duration-200 hover:shadow-md">
        {props.children}
      </p>
      <div className="clear-left" />
    </>
  ) : char === "ether" ? (
    <>
      <img
        src={process.env.PUBLIC_URL + "/imgs/ether-kun.png"}
        alt=""
        className="mask mask-circle float-left mt-5 mb-5 w-12 sm:w-[68px]"
      />
      <p className="float-left my-5 ml-2 max-w-[75%] table-fixed rounded-3xl bg-base-200 p-2.5 px-4 leading-6 shadow-lg duration-200 hover:shadow-md">
        {props.children}
      </p>
      <div className="clear-left" />
    </>
  ) : char === "nakamoto" ? (
    <>
      <img
        src={process.env.PUBLIC_URL + "/imgs/nakamoto-kun.png"}
        alt=""
        className="mask mask-circle float-right mt-5 mb-5 w-12 sm:w-[68px]"
      />
      <p className="float-right my-5 mr-2 max-w-[75%] table-fixed rounded-3xl bg-base-200 p-2.5 px-4 leading-6 shadow-lg duration-200 hover:shadow-md">
        {props.children}
      </p>
      <div className="clear-right" />
    </>
  ) : char === "takahashi" ? (
    <>
      <img
        src={""}
        alt=""
        className="mask mask-circle float-left mt-5 mb-5 w-12 sm:w-[68px]"
      />
      <p className="float-left my-5 mr-2 max-w-[75%] table-fixed rounded-3xl bg-base-200 p-2.5 px-4 leading-6 shadow-lg duration-200 hover:shadow-md">
        {props.children}
      </p>
      <div className="clear-left"></div>
    </>
  ) : (
    <></>
  );
};

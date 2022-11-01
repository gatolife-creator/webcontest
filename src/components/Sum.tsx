import React from "react";

export const Sum = (props: { children: React.ReactNode }) => {
  return (
    <>
      <ol className="my-10 list-inside list-decimal bg-slate-300 p-5">
        {props.children}
      </ol>
    </>
  );
};

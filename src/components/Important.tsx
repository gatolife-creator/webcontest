import React from "react";

export const Important = (props: { children: React.ReactNode }) => {
  return (
    <span className="mark inline text-xl">
      <strong>{props.children}</strong>
    </span>
  );
};

//  underline decoration-yellow-300 decoration-8

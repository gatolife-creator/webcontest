import React from "react";

export const Important = (props: { children: React.ReactNode }) => {
  return (
    <span className="mark inline text-xl">
      <strong>{props.children}</strong>
    </span>
  );
};

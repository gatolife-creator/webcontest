import React from "react";

export const Important = (props: { children: React.ReactNode }) => {
  return (
    <mark>
      <strong>{props.children}</strong>
    </mark>
  );
};

import React from "react";

export const Important = (props: { children: React.ReactNode }) => {
  return (
    <div className="inline underline decoration-yellow-300 decoration-8 underline-offset-[-0.2em]">
      <strong>{props.children}</strong>
    </div>
  );
};

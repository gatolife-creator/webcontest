import React from "react";

export const MiniSectionTitle = (props: { children: React.ReactNode }) => {
  return (
    <h2 className="mt-32 mb-16 border-l-8 border-l-primary p-6 text-2xl font-bold shadow-lg">
      {props.children}
    </h2>
  );
};

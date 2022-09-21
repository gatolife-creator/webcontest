import React from "react";

export const SectionTitle = (props: { children: React.ReactNode }) => {
  return <h1 className="text-3xl font-bold mt-5 mb-10">{props.children}</h1>;
};

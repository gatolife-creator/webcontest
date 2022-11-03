import React from "react";

export const SubSectionTitle = (props: { children: React.ReactNode }) => {
  return (
    <h2 className="mt-32 mb-16 border-b-[1.5px] border-b-primary p-2 text-2xl font-bold">
      {props.children}
    </h2>
  );
};

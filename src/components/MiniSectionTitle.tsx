import React from "react";

export const MiniSectionTitle = (props: {children: React.ReactNode}) => {
    return <h2 className="text-2xl font-bold mt-5 mb-10 p-6 bg-base-300">{props.children}</h2>;
}
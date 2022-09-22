import React from "react";

export const MiniSectionTitle = (props: {children: React.ReactNode}) => {
    return <h2 className="text-2xl font-bold mt-32 mb-32 p-6 border-black border-l-2 border-b-2 border-dashed">{props.children}</h2>;
}
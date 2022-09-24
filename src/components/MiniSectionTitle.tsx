import React from "react";

export const MiniSectionTitle = (props: {children: React.ReactNode}) => {
    return <h2 className="text-2xl font-bold mt-32 mb-32 p-6 border-l-primary border-l-8">{props.children}</h2>;
}
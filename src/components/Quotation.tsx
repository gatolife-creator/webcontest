import React from "react";

export const Quotation = (props: {
  children: React.ReactNode;
  url: string;
}) => {
  const { children, url } = props;
  return (
    <div className="relative bg-primary p-10 mt-10 mb-10">
      <i className="bi bi-quote absolute top-5 left-5 text-2xl"></i>
      <blockquote className="font-bold">
        <p>{children}</p>
      </blockquote>
      <cite className="float-right">{url}</cite>
    </div>
  );
};

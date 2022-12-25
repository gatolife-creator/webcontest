import React from "react";

export const Image = (props: {
  src: string;
  caption?: string;
  style?: {};
  className?: string;
}) => {
  return (
    <figure className="relative m-auto w-fit">
      <img
        src={props.src}
        alt=""
        className={props.className ? props.className : "my-10 !max-h-[80vh]"}
        style={props.style || { boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, .3)" }}
      />
      {props.caption && (
        <caption className="absolute right-0 top-0 bg-slate-800 px-2 py-1 text-sm text-white opacity-80">
          {props.caption}
        </caption>
      )}
    </figure>
  );
};

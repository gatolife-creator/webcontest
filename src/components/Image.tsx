import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Image = (props: {
  src: string;
  caption?: string;
  style?: {};
  className?: string;
}) => {
  const lang = useRecoilValue(langState);
  return (
    <div className="relative">
      <Zoom>
        <img
          src={
            lang === "ja"
              ? props.src
              : lang === "en"
              ? props.src.replace(".png", "-en.png")
              : ""
          }
          alt=""
          className={
            props.className ? props.className : "mx-auto my-10 !max-h-[80vh]"
          }
          style={
            props.style || { boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, .3)" }
          }
        />
      </Zoom>
      {props.caption && (
        <p className="absolute right-0 top-0 bg-slate-800 px-2 py-1 text-sm text-white opacity-80">
          {props.caption}
        </p>
      )}
    </div>
  );
};

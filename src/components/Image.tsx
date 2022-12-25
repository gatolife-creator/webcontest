import React, { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

export const Image = (props: {
  src: string;
  caption?: string;
  style?: {};
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useDomEvent(useRef(window), "scroll", () => isOpen && setIsOpen(false));

  return (
    <div className={`image-container ${isOpen ? "open" : ""} my-10`}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="shade"
        onClick={() => setIsOpen(false)}
      />
      <motion.img
        src={props.src}
        alt=""
        className={props.className ? props.className : "mx-auto !max-h-[80vh]"}
        style={props.style || { boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, .3)" }}
        onClick={() => setIsOpen(!isOpen)}
        layout
        transition={transition}
      />
      {props.caption && isOpen === false && (
        <p className="absolute right-0 top-0 bg-slate-800 px-2 py-1 text-sm text-white opacity-80">
          {props.caption}
        </p>
      )}
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";

export const Main = (props: { children: React.ReactNode, duration?: "short" | "long" }) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: (props.duration === "long") ? 0.8 : (props.duration === "short") ? 0 : 0.25 }}
        className="mx-auto min-h-screen w-screen px-3 pt-32 pb-32 leading-7 z-50 font-semibold sm:px-[16%] sm:leading-10 bg-base-100"
        style={{ fontSize: "18px" }}
      >
        {props.children}
      </motion.main>
    </>
  );
};

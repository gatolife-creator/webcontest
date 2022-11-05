import React from "react";
import { motion } from "framer-motion";

export const Main = (props: { children: React.ReactNode }) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mx-auto mb-20 min-h-screen w-full px-3 pt-32 pb-10 leading-7 z-50 font-semibold sm:px-[20%] sm:leading-10 bg-base-100"
        style={{ fontSize: "18px" }}
      >
        {props.children}
      </motion.main>
    </>
  );
};

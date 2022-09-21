import React from "react";
import { motion } from "framer-motion";

export const Main = (props: { children: React.ReactNode }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto pt-32 pb-10 leading-10"
      style={{ fontSize: "18px" }}
    >
      {props.children}
    </motion.main>
  );
};

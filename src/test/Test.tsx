import React from "react";
import { motion } from "framer-motion";
import { OptionalHash } from "../sample/hash/OptionalHash";
import { Drawer } from "../components/Drawer";

export const Test = () => {
  return (
    <Drawer>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <OptionalHash />
      </motion.main>
    </Drawer>
  );
};

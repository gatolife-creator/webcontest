import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Drawer } from "../components/Drawer";

export const Home = () => {
  return (
    <>
      <Drawer>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button type="button" className="btn btn-primary btn-outline">
            ボタン
          </button>
          <Link to="/content?chapter=2&section=1">C2S1</Link>
          <Link to="/test">test</Link>
        </motion.main>
      </Drawer>
    </>
  );
};

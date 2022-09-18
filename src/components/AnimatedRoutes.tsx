import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Content } from "../pages/Content";
import { Test } from "../test/Test";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Route } from "react-router-dom";

import { ScrollTop } from "./ScrollTop";
import { Home } from "../pages/Home";
import { Content } from "../pages/Content";
import { Sitemap } from "../pages/Sitemap";
import { Reference } from "../pages/Reference";
import { Endroll } from "../pages/Endroll";
import { Test } from "../test/Test";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <ScrollTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/index.html" element={<Home />}></Route>
        <Route path="/content.html" element={<Content />}></Route>
        <Route path="/sitemap.html" element={<Sitemap />}></Route>
        <Route path="/reference.html" element={<Reference />}></Route>
        <Route path="/endroll.html" element={<Endroll />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

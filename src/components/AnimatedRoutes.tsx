import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Route } from "react-router-dom";

import { ScrollTop } from "./ScrollTop";
import { Home } from "../pages/Home";
import { Content } from "../pages/Content";
import { Sitemap } from "../pages/Sitemap";
import { Reference } from "../pages/Reference";
import { Test } from "../test/Test";
import { Conclude } from "../pages/Conclude";
import { NotFound } from "../pages/NotFound";

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
        <Route path="/conclude.html" element={<Conclude />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

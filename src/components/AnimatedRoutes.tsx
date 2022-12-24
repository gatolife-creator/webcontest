import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { ScrollTop } from "./ScrollTop";
import { Home } from "../pages/Home";
import { Content } from "../pages/Content";
import { Sitemap } from "../pages/Sitemap";
import { Reference } from "../pages/Reference";
import { Test } from "../test/Test";
import { Conclude } from "../pages/Conclude";
import { Creators } from "../pages/Creators";
import { Status } from "../pages/Status";
import { BlockchainSamplePage } from "../pages/BlockchainSamplePage";
import { Info } from "../pages/Info";
import { Activity } from "../pages/Activity";
import { NotFound } from "../pages/NotFound";
import { HowToUse } from "../pages/HowToUse";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <RecoilRoot>
      <AnimatePresence mode="wait">
        <ScrollTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/index.html" element={<Home />}></Route>
          <Route path="/how-to-use.html" element={<HowToUse />}></Route>
          <Route path="/content.html" element={<Content />}></Route>
          <Route path="/sitemap.html" element={<Sitemap />}></Route>
          <Route path="/reference.html" element={<Reference />}></Route>
          <Route path="/conclude.html" element={<Conclude />}></Route>
          <Route path="/creators.html" element={<Creators />}></Route>
          <Route path="/info.html" element={<Info />}></Route>
          <Route path="/activity.html" element={<Activity />}></Route>
          <Route path="/status.html" element={<Status />}></Route>
          <Route
            path="/blockchain-sample.html"
            element={<BlockchainSamplePage />}
          ></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AnimatePresence>
    </RecoilRoot>
  );
};

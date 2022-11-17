import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Drawer = (props: { children: React.ReactNode }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto">
        <div id="scroll-target"></div>
        <Navbar />
        {props.children}
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
};

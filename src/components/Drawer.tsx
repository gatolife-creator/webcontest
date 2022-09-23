import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Drawer = (props: { children: React.ReactNode }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div id="scroll-target"></div>
        <Navbar />
        {props.children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/" className="font-bold">
              ホーム
            </Link>
          </li>
          <li>
            <Link to="/content.html?chapter=1&section=0" className="font-bold">
              第一章
            </Link>
          </li>
          <li>
            <Link to="/content.html?chapter=2&section=0" className="font-bold">
              第二章
            </Link>
          </li>
          <li>
            <Link to="/content.html?chapter=3&section=0" className="font-bold">
              第三章
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

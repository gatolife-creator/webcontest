import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Drawer = (props: { children: React.ReactNode }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/content?chapter=1&section=0">第一章</Link>
          </li>
          <li>
            <Link to="/content?chapter=2&section=0">第二章</Link>
          </li>
          <li>
            <Link to="/content?chapter=3&section=0">第三章</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

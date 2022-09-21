import React from "react";
import { Link } from "react-router-dom";

export const Drawer = (props: { children: React.ReactNode }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300 fixed top-0 left-0 z-50">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-xl">ブロックチェーン入門</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
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
        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
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

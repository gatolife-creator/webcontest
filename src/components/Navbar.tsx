import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Notification } from "./Notification";

export const Navbar = () => {
  // FIXME 本来配列に格納する必要はないので、要改善。
  const [notifications, setNotifications] = useState<JSX.Element[]>([]);
  const onHandleClick = () => {
    const notification = (
      <Notification
        text="English version is not ready."
        time={4000}
      ></Notification>
    );
    setNotifications([...notifications, notification]);
  };

  return (
    <>
      <div className="navbar fixed top-0 left-0 z-50 bg-primary drop-shadow-lg">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
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
        <div className="mx-auto hidden flex-none lg:block">
          <ul className="menu menu-horizontal">
            {/* <!-- Navbar menu content here --> */}
            <li>
              <Link to="/" className="font-bold">
                ホーム
              </Link>
            </li>
            <li>
              <Link
                to="/content.html?chapter=1&section=0"
                className="font-bold"
              >
                ブロックチェーンとは
              </Link>
            </li>
            <li>
              <Link
                to="/content.html?chapter=2&section=0"
                className="font-bold"
              >
                基礎技術
              </Link>
            </li>
            <li>
              <Link
                to="/content.html?chapter=3&section=0"
                className="font-bold"
              >
                仕組み
              </Link>
            </li>
            <li>
              <Link
                to="/content.html?chapter=4&section=0"
                className="font-bold"
              >
                活用例
              </Link>
            </li>
            <li>
              <Link
                to="/content.html?chapter=5&section=0"
                className="font-bold"
              >
                ブロックチェーンの今後
              </Link>
            </li>
          </ul>
        </div>
        <div className="fixed top-2 right-2 hidden flex-none lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <Link to="/sitemap.html" className="font-bold">
                サイトマップ
              </Link>
            </li>
            <li>
              <button className="font-bold" onClick={() => onHandleClick()}>
                EN
              </button>
            </li>
          </ul>
        </div>
      </div>
      {notifications.map((notification) => notification)}
    </>
  );
};

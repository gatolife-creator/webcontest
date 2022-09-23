import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full navbar bg-primary fixed top-0 left-0 z-50 drop-shadow-lg">
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

      <div className="flex-none mx-auto hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* <!-- Navbar menu content here --> */}
          <li>
            <Link to="/" className="font-bold">
              ホーム
            </Link>
          </li>
          <li>
            <Link to="/content.html?chapter=1&section=0" className="font-bold">
              ブロックチェーン
            </Link>
          </li>
          <li>
            <Link to="/content.html?chapter=2&section=0" className="font-bold">
              仮想通貨
            </Link>
          </li>
          <li>
            <Link to="/content.html?chapter=3&section=0" className="font-bold">
              ブロックチェーンの今後
            </Link>
          </li>
        </ul>
      </div>
      <div className="fixed top-2 right-2 flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/sitemap.html" className="font-bold">
              サイトマップ
            </Link>
          </li>
          <li>
            <Link to="#" className="font-bold">EN</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

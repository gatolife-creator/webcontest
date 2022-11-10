import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu w-80 overflow-y-auto bg-primary p-4">
        <li>
          <Link to="/" className="font-bold">
            ホーム
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=1&section=0" className="font-bold">
            ブロックチェーンとは
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=2&section=0" className="font-bold">
            基礎技術
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=3&section=0" className="font-bold">
            仕組み
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=4&section=0" className="font-bold">
            活用例
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=5&section=0" className="font-bold">
            ブロックチェーンの今後
          </Link>
        </li>
      </ul>
    </div>
  );
};

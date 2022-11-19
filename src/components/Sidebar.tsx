import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Notification } from "./Notification";

export const Sidebar = () => {
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
            企業の取り組み
          </Link>
        </li>
        <li>
          <Link to="/status.html" className="font-bold">
            進捗
          </Link>
        </li>

        <div className="mt-auto">
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
        </div>
      </ul>
      {notifications.map((notification, index) => (
        <React.Fragment key={index}>{notification}</React.Fragment>
      ))}
    </div>
  );
};

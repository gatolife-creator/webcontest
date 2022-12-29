import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Notification } from "./Notification";
import { useRecoilState, useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Sidebar = () => {
  const [notifications, setNotifications] = useState<JSX.Element[]>([]);
  const lang = useRecoilValue(langState);

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
            {lang === "ja" && "ホーム"}
            {lang === "en" && "Home"}
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=1&section=0" className="font-bold">
            {lang === "ja" && "ブロックチェーンとは"}
            {lang === "en" && "About Blockchain"}
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=2&section=0" className="font-bold">
            {lang === "ja" && "基礎技術"}
            {lang === "en" && "Basic Technology"}
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=3&section=0" className="font-bold">
            {lang === "ja" && "仕組み"}
            {lang === "en" && "Mechanism"}
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=4&section=0" className="font-bold">
            {lang === "ja" && "活用例"}
            {lang === "en" && "Usage"}
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=5&section=0" className="font-bold">
            {lang === "ja" && "企業の取り組み"}
            {lang === "en" && "Companies"}
          </Link>
        </li>
        <li>
          <Link to="/status.html" className="font-bold">
            {lang === "ja" && "進捗度"}
            {lang === "en" && "Progress"}
          </Link>
        </li>

        <div className="mt-auto">
          <li>
            <Link to="/sitemap.html" className="font-bold">
              {lang === "ja" && "サイトマップ"}
              {lang === "en" && "Site Map"}
            </Link>
          </li>
          <li>
            <button className="font-bold" onClick={() => onHandleClick()}>
              {lang === "ja" ? "EN" : lang === "en" ? "JA" : ""}
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

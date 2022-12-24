import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Notification } from "./Notification";
import useLocalStorage from "../blockchain/hooks/useLocalStorage";
import { useRecoilState } from "recoil";
import { langState } from "../atom"

export const Navbar = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const chapter = Number(query.get("chapter"));
  // FIXME 本来配列に格納する必要はないので、要改善。
  const [notifications, setNotifications] = useState<JSX.Element[]>([]);
  const [lang, setLanguage] = useRecoilState(langState);
  // const [lang, setLanguage] = useLocalStorage<"ja" | "en">("lang", "ja");

  const onHandleClick = () => {
    let notification: JSX.Element;
    if (lang === "ja") {
      setLanguage("en");
      notification = (
        <Notification text="Switched to English." time={4000}></Notification>
      );
      setNotifications([...notifications, notification]);
    } else if (lang === "en") {
      setLanguage("ja");
      notification = (
        <Notification text="日本語に変更しました。" time={4000}></Notification>
      );
      setNotifications([...notifications, notification]);
    }
  };

  return (
    <>
      <div className="navbar fixed top-0 left-0 z-50 h-[68px] bg-primary drop-shadow-lg">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
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
              {location.pathname === "/" ? (
                <Link to="/" className="bg-primary-focus font-bold">
                  {lang === "ja" && "ホーム"}
                  {lang === "en" && "Home"}
                </Link>
              ) : (
                  <Link to="/" className="font-bold">
                    {lang === "ja" && "ホーム"}
                    {lang === "en" && "Home"}
                  </Link>
                )}
            </li>
            <li>
              {chapter === 1 ? (
                <Link
                  to="/content.html?chapter=1&section=0"
                  className="bg-primary-focus font-bold"
                >
                  {lang === "ja" && "ブロックチェーンとは"}
                  {lang === "en" && "About Blockchain"}
                </Link>
              ) : (
                  <Link
                    to="/content.html?chapter=1&section=0"
                    className="font-bold"
                  >
                    {lang === "ja" && "ブロックチェーンとは"}
                    {lang === "en" && "About Blockchain"}
                  </Link>
                )}
            </li>

            <li>
              {chapter === 2 ? (
                <Link
                  to="/content.html?chapter=2&section=0"
                  className="bg-primary-focus font-bold"
                >
                  {lang === "ja" && "基礎技術"}
                  {lang === "en" && "Basic Technology"}
                </Link>
              ) : (
                  <Link
                    to="/content.html?chapter=2&section=0"
                    className="font-bold"
                  >
                    {lang === "ja" && "基礎技術"}
                    {lang === "en" && "Basic Technology"}
                  </Link>
                )}
            </li>

            <li>
              {chapter === 3 ? (
                <Link
                  to="/content.html?chapter=3&section=0"
                  className="bg-primary-focus font-bold"
                >
                  {lang === "ja" && "仕組み"}
                  {lang === "en" && "Mechanism"}
                </Link>
              ) : (
                  <Link
                    to="/content.html?chapter=3&section=0"
                    className="font-bold"
                  >
                    {lang === "ja" && "仕組み"}
                    {lang === "en" && "Mechanism"}
                  </Link>
                )}
            </li>

            <li>
              {chapter === 4 ? (
                <Link
                  to="/content.html?chapter=4&section=0"
                  className="bg-primary-focus font-bold"
                >
                  {lang === "ja" && "活用例"}
                  {lang === "en" && "Usage"}
                </Link>
              ) : (
                  <Link
                    to="/content.html?chapter=4&section=0"
                    className="font-bold"
                  >
                    {lang === "ja" && "活用例"}
                    {lang === "en" && "Usage"}
                  </Link>
                )}
            </li>

            <li>
              {chapter === 5 ? (
                <Link
                  to="/content.html?chapter=5&section=0"
                  className="bg-primary-focus font-bold"
                >
                  {lang === "ja" && "企業の取り組み"}
                  {lang === "en" && "Companies"}
                </Link>
              ) : (
                  <Link
                    to="/content.html?chapter=5&section=0"
                    className="font-bold"
                  >
                    {lang === "ja" && "企業の取り組み"}
                    {lang === "en" && "Companies"}
                  </Link>
                )}
            </li>
            <li>
              {location.pathname === "/status.html" ? (
                <Link to="/status.html" className="bg-primary-focus font-bold">
                  {lang === "ja" && "進捗度"}
                  {lang === "en" && "Progress"}
                </Link>
              ) : (
                  <Link to="/status.html" className="font-bold">
                    {lang === "ja" && "進捗度"}
                    {lang === "en" && "Progress"}
                  </Link>
                )}
            </li>
          </ul>
        </div>

        <div className="fixed top-2.5 right-2 hidden flex-none lg:block">
          <ul className="menu menu-horizontal">
            <li>
              {location.pathname === "/sitemap.html" ? (
                <Link to="/sitemap.html" className="bg-primary-focus font-bold">
                  {lang === "ja" && "サイトマップ"}
                  {lang === "en" && "Site Map"}
                </Link>
              ) : (
                  <Link to="/sitemap.html" className="font-bold">
                    {lang === "ja" && "サイトマップ"}
                    {lang === "en" && "Site Map"}
                  </Link>
                )}
            </li>
            <li>
              <button className="font-bold" onClick={() => onHandleClick()}>
                {lang === "ja" ? "EN" : lang === "en" ? "JA" : ""}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {notifications.map((notification, index) => (
        <React.Fragment key={index}>{notification}</React.Fragment>
      ))}
    </>
  );
};

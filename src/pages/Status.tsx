import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";

import { quizProgress } from "../common";
import { Certificate } from "../components/Certificate";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Status = () => {
  const lang = useRecoilValue(langState);
  return (
    <Drawer>
      <Main>
        <MiniSectionTitle>
          {lang === "ja" && "進捗度"}
          {lang === "en" && "Progress"}
        </MiniSectionTitle>
        <ul className="steps steps-vertical lg:steps-horizontal">
          {quizProgress[0] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=1&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "ブロックチェーンとは"}
                {lang === "en" && "About Blockchain"}
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=1&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "ブロックチェーンとは"}
                {lang === "en" && "About Blockchain"}
              </Link>
            </li>
          )}
          {quizProgress[1] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=2&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "基本技術"}
                {lang === "en" && "Basic Tech"}
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=2&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "基本技術"}
                {lang === "en" && "Basic Tech"}
              </Link>
            </li>
          )}
          {quizProgress[2] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=3&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "仕組み"}
                {lang === "en" && "Mechanism"}
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=3&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "仕組み"}
                {lang === "en" && "Mechanism"}
              </Link>
            </li>
          )}
          {quizProgress[3] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=4&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "活用例"}
                {lang === "en" && "Usage"}
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=4&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "活用例"}
                {lang === "en" && "Usage"}
              </Link>
            </li>
          )}
          {quizProgress[4] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=5&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "企業の取り組み"}
                {lang === "en" && "Companies"}
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=5&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "企業の取り組み"}
                {lang === "en" && "Companies"}
              </Link>
            </li>
          )}
          {quizProgress[5] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=6&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "総まとめ"}
                {lang === "en" && "Conclusion"}
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=6&section=0"
                className="hover:underline"
              >
                {lang === "ja" && "総まとめ"}
                {lang === "en" && "Conclusion"}
              </Link>
            </li>
          )}
        </ul>
        <div className="mx-auto text-center">
          {quizProgress.every((value: boolean) => value === true) ? (
            <label
              className="btn-primary btn-lg btn mt-10"
              htmlFor="my-modal-5"
            >
              {lang === "ja" && "認定証を受け取る"}
              {lang === "en" && "Receive"}
            </label>
          ) : (
            <button className="btn-disabled btn-primary btn-lg btn mt-10">
              {lang === "ja" && "認定証を受け取る"}
              {lang === "en" && "Receive"}
            </button>
          )}
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="text-center text-2xl font-bold">
              {lang === "ja" && "認定証"}
              {lang === "en" && "Certificate"}
            </h3>
            <div className="form-control mx-auto">
              <Certificate />
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                {lang === "ja" && "閉じる"}
                {lang === "en" && "Close"}
              </label>
            </div>
          </div>
        </div>
      </Main>
    </Drawer>
  );
};

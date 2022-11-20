import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";

import { quizProgress } from "../common";
import { Certificate } from "../components/Certificate";
import { MiniSectionTitle } from "../components/MiniSectionTitle";

export const Status = () => {
  return (
    <Drawer>
      <Main>
        <MiniSectionTitle>進捗度</MiniSectionTitle>
        <ul className="steps steps-vertical lg:steps-horizontal">
          {quizProgress[0] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=1&section=0"
                className="hover:underline"
              >
                ブロックチェーンとは
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=1&section=0"
                className="hover:underline"
              >
                ブロックチェーンとは
              </Link>
            </li>
          )}
          {quizProgress[1] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=2&section=0"
                className="hover:underline"
              >
                基本技術
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=2&section=0"
                className="hover:underline"
              >
                基本技術
              </Link>
            </li>
          )}
          {quizProgress[2] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=3&section=0"
                className="hover:underline"
              >
                仕組み
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=3&section=0"
                className="hover:underline"
              >
                仕組み
              </Link>
            </li>
          )}
          {quizProgress[3] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=4&section=0"
                className="hover:underline"
              >
                活用例
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=4&section=0"
                className="hover:underline"
              >
                活用例
              </Link>
            </li>
          )}
          {quizProgress[4] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=5&section=0"
                className="hover:underline"
              >
                企業の取り組み
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=5&section=0"
                className="hover:underline"
              >
                企業の取り組み
              </Link>
            </li>
          )}
          {quizProgress[5] ? (
            <li className="step-primary step before:!bg-primary">
              <Link
                to="/content.html?chapter=6&section=0"
                className="hover:underline"
              >
                総まとめ
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=6&section=0"
                className="hover:underline"
              >
                総まとめ
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
              認定証を受け取る
            </label>
          ) : (
            <button className="btn-disabled btn-primary btn-lg btn mt-10">
              認定証を受け取る
            </button>
          )}
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="text-center text-2xl font-bold">認定証</h3>
            <div className="form-control mx-auto">
              <Certificate />
            </div>
            {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                閉じる
              </label>
            </div>
          </div>
        </div>
      </Main>
    </Drawer>
  );
};

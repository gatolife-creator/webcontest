import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";

import { quizProgress } from "../common";

export const Status = () => {
  return (
    <Drawer>
      <Main>
        <ul className="steps steps-vertical lg:steps-horizontal">
          {quizProgress[0] ? (
            <li className="step-primary step">
              <Link
                to="/content.html?chapter=1&section=0"
                className="hover:underline"
              >
                ブロックチェーンとは
              </Link>
            </li>
          ) : (
            <li className="step-secondary step">
              <Link
                to="/content.html?chapter=1&section=0"
                className="hover:underline"
              >
                ブロックチェーンとは
              </Link>
            </li>
          )}
          {quizProgress[1] ? (
            <li className="step-primary step">
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
            <li className="step-primary step">
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
            <li className="step-primary step">
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
            <li className="step-primary step">
              <Link
                to="/content.html?chapter=5&section=0"
                className="hover:underline"
              >
                ブロックチェーンの今後
              </Link>
            </li>
          ) : (
            <li className="step-secondary step before:!bg-secondary">
              <Link
                to="/content.html?chapter=5&section=0"
                className="hover:underline"
              >
                ブロックチェーンの今後
              </Link>
            </li>
          )}
        </ul>
      </Main>
    </Drawer>
  );
};

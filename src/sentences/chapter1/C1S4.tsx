// TODO ブロックチェーンの長所を解説することは絶対条件なので、以下の文を参考に修正する。

import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Sum } from "../../components/Sum";
import { Quiz, QuizGame } from "../../components/QuizGame";
import { Important } from "../../components/Important";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const quizzes: Quiz[] = [
  {
    question: "ブロックチェーンはいつ誕生した？",
    options: [
      "ビットコインが誕生したとき",
      "イーサリアムが誕生したとき",
      "インターネットが誕生したとき",
    ],
    answer: "ビットコインが誕生したとき",
  },
  {
    question: "ブロックチェーンは何の仕組みの一つ？",
    options: ["データを保存する仕組み", "データを暗号化する仕組み"],
    answer: "データを保存する仕組み",
  },
  {
    question: "ブロックチェーンの特徴として正しいものは？",
    options: [
      "改ざんが難しい＆不特定多数で管理される",
      "個人情報が漏れない",
      "カッコいい",
    ],
    answer: "改ざんが難しい＆不特定多数で管理される",
  },
];
export const C1S4 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>
          {lang === "ja" && "まとめ"}
          {lang === "en" && "Summary"}
        </MiniSectionTitle>
        <Balloon char="node">
          {lang === "ja" && "それでは、これまでの解説を復習するぞ。"}
          {lang === "en" && "Let's review the explanations we've given so far."}
        </Balloon>
        <Sum>
          {lang === "ja" && (
            <>
              <li>
                ブロックチェーンは、
                <Important>ビットコインと共に誕生</Important>
                した。
              </li>
              <li>
                ブロックチェーンは、
                <Important>データを保存する仕組みの一つ</Important>である。
              </li>
              <li>
                ブロックチェーン上のデータは、
                <Important>改ざんするのが難しい</Important>
              </li>
              <li>
                ブロックチェーン上のデータは、
                <Important>不特定多数によって管理</Important>される。
              </li>
              <li>
                ブロックチェーン上のデータは、
                <Important>誰もが閲覧可能</Important>
                である。
              </li>
              <li>
                イーサリアムは、<Important>プログラムの保存・実行</Important>
                ができる。
              </li>
            </>
          )}
          {lang === "en" && (
            <>
              <li>
                Blockchain was <Important>created with Bitcoin.</Important>
              </li>
              <li>
                Blockchain is{" "}
                <Important>a mechanism for storing data.</Important>
              </li>
              <li>
                Data on blockchain is{" "}
                <Important>difficult to tamper with.</Important>
              </li>
              <li>
                Data on blockchain is controlled by{" "}
                <Important>an unspecified number of people.</Important>
              </li>
              <li>
                Data on blockchain can be{" "}
                <Important>viewed by anyone.</Important>
              </li>
              <li>
                Ethereum can <Important>store and execute programs.</Important>
              </li>
            </>
          )}
        </Sum>
        <Balloon char="node">
          {lang === "ja" &&
            "特に3〜5番はブロックチェーンの長所として、さまざまな分野に応用されるから、しっかりと覚えておくように。"}
          {lang === "en" &&
            "Especially number 3-5 are the advantages of blockchain, and they apply to many different fields, so make sure you keep them in mind."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "任せてください！"}
          {lang === "en" && "You got it!"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "じゃあお約束のクイズの時間だ。"}
          {lang === "en" && "Then it's time for the quiz."}
        </Balloon>
        <QuizGame quizzes={quizzes} chapter={1}></QuizGame>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

// TODO ブロックチェーンの長所を解説することは絶対条件なので、以下の文を参考に修正する。

import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Sum } from "../../components/Sum";
import { Quiz, QuizGame } from "../../components/QuizGame";

export const C1S4 = () => {
  const quizzes: Quiz[] = [
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
  return (
    <>
      <Main>
        <MiniSectionTitle>まとめ</MiniSectionTitle>

        <Sum>適当</Sum>
        <QuizGame quizzes={quizzes}></QuizGame>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

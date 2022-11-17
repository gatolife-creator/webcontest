// TODO ブロックチェーンの長所を解説することは絶対条件なので、以下の文を参考に修正する。

import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Sum } from "../../components/Sum";
import { Quiz, QuizGame } from "../../components/QuizGame";
import { Important } from "../../components/Important";

export const C1S5 = () => {
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
      <Main duration="long">
        <MiniSectionTitle>まとめ</MiniSectionTitle>
        <Balloon char="node">それでは、これまでの解説を復習するぞ。</Balloon>
        <Sum>
          <li>
            ブロックチェーンは、<Important>ビットコインと共に誕生</Important>
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
            ブロックチェーン上のデータは、<Important>誰もが閲覧可能</Important>
            である。
          </li>
          <li>
            イーサリアムは、<Important>プログラムの保存・実行</Important>
            ができる。
          </li>
        </Sum>
        <Balloon char="node">
          特に3〜5番はブロックチェーンの長所として、さまざまな分野に応用されるから、しっかりと覚えておくように。
        </Balloon>
        <Balloon char="satoshi">任せてください！</Balloon>
        <Balloon char="node">じゃあお約束のクイズの時間だ。</Balloon>
        <QuizGame quizzes={quizzes} chapter={1}></QuizGame>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

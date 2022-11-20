import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Sum } from "../../components/Sum";
import { Important } from "../../components/Important";
import { QuizGame, Quiz } from "../../components/QuizGame";

export const quizzes: Quiz[] = [
  {
    question: "Peer to Peerの長所は？",
    options: [
      "システムダウンしにくい",
      "ハッキングされずらい",
      "盗聴されずらい",
    ],
    answer: "システムダウンしにくい",
  },
  {
    question: "改ざん検知に活用されるものは？",
    options: ["ハッシュ関数", "ラッシュ関数", "ダッシュ関数", "ヘッシュ関数"],
    answer: "ハッシュ関数",
  },
  {
    question: "公開鍵暗号方式の暗号化・復号化の手順は？",
    options: [
      "公開鍵で暗号化→秘密鍵で復号化",
      "秘密鍵で暗号化→公開鍵で復号化",
    ],
    answer: "公開鍵で暗号化→秘密鍵で復号化",
  },
  {
    question: "デジタル署名の長所は？",
    options: [
      "否認を防止できる",
      "犯罪を防止できる",
      "有名人の直筆サインがもらえる",
    ],
    answer: "否認を防止できる",
  },
];
export const C2S5 = () => {

  return (
    <Main duration="long">
      <MiniSectionTitle>まとめ</MiniSectionTitle>
      <Sum>
        <li>
          <Important>Peer to Peer</Important>は、
          <Important>システムダウンに強い</Important>。
        </li>
        <li>
          <Important>ハッシュ関数</Important>は、
          <Important>改ざん検知</Important>
          などに使われる。
        </li>
        <li>
          <Important>公開鍵暗号方式</Important>は、
          <Important>鍵配送問題を解決</Important>する。
        </li>
        <li>
          <Important>デジタル署名</Important>は、
          <Important>否認を防止</Important>する
        </li>
      </Sum>
      <Balloon char="node">以上のことを抑えておこう。</Balloon>
      <Balloon char="node">
        さて、今回もクイズを出すから、ブロックチェーンの基礎技術について理解できているか、確かめてみよう！
      </Balloon>
      <QuizGame quizzes={quizzes} chapter={2}></QuizGame>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

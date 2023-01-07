import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Quiz, QuizGame } from "../../components/QuizGame";
import { Balloon } from "../../components/Balloon";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const quizzes: Quiz[] = [
  {
    question: "ゲームによって、NFTなどのデジタル資産を稼ぐことを何というか？",
    options: ["Play to Earn", "Trick or Treat", "Sleep to Earn"],
    answer: "Play to Earn",
  },
  {
    question: "ブロックチェーンを電力取引で使うメリット",
    options: [
      "個人間の電力取引がしやすくなる",
      "大量の電力を供給できる",
      "節電できる",
    ],
    answer: "個人間の電力取引がしやすくなる",
  },
  {
    question: "プライベートチェーンとは？",
    options: [
      "許可制のブロックチェーン",
      "休日に使うブロックチェーン",
      "自分だけのブロックチェーン",
    ],
    answer: "許可制のブロックチェーン",
  },
];

export const C5S5 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>まとめ</MiniSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "double jump.tokyo様、chaintope様。お忙しいなかインタビューに答えてくださり、ありがとうございました。"}
      </Balloon>
      <Balloon char="ether">ありがとうございました。</Balloon>
      <Balloon char="node">ありがとうございました！</Balloon>

      <Balloon char="nakamoto">
        ゲームや電力取引、サプライチェーン。僕たちの知らない間に、ブロックチェーンの実用化が始まっていたんですね。
      </Balloon>

      <QuizGame quizzes={quizzes} chapter={5} />

      <Pager direction="back" />
      <Pager direction="forward" text="総まとめ" />
    </Main>
  );
};

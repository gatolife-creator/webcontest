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

export const quizzesEN: Quiz[] = [
  {
    question:
      "What is the term for earning NFT or other digital assets by gaming?",
    options: ["Play to Earn", "Sleep to Earn", "Trick or Treat"],
    answer: "Play to Earn",
  },
  {
    question: "What is the advantage of using Blockchain in Power Trading?",
    options: [
      "Makes it easier to trade power between individuals",
      "It can save electricity",
      "Can supply large amounts of power",
    ],
    answer: "Makes it easier to trade power between individuals",
  },
  {
    question: "What is a private chain?",
    options: [
      "Permission-based blockchain",
      "Your own private blockchain",
      "A blockchain used for holidays",
    ],
    answer: "Permission-based blockchain",
  },
];

export const C5S5 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "まとめ"}
        {lang === "en" && "Summary"}
      </MiniSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "double jump.tokyo様、chaintope様。お忙しいなかインタビューに答えてくださり、ありがとうございました。"}
        {lang === "en" &&
          "We thank double jump.tokyo and chaintope for taking time out to answer our questions."}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" && "ありがとうございました。"}
        {lang === "en" && "Thank you very much."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && "ありがとうございました！"}
        {lang === "en" && "Thank you very much!"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "ゲームや電力取引、サプライチェーン。僕たちの知らない間に、ブロックチェーンの実用化が始まっていたんですね。"}
        {lang === "en" &&
          "We were unaware that blockchain had already started to be put to practical use such as games, power trading, supply chain."}
      </Balloon>

      <QuizGame quizzes={lang === "ja" ? quizzes : quizzesEN} chapter={5} />

      <Pager direction="back" />
      <Pager direction="forward" text="総まとめ" />
    </Main>
  );
};

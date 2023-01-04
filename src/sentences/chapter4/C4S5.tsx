import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Balloon } from "../../components/Balloon";
import { Quiz, QuizGame } from "../../components/QuizGame";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const quizzes: Quiz[] = [
  {
    question: "スマート・コントラクトとは？",
    options: [
      "ブロックチェーン上でプログラムを実行するもの",
      "適切な契約をしてくれるもの",
    ],
    answer: "ブロックチェーン上でプログラムを実行するもの",
  },
  {
    question: "NFTは何の略？",
    options: ["Non-Fungible Token", "Not Funny Talk", "Nonfiction, true."],
    answer: "Non-Fungible Token",
  },
  {
    question: "メタバースとは？",
    options: [
      "インターネット上の3D仮想空間",
      "ニュータイプの3Dゲーム",
      "ブロックチェーンの別名",
    ],
    answer: "インターネット上の3D仮想空間",
  },
];

export const C4S5 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>
          {lang === "ja" && "まとめ"}
          {lang === "en" && "Summary"}
        </MiniSectionTitle>
        <Balloon char="nakamoto">
          {lang === "ja" && "いやぁ、ブロックチェーンってすごいですね。"}
          {lang === "en" && "Wow, blockchain is amazing."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "金融やNFT、さらにはメタバースにまで活用できるなんて...。"}
          {lang === "en" &&
            "I can't believe it can be used for finance, NFT, and even metaverse...."}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && "ブロックチェーンは他にも様々なことに活用できる。"}
          {lang === "en" && "Blockchain can be used for many other things."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "次の講義では企業の取り組みについて見ていく。さらなる活用例を紹介するから、楽しみにしていてくれ。"}
          {lang === "en" &&
            "In the next lecture, we will look at corporate initiatives. I'll show you some examples of further applications, so look forward to it."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "はいっ！"}
          {lang === "en" && "Yes, sir!"}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" &&
            "それでは今回の講義の内容が理解できているか、テストをしてみよう。"}
          {lang === "en" &&
            "Let's test your understanding of the content of this lecture."}
        </Balloon>
        <QuizGame quizzes={quizzes} chapter={4}></QuizGame>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

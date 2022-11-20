import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Balloon } from "../../components/Balloon";
import { Quiz, QuizGame } from "../../components/QuizGame";

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
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>まとめ</MiniSectionTitle>
        <Balloon char="nakamoto">
          いやぁ、ブロックチェーンってすごいですね。
        </Balloon>
        <Balloon char="nakamoto">
          金融やNFT、さらにはメタバースにまで活用できるなんで...。
        </Balloon>

        <Balloon char="node">
          ブロックチェーンは他にも様々なことに活用できる。
        </Balloon>
        <Balloon char="node">
          次の講義では企業の取り組みについて見ていく。さらなる活用例を紹介するから、楽しみにしていてくれ。
        </Balloon>
        <Balloon char="nakamoto">はいっ！</Balloon>

        <Balloon char="node">
          それでは今回の講義の内容が理解できているか、テストをしてみよう。
        </Balloon>
        <QuizGame quizzes={quizzes} chapter={4}></QuizGame>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

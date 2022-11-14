import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Quiz, QuizGame } from "../../components/QuizGame";

export const C5S6 = () => {
  const quizzes: Quiz[] = [
    {
      question: "ブロックチェーンを金融に活用するメリットは？",
      options: ["中間搾取が防止できる", "個人情報流出が防止できる"],
      answer: "中間搾取が防止できる",
    },
  ];
  return (
    <Main>
      <MiniSectionTitle>まとめ</MiniSectionTitle>

      <QuizGame quizzes={quizzes} chapter={5} />

      <Pager direction="back" />
      <Pager direction="forward" text="参考文献" link="/reference.html" />
    </Main>
  );
};

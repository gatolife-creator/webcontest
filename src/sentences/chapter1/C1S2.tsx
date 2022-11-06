import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { OptionalHash } from "../../sample/hash/OptionalHash";
import { Sum } from "../../components/Sum";

import { Quiz } from "../../components/QuizGame";
import { QuizGame } from "../../components/QuizGame";

export const C1S2 = () => {
  const quizzes: Quiz[] = [
    {
      question: "改ざん検知や認証システムに活用されるものは？",
      options: ["バッシュ関数", "ラッシュ関数", "ハッシュ関数", "ダッシュ関数"],
      answer: "ハッシュ関数",
    },
    {
      question: "P2Pの利点は？",
      options: ["システムダウンしにくい", "ハッキングされづらい"],
      answer: "システムダウンしにくい",
    },
  ];

  return (
    <Main>
      <MiniSectionTitle>ブロックチェーンの歴史</MiniSectionTitle>

      <Pager
        direction="back"
        text="第一節"
        link="/content.html?chapter=1&section=1"
      />
      <Pager
        direction="forward"
        text="第三節"
        link="/content.html?chapter=1&section=3"
      />
    </Main>
  );
};

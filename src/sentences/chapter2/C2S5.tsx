import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Sum } from "../../components/Sum";
import { Important } from "../../components/Important";
import { QuizGame, Quiz } from "../../components/QuizGame";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

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
    question: "公開鍵暗号方式の暗号化・復号の手順は？",
    options: ["公開鍵で暗号化→秘密鍵で復号", "秘密鍵で暗号化→公開鍵で復号"],
    answer: "公開鍵で暗号化→秘密鍵で復号",
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

export const quizzesEN: Quiz[] = [
  {
    question: "What are the advantages of Peer to Peer?",
    options: [
      "Less prone to system downtime",
      "Hard to be hacked",
      "Less likely to be eavesdropped",
    ],
    answer: "Less prone to system downtime",
  },
  {
    question: "What is utilized for tamper detection?",
    options: [
      "Hash function",
      "Hesh function",
      "Dash function",
      "Rush function",
    ],
    answer: "Hash function",
  },
  {
    question:
      "What is the procedure for encryption and decryption of public key cryptography?",
    options: [
      "Encryption with public key → Decryption with private key",
      "Encryption with private key → Decryption with public key",
    ],
    answer: "Encryption with public key → Decryption with private key",
  },
  {
    question: "What are the advantages of digital signatures?",
    options: [
      "Non-repudiation",
      "Can prevent crime",
      "Can be autographed by celebrities",
    ],
    answer: "Non-repudiation",
  },
];

export const C2S5 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <Crumb chapter={2} section={5} />
      <MiniSectionTitle>
        {lang === "ja" && "まとめ"}
        {lang === "en" && "Summary"}
      </MiniSectionTitle>
      <Sum>
        {lang === "ja" && (
          <>
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
          </>
        )}
        {lang === "en" && (
          <>
            <li>
              <Important>Peer to Peer</Important> is resistant to{" "}
              <Important>system downtime</Important>.
            </li>
            <li>
              <Important>Hash functions</Important> are used for{" "}
              <Important>tamper detection</Important>.
            </li>
            <li>
              <Important>Public key cryptography</Important> solves{" "}
              <Important>the key distribution problem</Important>.
            </li>
            <li>
              <Important>Digital signatures</Important> are{" "}
              <Important>non-repudiation</Important>.
            </li>
          </>
        )}
      </Sum>
      <Balloon char="node">
        {lang === "ja" && "以上のことを抑えておこう。"}
        {lang === "en" && "Let's keep the above in mind."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "さて、今回もクイズを出すから、ブロックチェーンの基礎技術について理解できているか、確かめてみよう！"}
        {lang === "en" &&
          "Now, let's take another quiz to see if you understand the basic technology of blockchain!"}
      </Balloon>
      <QuizGame quizzes={lang === "ja" ? quizzes : quizzesEN} chapter={2} />
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

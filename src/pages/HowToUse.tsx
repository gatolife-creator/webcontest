import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { SubSectionTitle } from "../components/SubSectionTitle";
import { Pager } from "../components/Pager";
import { Image } from "../components/Image";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const HowToUse = () => {
  const lang = useRecoilValue(langState);
  return (
    <Drawer>
      <Main>
        <MiniSectionTitle>
          {lang === "ja" && "読み進め方"}
          {lang === "en" && "How to proceed with the reading"}
        </MiniSectionTitle>
        <SubSectionTitle>
          {lang === "ja" && "ステップ1: ノード先生の解説を聞こう。"}
          {lang === "en" && "Step 1: Listen to Prof. Nord's explanation."}
        </SubSectionTitle>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/explanation.png"}
          caption={
            lang === "ja"
              ? "ノード先生の解説"
              : lang === "en"
              ? "Prof. Node's Commentary"
              : ""
          }
        />
        <SubSectionTitle>
          {lang === "ja" && "ステップ2: 各チャプター最後のクイズに取り組もう。"}
          {lang === "en" && "Step 2: Take the quiz at the end of each chapter."}
        </SubSectionTitle>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/quiz.png"}
          caption={
            lang === "ja" ? "クイズ画面" : lang === "en" ? "Quiz Screen" : ""
          }
        />
        <SubSectionTitle>
          {lang === "ja" &&
            "スッテプ3: すべてのクイズに正解して、認定証をもらう。"}
          {lang === "en" &&
            "Step 3: Answer all quizzes correctly and receive a certificate."}
        </SubSectionTitle>

        <MiniSectionTitle>
          {lang === "ja" && "認定証の受け取り方"}
          {lang === "en" && "How to receive your certificate"}
        </MiniSectionTitle>
        <SubSectionTitle>
          {lang === "ja" &&
            "ステップ1: ナビゲーションバーの「進捗度」を押そう。"}
          {lang === "en" && 'Step 1: Click "Progress" on the navigation bar.'}
        </SubSectionTitle>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/navbar-progress.png"}
          caption={
            lang === "ja" ? "ナビゲーションバー" : lang === "en" ? "Navigation Bar" : ""
          }
        />
        <SubSectionTitle>
          {lang === "ja" &&
            "ステップ2: すべてのクイズに正解していることを確認しよう。"}
          {lang === "en" &&
            "Step 2: Make sure you have answered all quizzes correctly."}
        </SubSectionTitle>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/progress.png"}
          caption={
            lang === "ja"
              ? "進捗度確認画面"
              : lang === "en"
              ? "Progress Check Screen"
              : ""
          }
        ></Image>
        <SubSectionTitle>
          {lang === "ja" && "ステップ3: 君だけの認定証を受け取ろう。"}
          {lang === "en" && "Step 3: Receive your personalized certificate."}
        </SubSectionTitle>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/certificate-sample.png"}
          caption={
            lang === "ja" ? "認定証" : lang === "en" ? "Certificate" : ""
          }
        />
        <Pager direction="back" link="/index.html"></Pager>
        <Pager
          direction="forward"
          link="/content.html?chapter=1&section=0"
        ></Pager>
      </Main>
    </Drawer>
  );
};

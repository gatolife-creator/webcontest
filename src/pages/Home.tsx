import React from "react";

import { Main } from "../components/Main";
import { Drawer } from "../components/Drawer";
import { Separator } from "../components/Separator";
import { Pager } from "../components/Pager";
import { Balloon } from "../components/Balloon";
import { Sum } from "../components/Sum";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import {
  SiBrave,
  SiGooglechrome,
  SiMicrosoftedge,
  SiOpera,
  SiFirefox,
} from "react-icons/si";
import { Particles } from "../components/Particles";
import { Scroll } from "../components/Scroll";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Home = () => {
  document.title = "ブロックチェーン入門";
  const lang = useRecoilValue(langState);

  return (
    <>
      <Drawer>
        <div className="table h-full w-full bg-primary sm:bg-transparent">
          <Particles />
          <div className="table-cell align-middle">
            <h1
              style={{ fontFamily: "Kosugi Maru" }}
              className="animate-tracking-in-expand text-center text-4xl font-bold drop-shadow-2xl md:text-6xl lg:text-8xl"
            >
              {lang === "ja" && "ブロックチェーン入門"}
              {lang === "en" && (
                <>
                  Blockchain World
                  <p className="mb-4 text-[36px]">for beginners</p>
                </>
              )}
            </h1>
            <p className="text-md text-center font-bold md:text-3xl lg:text-3xl">
              {lang === "ja" &&
                "〜ノード先生、ブロックチェーンってなんですか？〜"}
              {lang === "en" && "~Prof. Node, tell me what is 'blockchain'~"}
            </p>
            <Scroll />
          </div>
        </div>
        <Main>
          <div className="clear-right"></div>
          <MiniSectionTitle>
            {lang === "ja" && "はじめに"}
            {lang === "en" && "Prologue"}
          </MiniSectionTitle>
          <p>
            {lang === "ja" && (
              <>
                2009年にブロックチェーンが登場して以来、十数年もの長い月日が経ちました。
                <br />
                登場してから数年の間は、仮想通貨ばかりに活用されてきたブロックチェーンですが、近年はほかの分野で応用する動きが活発化しています。
                <br />
                金融はもちろん、教育、IoT、ゲームに至るまで...。
                <br />
                我々の生活の基盤になりつつある今だからこそ学びたいブロックチェーン。ノード先生たちと入門しましょう！
              </>
            )}
            {lang === "en" && (
              <>
                More than a decade has passed since blockchain was introduced in
                2009. <br />
                Blockchain was used only for crypto currency for several years.
                But in recent years, there has been a growing movement to apply
                it to other fields. <br />
                Not only in finance, but also in education, such as IoT, games,
                and more... <br />
                Now, blockchain is becoming an essential part of our daily
                lives, we should learn more about it. Let's get stared with
                Professor Node!
              </>
            )}
          </p>

          <MiniSectionTitle>
            {lang === "ja" && "人物紹介"}
            {lang === "en" && "Character introductions"}
          </MiniSectionTitle>

          <div className="mt-10 mb-10">
            <img
              src={process.env.PUBLIC_URL + "/imgs/node-sensei.png"}
              className="mask mask-circle mx-auto w-[160px] sm:float-left sm:mr-10"
              alt="ノード先生"
            />
            <h2 className="mt-10 box-content text-center text-2xl font-bold underline decoration-primary sm:text-left">
              {lang === "ja" && "ノード先生"}
              {lang === "en" && "Prof. Node"}
            </h2>
            <p>
              {lang === "ja" && (
                <>
                  猫の天才学者。
                  <br />
                  ブロックチェーンを専門とし、何人もの生徒にブロックチェーンの知識を伝授してきた。そんな彼の名前の由来は…?
                </>
              )}
              {lang === "en" && (
                <>
                  Cat genius scholar. He specializes in blockchain and has
                  taught many students about blockchain. <br />
                  The origin of his name is...?
                </>
              )}
            </p>
          </div>
          <div className="clear-left"></div>

          <div className="mb-10">
            <img
              src={process.env.PUBLIC_URL + "/imgs/nakamoto-kun.png"}
              className="mask mask-circle mx-auto w-[160px] sm:float-left sm:mr-10"
              alt="ナカモト君"
            />
            <h2 className="mt-10 box-content text-center text-2xl font-bold underline decoration-primary sm:text-left">
              {lang === "ja" && "ナカモト君"}
              {lang === "en" && "Mr. Nakamoto"}
            </h2>
            <p>
              {lang === "ja" && (
                <>
                  ノード先生の研究室でブロックチェーンの研究をすることになった新入生。
                  <br />
                  IT知識皆無。もちろんブロックチェーンの知識皆無ッ！！！
                  <br />
                  ブロックチェーンの集中講義を受けることになった。
                </>
              )}
              {lang === "en" && (
                <>
                  He is a new student who has been assigned to work on
                  blockchain research in Prof. Node's lab.
                  <br />
                  He has no knowledge of IT. And of course, no knowledge of
                  blockchain!
                  <br />
                  He is going to take an intensive course on blockchain.
                </>
              )}
            </p>
          </div>
          <div className="clear-left"></div>

          <div className="mb-10">
            <img
              src={process.env.PUBLIC_URL + "/imgs/ether-kun.png"}
              className="mask mask-circle mx-auto w-[160px] sm:float-left sm:mr-10"
              alt="イザワ君"
            />
            <h2 className="mt-10 box-content text-center text-2xl font-bold underline decoration-primary sm:text-left">
              {lang === "ja" && "イザワ君"}
              {lang === "en" && "Mr. Izawa"}
            </h2>
            <p>
              {lang === "ja" && (
                <>
                  ノード先生の助手。
                  <br />
                  ノード先生の説明を噛み砕いたり、図示する役目を持つ。
                </>
              )}
              {lang === "en" && (
                <>
                  Mr. Izawa is an assistant of Prof. Node. <br />
                  He is responsible for explaining and illustrating Prof. Node's
                  explanation.
                </>
              )}
            </p>
          </div>
          <div className="clear-left"></div>
          <Separator />
          <Balloon char="nakamoto">
            {lang === "ja" && "ノード先生、今日からよろしくお願いします！"}
            {lang === "en" &&
              "Nice to meet you professor. I'm happy that I can work with you today!"}
          </Balloon>
          <Balloon char="node">
            {lang === "ja" &&
              "よろしく、ナカモト君。こいつは私の助手、イザワ君だ。"}
            {lang === "en" &&
              "Oh, Mr. Nakamoto, nice to meet you too. This is my assistant, Mr. Izawa"}
          </Balloon>
          <Balloon char="ether">
            {lang === "ja" && "イザワです。これからよろしくお願いします。"}
            {lang === "en" &&
              "Hi, Mr. Nakamoto, I am also happy to work with you from now on."}
          </Balloon>
          <Balloon char="node">
            {lang === "ja" &&
              "さて、今日から君は私の元でブロックチェーンの講義を受けることとなったが、君はブロックチェーンについてどのくらい知っているか？"}
            {lang === "en" &&
              "Now, you are going to take a lecture on blockchain under my supervision, but how much do you know about blockchain?"}
          </Balloon>
          <Balloon char="nakamoto">
            {lang === "ja" && "ぶ、ブロックチェーン？"}
            {lang === "en" && "How much do I know about block…chain?"}
          </Balloon>
          <Balloon char="node">
            {lang === "ja" &&
              "君もしかして、そんなことも知らずに来たのか？！仕方がない、君のために集中講義を行う。これからは以下の手順に沿って学習していくぞ。"}
            {lang === "en" &&
              "You came here without even knowing about it? I have no choice. I’ll give you an intensive lecture. From now on, you will learn the following steps."}
          </Balloon>
          <Sum>
            {lang === "ja" && (
              <>
                <li>
                  ノード先生との会話を通してブロックチェーンについて学ぶ。
                </li>
                <li>各セクションごとに確認テストを行い、理解度を確認する。</li>
                <li>全て学習し終わったら、総合問題を解く。</li>
              </>
            )}
            {lang === "en" && (
              <>
                <li>Learn about blockchain through talking with Prof. Node.</li>
                <li>
                  Take a confirmation test for each section to check your
                  understanding.
                </li>
                <li>
                  When you've finished learning everything, you'll be able to
                  answer a comprehensive test.
                </li>
              </>
            )}
          </Sum>

          <Balloon char="nakamoto">
            {lang === "ja" && "大変そうですね...。"}
            {lang === "en" && "Sounds like a lot of work..."}
          </Balloon>
          <Balloon char="node">
            {lang === "ja" &&
              "なぁに、心配するな。ちょっとした基礎知識を確認するだけだ。それに、全てを履修したら認定証をあげよう。"}
            {lang === "en" &&
              "Don't worry. It's just to check a little basic knowledge. Besides, I will give you a certificate if you complete the whole course."}
          </Balloon>
          <Balloon char="nakamoto">
            {lang === "ja" && "...! 僕、頑張ります！"}
            {lang === "en" && "...! I'll do my best!"}
          </Balloon>
          <Balloon char="ether">
            {lang === "ja" && "（わかりやすいな...。）"}
            {lang === "en" && "(What a simple-minded guy he is...)"}
          </Balloon>

          <Pager direction="forward" link="/how-to-use.html" />

          <MiniSectionTitle>
            {lang === "ja" && "推奨環境"}
            {lang === "en" && "Recommended environment"}
          </MiniSectionTitle>
          <div className="bg-primary px-6 py-5 sm:px-16">
            <div className="my-2">
              <SiGooglechrome fontSize={36} className="inline-block" />
              <p className="inline-block indent-10 text-2xl">Google Chrome</p>
            </div>
            <div className="my-2">
              <SiMicrosoftedge fontSize={36} className="inline-block" />
              <p className="inline-block indent-10 text-2xl">Microsoft Edge</p>
            </div>
            <div className="my-2">
              <SiOpera fontSize={36} className="inline-block" />
              <p className="inline-block indent-10 text-2xl">Opera</p>
            </div>
            <div className="my-2">
              <SiFirefox fontSize={36} className="inline-block" />
              <p className="inline-block indent-10 text-2xl">Firefox</p>
            </div>
            <div className="my-2">
              <SiBrave fontSize={36} className="inline-block" />
              <p className="inline-block indent-10 text-2xl">Brave</p>
            </div>
            <small>
              ※ <strong>Internet Explorer</strong> {lang === "ja" && "非推奨"}
              {lang === "en" && "Deprecated"}
            </small>
          </div>
        </Main>
      </Drawer>
    </>
  );
};

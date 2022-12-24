import React from "react";

import { Main } from "../components/Main";
import { Drawer } from "../components/Drawer";
import { Separator } from "../components/Separator";
import { Pager } from "../components/Pager";
import { Balloon } from "../components/Balloon";
import { Sum } from "../components/Sum";
import { Image } from "../components/Image";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import {
  SiBrave,
  SiGooglechrome,
  SiMicrosoftedge,
  SiOpera,
  SiFirefox,
} from "react-icons/si";
import { FaSafari } from "react-icons/fa";
import { Particles } from "../components/Particles";
import { Scroll } from "../components/Scroll";
import useLanguage from "../blockchain/hooks/useLanguage";
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
              {lang === "en" && "blockchain introduction"}
            </h1>
            <p className="text-md text-center font-bold md:text-3xl lg:text-3xl">
              {lang === "ja" && "〜ノード先生、ブロックチェーンってなんですか？〜"}
              {lang === "en" && "~Prof. Node, tell me what is \"blockchain\"~"}
            </p>
            <Scroll />
          </div>
        </div>
        <Main>
          <div className="clear-right"></div>
          <MiniSectionTitle>はじめに</MiniSectionTitle>
          <p>
            2009年にブロックチェーンが登場して以来、十数年もの長い月日が経ちました。
            <br />
            登場してから数年の間は、仮想通貨ばかりに活用されてきたブロックチェーンですが、近年はほかの分野で応用する動きが活発化しています。
            <br />
            金融はもちろん、教育、IoT、ゲームに至るまで...。
            <br />
            我々の生活の基盤になりつつある今だからこそ学びたいブロックチェーン。ノード先生たちと入門しましょう！
          </p>

          <MiniSectionTitle>人物紹介</MiniSectionTitle>

          <div className="mt-10 mb-10">
            <Image
              src={process.env.PUBLIC_URL + "/imgs/node-sensei.png"}
              className="mask mask-circle mx-auto w-[160px] sm:float-left sm:mr-10"
            />
            <h2 className="mt-10 box-content text-center text-2xl font-bold underline decoration-primary sm:text-left">
              ノード先生
            </h2>
            <p>
              猫の天才学者。
              <br />
              ブロックチェーンを専門とし、何人もの生徒にブロックチェーンの知識を伝授してきた。そんな彼の名前の由来は…?
            </p>
          </div>
          <div className="clear-left"></div>

          <div className="mb-10">
            <Image
              src={process.env.PUBLIC_URL + "/imgs/nakamoto-kun.png"}
              className="mask mask-circle mx-auto w-[160px] sm:float-left sm:mr-10"
            />
            <h2 className="mt-10 box-content text-center text-2xl font-bold underline decoration-primary sm:text-left">
              ナカモト君
            </h2>
            <p>
              ノード先生の研究室でブロックチェーンの研究をすることになった新入生。
              <br />
              IT知識皆無。もちろんブロックチェーンの知識皆無ッ！！！
              <br />
              ブロックチェーンの集中講義を受けることになった。
            </p>
          </div>
          <div className="clear-left"></div>

          <div className="mb-10">
            <Image
              src={process.env.PUBLIC_URL + "/imgs/ether-kun.png"}
              className="mask mask-circle mx-auto w-[160px] sm:float-left sm:mr-10"
            />
            <h2 className="mt-10 box-content text-center text-2xl font-bold underline decoration-primary sm:text-left">
              イザワ君
            </h2>
            <p>
              ノード先生の助手。
              <br />
              ノード先生の説明を噛み砕いたり、図示する役目を持つ。
              <br />
            </p>
          </div>
          <div className="clear-left"></div>
          <Separator />
          <Balloon char="nakamoto">
            ノード先生、今日からよろしくお願いします！
          </Balloon>
          <Balloon char="node">
            よろしく、ナカモト君。こいつは私の助手、イザワ君だ。
          </Balloon>
          <Balloon char="ether">
            イザワです。これからよろしくお願いします。
          </Balloon>
          <Balloon char="node">
            さて、今日から君は私の元でブロックチェーンの講義を受けることとなったが、君はブロックチェーンについてどのくらい知っているか？
          </Balloon>
          <Balloon char="nakamoto">ぶ、ブロックチェーン？</Balloon>
          <Balloon char="node">
            君もしかして、そんなことも知らずに来たのか？！仕方がない、君のために集中講義を行う。これからは以下の手順に沿って学習していくぞ。
          </Balloon>
          <Sum>
            <li>ノード先生との会話を通してブロックチェーンについて学ぶ。</li>
            <li>各セクションごとに確認テストを行い、理解度を確認する。</li>
            <li>全て学習し終わったら、総合問題を解く。</li>
          </Sum>

          <Balloon char="nakamoto">大変そうですね...。</Balloon>
          <Balloon char="node">
            なぁに、心配するな。ちょっとした基礎知識を確認するだけだ。それに、全てを履修したら認定証をあげよう。
          </Balloon>
          <Balloon char="nakamoto">...! 僕、頑張ります！</Balloon>
          <Balloon char="ether">（わかりやすいな...。）</Balloon>

          <Pager direction="forward" link="/how-to-use.html" />

          <MiniSectionTitle>推奨環境</MiniSectionTitle>
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
              <FaSafari fontSize={36} className="inline-block" />
              <p className="inline-block indent-10 text-2xl">Safari</p>
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
              ※ <strong>Internet Explorer</strong> 非推奨
            </small>
          </div>
        </Main>
      </Drawer>
    </>
  );
};

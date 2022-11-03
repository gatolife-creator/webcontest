import React from "react";

import { Main } from "../components/Main";
import { Drawer } from "../components/Drawer";
import { Separator } from "../components/Separator";
import { Pager } from "../components/Pager";
import { SectionTitle } from "../components/SectionTitle";
import { Balloon } from "../components/Balloon";
import { Sum } from "../components/Sum";

export const Home = () => {
  document.title = "ブロックチェーン入門";
  return (
    <>
      <Drawer>
        <div className="table h-full w-full bg-primary">
          <div className="table-cell align-middle">
            <h1 className="animate-tracking-in-expand text-center text-4xl font-bold drop-shadow-xl md:text-6xl lg:text-8xl">
              ブロックチェーン入門
            </h1>
            <p className="text-md text-center font-bold md:text-3xl lg:text-3xl">
              〜ノード先生、ブロックチェーンってなんですか？〜
            </p>
          </div>
          {/* <img
            src={`${process.env.PUBLIC_URL}/blockchain-logo.png`}
            alt=""
            className="float-right"
            style={{ width: "600px" }}
          /> */}
        </div>
        <Main>
          <div className="clear-right"></div>
          <SectionTitle>はじめに</SectionTitle>
          <Separator />
          <p>
            近年、NFTや暗号資産などの言葉が聴かれるようになりました。
            <br />
            これらは全てブロックチェーン技術が根底にあるのです。ブロックチェーンの技術について正しく理解することで、今後の活用の仕方が見えてくるでしょう。
            <br />
            そして、NFTやメタバース、暗号資産の他にもブロックチェーンを基盤とした新しいインフラが出来ようとしています。
            <br /> 医療や金融まで。
            これからほぼ確実に我々の生活に欠かせない物になるであろうブロックチェーンについて、初めて聞く人にもわかりやすく、抵抗感を感じないように解説しています。
            ブロックチェーンについて正しく理解して、活用できるようになることを目指しました。
            <br />
            また、最後の章では筆者の取り組んでいるブロックチェーンを活用したアプリケーションを紹介しています。
            <br />
            それでは、猫のノード先生と生徒たちと一緒に楽しくブロックチェーンについて理解を深めていきましょう！
          </p>

          <Separator />
          <SectionTitle>人物紹介</SectionTitle>
          <Separator />

          <div className="mt-10 mb-10">
            <img
              src="https://placeimg.com/160/160/arch"
              alt=""
              className="mask mask-circle mr-10 lg:float-left"
            />
            <h2 className="mt-10 text-2xl font-bold">ノード先生</h2>
            <p>
              天才猫学者。
              <br />
              ブロックチェーンを専門とし、何人もの生徒にブロックチェーンの知識を伝授してきた。そんな彼の名前の由来は…?
            </p>
          </div>
          <div className="clear-left"></div>

          <div className="mb-10">
            <img
              src="https://placeimg.com/160/160/arch"
              alt=""
              className="mask mask-circle mr-10 lg:float-left"
            />
            <h2 className="mt-10 text-2xl font-bold">ナカモト君</h2>
            <p>
              ノード先生の研究室でブロックチェーンの研究をすることになった新入生。
              <br />
              IT知識皆無。もちろんブロックチェーンの知識皆無ッ！！！
              <br />
              ノード先生の元でブロックチェーンの集中講義を受けることとなった。
            </p>
          </div>
          <div className="clear-left"></div>

          <div className="mb-10">
            <img
              src="https://placeimg.com/160/160/arch"
              alt=""
              className="mask mask-circle mr-10 lg:float-left"
            />
            <h2 className="mt-10 text-2xl font-bold">イザワ君</h2>
            <p>
              ノード先生の助手。
              <br />
              ノード先生の説明を噛み砕いたり、図示する役目を持つ。
            </p>
          </div>
          <div className="clear-left"></div>
          <Separator />
          <Balloon direction="right">
            ノード先生、今日からよろしくお願いします！
          </Balloon>
          <Balloon direction="left">
            よろしく、ナカモト君。こいつは私の助手、イザワ君だ。
          </Balloon>
          <Balloon direction="left">
            イザワです。これからよろしくお願いします。
          </Balloon>
          <Balloon direction="left">
            さて、今日から君は私の元でブロックチェーンの講義を受けることとなったが、君はブロックチェーンについてどのくらい知っているか？
          </Balloon>
          <Balloon direction="right">ぶ、ブロックチェーン？</Balloon>
          <Balloon direction="left">
            君もしかして、そんなことも知らずに来たのか？！仕方がない、君のために集中講義を行う。これからは以下の手順に沿って学習していくぞ。
          </Balloon>
          <Sum>
            <li>ノード先生との会話を通してブロックチェーンについて学ぶ。</li>
            <li>各セクションごとに確認テストを行い、理解度を確認する。</li>
            <li>全て学習し終わったら、総合問題を解く。</li>
          </Sum>

          <Balloon direction="right">大変そうですね...。</Balloon>
          <Balloon direction="left">
            なぁに、心配するな。ちょっとした基礎知識を確認するだけだ。それに、全てを履修したら認定証をあげよう。
          </Balloon>
          <Balloon direction="right">...! 僕、頑張ります！</Balloon>
          <Balloon direction="left">わかりやすいな...。</Balloon>

          <Pager
            text="ブロックチェーン"
            direction="forward"
            link="/content.html?chapter=1&section=0"
          />
        </Main>
      </Drawer>
    </>
  );
};

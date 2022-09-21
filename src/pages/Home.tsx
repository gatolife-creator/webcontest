import React from "react";

import { Main } from "../components/Main";
import { Drawer } from "../components/Drawer";
import { Separator } from "../components/Separator";
import { Pager } from "../components/Pager";
import { SectionTitle } from "../components/SectionTitle";

export const Home = () => {
  return (
    <>
      <Drawer>
        <Main>
          <div className="position-sticky top-0 left-0 w-screen h-1/3 bg-primary table-cell">
            <h1 className="text-8xl font-bold align-middle">ブロックチェーン入門</h1>
            <p className="text-5xl font-bold">〜ノード先生、ブロックチェーンってなんですか？〜</p>
            {/* <img
              src={`${process.env.PUBLIC_URL}/blockchain-logo.png`}
              alt=""
              className="float-right"
              style={{ width: "600px" }}
            /> */}
          </div>
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
              className="mask mask-circle mr-10 float-left"
            />
            <h2 className="text-2xl font-bold mt-10">ノード先生</h2>
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
              className="mask mask-circle mr-10 float-left"
            />
            <h2 className="text-2xl font-bold mt-10">ナカモト君</h2>
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
              className="mask mask-circle mr-10 float-left"
            />
            <h2 className="text-2xl font-bold mt-10">イザワ君</h2>
            <p>
              ノード先生の助手。
              <br />
              ノード先生の説明を噛み砕いたり、図示する役目を持つ。
            </p>
          </div>
          <div className="clear-left"></div>

          <Pager
            text="ブロックチェーン"
            direction="forward"
            link="/content?chapter=1&section=0"
          />
        </Main>
      </Drawer>
    </>
  );
};

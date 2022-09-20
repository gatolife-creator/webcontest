import React from "react";

import { Main } from "../components/Main";
import { Drawer } from "../components/Drawer";
import { Separator } from "../components/Separator";

export const Home = () => {
  return (
    <>
      <Drawer>
        <Main>
          <h1 className="text-3xl font-bold">初めに</h1>
          <Separator />
          <p className="leading-10">
            近年、NFTや(メタバース
            少しあやしい、確かにブロックチェーンの活用が期待されているが)、暗号資産などの言葉が聴かれるようになりました。
            <br />
            これらは全てブロックチェーン技術が根底にあるのです。ブロックチェーンの技術について正しく理解することで、今後の活用の仕方が見えてくるでしょう。
            <br />
            そして、NFTやメタバース、暗号資産の他にもブロックチェーンを基盤とした新しいインフラが出来ようとしています。
            <br /> 医療や金融、（他の何か）まで。
            これからほぼ確実に我々の生活に欠かせない物になるであろうブロックチェーンについて、初めて聞く人にもわかりやすく、抵抗感を感じないように解説しています。
            ブロックチェーンについて正しく理解して、活用できるようになるでしょう（なることを目指しました）。
            <br />
            また、最後の章では筆者の取り組んでいるブロックチェーンを活用したアプリケーションを紹介しています。
            <br />
            それでは、猫のノード先生と生徒たちと一緒に楽しくブロックチェーンについて理解を深めていきましょう！
          </p>

          <Separator />
          <h1 className="text-3xl font-bold">人物紹介</h1>
          <Separator />
          <h2 className="text-2xl font-bold">ノード先生</h2>
          <p className="leading-10">
            天才猫学者。ブロックチェーンを専門とし、何人もの生徒にブロックチェーンの知識を伝授してきた。そんな彼の名前の由来は…?
          </p>
          <h2 className="text-2xl font-bold">ナカモト君</h2>
          <p className="leading-10">
            ノード先生の研究室でブロックチェーンの研究をすることになった新入生。
            <br />
            IT知識皆無。もちろんブロックチェーンの知識皆無ッ！！！
            <br />
            そんなわけで、ノード先生の元でブロックチェーンの集中講義を受けることとなった。
          </p>
          <h2 className="text-2xl font-bold">イザワ君</h2>
          <p className="leading-10">
            ノード先生の助手。ノード先生の説明を噛み砕いたり、図示する役目を持つ。
          </p>
        </Main>
      </Drawer>
    </>
  );
};

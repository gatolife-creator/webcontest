import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Separator } from "../../components/Separator";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { Sum } from "../../components/Sum";

export const C1S1 = () => {
  return (
    <>
      <Main>
        <SectionTitle>一節　ブロックチェーンの概要</SectionTitle>

        <Separator />

        <MiniSectionTitle>ブロックチェーンとは</MiniSectionTitle>

        <Balloon direction="right">
          ノード先生、ブロックチェーンってなんですか？
        </Balloon>

        <Balloon direction="left">
          <strong>データを安全に記録する</strong>ための仕組みの一つだ。
        </Balloon>

        <Balloon direction="left">
          ブロックチェーンの基礎となる技術を学んでいこう。
        </Balloon>

        {/* <Balloon direction="left">
          少々難しいが、日本ブロックチェーン協会の定義を見てみよう。
        </Balloon>

        <Quotation url="https://jba-web.jp/news/642">
          「電子署名とハッシュポインタを使用し改竄検出が容易なデータ構造を持ち、且つ、当該データをネットワーク上に分散する多数のノードに保持させることで、高可用性及びデータ同一性等を実現する技術を広義のブロックチェーンと呼ぶ。」
        </Quotation>

        <Balloon direction="right">
          う〜ん、なんのことだかよくわからないですね...
        </Balloon>

        <Balloon direction="left">
          最初はそんなものだ。これからの説明を通じて、少しずつ理解していこう。この定義は最後にまた確認するから、安心して勉強してくれ。
        </Balloon> */}

        {/* <Balloon direction="right">はい、頑張ります！</Balloon>

        <Balloon direction="left">
          よし、それではまず、ブロックチェーンに活用されている、主な仕組みを見ていこう。
        </Balloon> */}

        <Sum>
          <li>
            ブロックチェーンとは、<Important>データを保存する仕組み</Important>
            の一つである。
          </li>
          <li>
            ブロックチェーン上に記録されたデータは、
            <Important>改ざんが困難</Important>である。
          </li>
          <li>
            ブロックチェーンの情報は
            <Important>不特定多数で管理される</Important>。
          </li>
        </Sum>

        <Balloon direction="left">以上のことを頭に入れておこう。</Balloon>
        <div>
          <Important>
            ブロックチェーンは、開発されて久しい技術の集合であることを述べたい。
          </Important>
        </div>

        <MiniSectionTitle>ブロックチェーンの仕組み概要</MiniSectionTitle>
        <div>
          <Important>
            ここにブロックチェーンのイメージ画像をはっつけたい
          </Important>
        </div>
        <Sum>
          <li></li>
        </Sum>

        <Pager
          direction="back"
          text="第一節"
          link="/content.html?chapter=1&section=1"
        />
        <Pager
          direction="forward"
          text="第二節"
          link="/content.html?chapter=1&section=2"
        />
      </Main>
    </>
  );
};

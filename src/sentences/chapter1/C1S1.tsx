import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Separator } from "../../components/Separator";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Quotation } from "../../components/Quotation";

export const C1S1 = () => {
  return (
    <>
      <Main>
        <SectionTitle>一節　ブロックチェーンの概要</SectionTitle>
        <Separator />
        <MiniSectionTitle>ブロックチェーンとは</MiniSectionTitle>
        <Balloon direction="left">
          ノード先生、ブロックチェーンってなんですか？
        </Balloon>
        <Balloon direction="right">
          それは難しい質問だな。一口にブロックチェーンと言っても、さまざまな種類があり、さまざまな仕組みを採用している。
        </Balloon>
        <Balloon direction="right">
          少々難しくなるが、日本ブロックチェーン協会の定義を見てみよう。
        </Balloon>
        <Quotation url="https://jba-web.jp/news/642">
          「電子署名とハッシュポインタを使用し改竄検出が容易なデータ構造を持ち、且つ、当該データをネットワーク上に分散する多数のノードに保持させることで、高可用性及びデータ同一性等を実現する技術を広義のブロックチェーンと呼ぶ。」
        </Quotation>

        <ul>
          <li>ブロックチェーンの定義を一言でまとめる</li>
          <li>
            「ブロックチェーンにはさまざまな種類があるが、あえて言うなら」と前置きを入れる
          </li>
          <li>
            過去に行われたすべての取引データが、ブロックごとにまとめられて、各ブロックが一本の鎖のようにつながった分散型のデータベースである（言葉を変えないとパクリになる。イラストを使う。）
          </li>
          <li>上のイメージ画像を作成する</li>
          <li>「データベース」、「分散型」について述べる</li>
          <li>
            ＊データベース：情報（データ）を整理し、欲しいデータに簡単にアクセスできるようにした物。
          </li>
        </ul>

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

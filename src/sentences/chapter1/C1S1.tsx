import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Separator } from "../../components/Separator";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Quotation } from "../../components/Quotation";
import { Important } from "../../components/Important";
import { OptionalHash } from "../../sample/hash/OptionalHash";

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
          少々難しいが、日本ブロックチェーン協会の定義を見てみよう。
        </Balloon>
        <Quotation url="https://jba-web.jp/news/642">
          「電子署名とハッシュポインタを使用し改竄検出が容易なデータ構造を持ち、且つ、当該データをネットワーク上に分散する多数のノードに保持させることで、高可用性及びデータ同一性等を実現する技術を広義のブロックチェーンと呼ぶ。」
        </Quotation>
        <Balloon direction="left">
          う〜ん、なんのことだかよくわからないですね...
        </Balloon>
        <Balloon direction="right">
          最初はそんなものだ。これからの説明を通じて、少しずつ理解していこう。この定義は最後にまた確認するから、安心して勉強してくれ。
        </Balloon>
        <Balloon direction="left">はい、頑張ります！</Balloon>
        <Balloon direction="right">
          よし、それではまず、ブロックチェーンに活用されている、主な仕組みを見ていこう。
        </Balloon>

        <MiniSectionTitle>ハッシュ関数</MiniSectionTitle>
        <p>
          ハッシュ関数は別名 <Important>要約関数</Important>
          とも呼ばれ、入力した値をもとにランダムに見える値を出力する。
          <br />
          また、ハッシュ関数には以下のような特徴がある。
        </p>
        <ol className="list-decimal list-inside my-10 bg-slate-300">
          <li>
            入力した値の長さに関わらず、
            <Important>常に同じ長さの値を出力する</Important>。
          </li>
          <li>
            同じ値を入力すれば、
            <Important>常に同じ値が出力される</Important>。
          </li>
          <li>
            ハッシュ値から、<Important>元の値を復元できない</Important>。
          </li>
        </ol>
        <Balloon direction="right">
          ハッシュ関数で遊べるようにしておいたぞ。1〜3の特徴を確かめてみるのだ。
        </Balloon>
        <OptionalHash />

        <MiniSectionTitle>公開鍵暗号方式</MiniSectionTitle>
        <p>
          公開鍵で暗号化、秘密鍵で復号する暗号方式です。
          <br />
          公開鍵は、秘密鍵をもとに複数作成することが可能です。
        </p>
        <p>
          参考文献：https://udemy.benesse.co.jp/development/blockchain/public-key-cryptography.html
        </p>

        <MiniSectionTitle>署名</MiniSectionTitle>
        <p>秘密鍵で暗号化、公開鍵で復号しています。</p>

        <MiniSectionTitle>まとめ</MiniSectionTitle>
        <Balloon direction="right">
          これらの技術がブロックチェーンの土台だ。今後の説明で頻出だから、よく覚えておくように。
        </Balloon>

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

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
import { Image } from "../../components/Image";

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

        <MiniSectionTitle>Peer to Peer（P2P）</MiniSectionTitle>
        <Balloon direction="left">ぺ、ぺあとーぺあ？</Balloon>
        <Balloon direction="right">
          <strong>ピア・ツー・ピア</strong>
          だ。これはブロックチェーンにおいて、最も重要であると言っても過言ではない。
        </Balloon>
        <Balloon direction="right">
          一般的に用いられる、<strong>クライアント・サーバー・システム</strong>
          にはないメリットがある。
        </Balloon>
        <Balloon direction="left">
          ピア・ツー・ピアにクライアント・サーバー・システム？聞きなれない言葉ばっかり...
        </Balloon>
        <Balloon direction="right">
          では、我々の生活に馴染み深いクライアント・サーバー・システムから解説しよう。
        </Balloon>

        <p>
          クライアント・サーバー・システムは、コンピューターを
          <strong>クライアント</strong>と<strong>サーバー</strong>
          に役割分担して、情報をやり取りする仕組みです。
          <br />
          クライアントは、サーバーに<Important>情報を要求し</Important>
          、それを受け取るコンピューター、
          <br />
          サーバーは、クライアントからの要求に応じて、
          <Important>情報を提供する</Important>コンピューターです。
        </p>

        <Balloon direction="right">
          サーバーは、多くのコンピューターに情報を提供する、えら〜いコンピューターなのだ。
        </Balloon>

        <Balloon direction="right">
          イザワ君、ピア・ツー・ピアとクライアント・サーバー・システムの図を用意してくれ。
        </Balloon>
        <Balloon direction="left">かしこまりました。</Balloon>

        <Image src={`${process.env.PUBLIC_URL}/imgs/スライド4.jpeg`} />
        {/* <Image src={`${process.env.PUBLIC_URL}/imgs/スライド5.jpeg`} /> */}
        {/* <Image src={`${process.env.PUBLIC_URL}/imgs/スライド6.jpeg`} /> */}

        <MiniSectionTitle>ハッシュ関数</MiniSectionTitle>
        <p>
          ハッシュ関数は別名 <Important>要約関数</Important>
          とも呼ばれ、入力した値をもとにランダムに見える値を出力する。
          <br />
          また、ハッシュ関数には以下のような特徴がある。
        </p>
        <ol className="list-decimal list-inside p-5 my-10 bg-slate-300">
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

        <Balloon direction="left">（イザワ君の図解）</Balloon>
        <Balloon direction="right">
          ハッシュ関数で遊べるようにしておいたぞ。1と2の特徴を確かめてみるのだ。
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

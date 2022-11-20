import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Quiz, QuizGame } from "../../components/QuizGame";
import { Balloon } from "../../components/Balloon";
import { Link } from "react-router-dom";

export const C6S0 = () => {
  const quizzes: Quiz[] = [
    {
      question: "ブロックチェーンを金融に活用するメリットは？",
      options: ["中間搾取が防止できる", "個人情報流出が防止できる"],
      answer: "中間搾取が防止できる",
    },
  ];
  return (
    <Main duration="long">
      <MiniSectionTitle>総まとめ</MiniSectionTitle>
      <Balloon char="node">
        ナカモト君、これで君に伝えるブロックチェーンの基礎知識は全てだ。
      </Balloon>
      <Balloon char="nakamoto">長い道のりでしたね。</Balloon>
      <Balloon char="node">
        イザワ君も今まで手伝ってくれてありがとうな。
      </Balloon>
      <Balloon char="ether">
        いえいえ、僕ナカモト君君の成長が見れたので、結構楽しかったですよ。
      </Balloon>
      <Balloon char="node">さぁ、今までの勉強の総まとめの時間だ。</Balloon>
      <Balloon char="node">
        まずは、
        <Link
          to="/content.html?chapter=1&section=0"
          className="link-secondary link"
        >
          「ブロックチェーンとは」
        </Link>
        。
      </Balloon>
      <Balloon char="nakamoto">
        ブロックチェーンはどのようなものか、どのような歴史をたどってきたのかを勉強しましたね。
      </Balloon>
      <Balloon char="node">
        そして、
        <Link
          to="/content.html?chapter=2&section=0"
          className="link-secondary link"
        >
          「基礎技術」
        </Link>
        。
      </Balloon>
      <Balloon char="nakamoto">
        ブロックチェーンを支える技術、P2P、ハッシュ関数、公開鍵暗号方式、デジタル署名について勉強しましたね。
      </Balloon>
      <Balloon char="node">
        それから、
        <Link
          to="/content.html?chapter=3&section=0"
          className="link-secondary link"
        >
          「仕組み」
        </Link>
        。
      </Balloon>
      <Balloon char="nakamoto">
        基礎技術がどのようにブロックチェーンで活用されてるのかを見てきましたね。あれは学びごたえがありました。
      </Balloon>
      <Balloon char="node">
        <Link
          to="/content.html?chapter=4&section=0"
          className="link-secondary link"
        >
          「活用例」
        </Link>
        についても解説したな。
      </Balloon>
      <Balloon char="nakamoto">
        仮想通貨やスマート・コントラクト、NFTやメタバースについて見てきましたね。
      </Balloon>
      <Balloon char="node">
        最後に、
        <Link
          to="/content.html?chapter=5&section=0"
          className="link-secondary link"
        >
          「企業の取り組み」
        </Link>
        について見てきた。
      </Balloon>
      <Balloon char="nakamoto">
        ブロックチェーンをゲームに活用しているdouble
        jump.tokyoさん、電力取引やサプライチェーンに活用しているchaintopeさん。
      </Balloon>
      <Balloon char="nakamoto">
        僕の知らないところで、革新的で面白い取り組みが行われていたんですね。
      </Balloon>

      <Balloon char="node">これで、何を勉強したか思い出せたかな？</Balloon>
      <Balloon char="node">
        もし、忘れているものがあれば、リンクからもう一度戻って復習するといい。
      </Balloon>
      <Balloon char="node">
        さてと、総合問題を解く準備はできているかな？
      </Balloon>
      <Balloon char="nakamoto">はい！</Balloon>
      <Balloon char="node">さぁ、今までの勉強の成果を見せてくれ。</Balloon>
      <Balloon char="nakamoto">
        ノード先生の名にかけて、精一杯頑張ります！
      </Balloon>
      <QuizGame quizzes={quizzes} chapter={6} />
      <Pager direction="back" />
      <Pager direction="forward" text="最後に" link="/conclude.html" />
    </Main>
  );
};

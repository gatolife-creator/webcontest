import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Quiz, QuizGame } from "../../components/QuizGame";
import { Balloon } from "../../components/Balloon";
import { Sum } from "../../components/Sum";
import { Important } from "../../components/Important";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const quizzes: Quiz[] = [
  {
    question: "ブロックの役割は？",
    options: ["トランザクションをまとめる", "個人情報を保護する", "特にない"],
    answer: "トランザクションをまとめる",
  },
  {
    question: "ブロックヘッダとは？",
    options: [
      "ブロックのメタデータを記録するもの",
      "トランザクションを記録するもの",
      "デジタル署名をするもの",
    ],
    answer: "ブロックのメタデータを記録するもの",
  },
  {
    question: "取引を承認するための仕組みのことをなんというか",
    options: [
      "コンセンサス・アルゴリズム",
      "ハッシュ関数",
      "デジタル署名",
      "P2P",
    ],
    answer: "コンセンサス・アルゴリズム",
  },
  {
    question: "PoWの問題点は？",
    options: ["電力を大量消費する", "カッコ悪い", "報酬が少ない"],
    answer: "電力を大量消費する",
  },
  {
    question: "PoSの問題点は？",
    options: [
      "通貨の流動性が低下する",
      "改ざん耐性が低い",
      "電力を大量消費する",
    ],
    answer: "通貨の流動性が低下する",
  },
];
export const C3S6 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "まとめ"}
        {lang === "en" && "Summary"}
      </MiniSectionTitle>

      <Balloon char="nakamoto">
        {lang === "ja" && "う〜ん...。たくさん勉強しすぎて頭がクラクラしてきました...。"}
        {lang === "en" && "Hmmm... I have learned so much that my head is starting to spin...."}

      </Balloon>
      <Balloon char="node">

        {lang === "ja" && "ブロックチェーンはたくさんの技術の結晶だ。無理もない。"}
        {lang === "en" && "Blockchain is the crystallization of a lot of technologies. It is difficult to understand."}

      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "最低限、以下のことが抑えられて入ればOKだ。"}
        {lang === "en" && "At a minimum, it is OK if the following things are kept in check."}

      </Balloon>

      <Sum>
        {lang === "ja" && <> <li>
          改ざんは、<Important>前後のハッシュ値
          </Important>
          の整合性が取れているかで検知できる。
        </li>
          <li>
            ブロックを承認する仕組みのことを
            <Important>コンセンサス・アルゴリズム</Important>という。
          </li>
          <li>
            PoWにおいて、<Important>コンピューターの性能が高い</Important>
            ほど、承認に成功する確率が高くなる。
          </li>
          <li>
            PoSにおいて、<Important>通貨をたくさん保持している</Important>
            ほど、承認に成功する確率が高くなる。
          </li></>}
        {lang === "en" && <>Tampering can be detected by the consistency of <Important>the hash value before and after</Important>.
          The mechanism for approving blocks is called <Important>a consensus algorithm</Important>.
          In PoW, <Important>the higher the computer performance</Important>, the higher the probability of successful approval.
          In PoS, <Important>the more currency you hold</Important>, the higher the probability of successful approval.
        </>}

      </Sum>


      <Balloon char="node">

        {lang === "ja" && "あっ、そういえばイザワ君がブロックチェーンのサンプルを作ってくれていたのだった。"}
        {lang === "en" && "Oh, by the way, Mr. Izawa had made a sample of blockchain"}

      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (<>
          よかったら、<Link
            to="/blockchain-sample.html"
            target="_blank"
            className="link-secondary link"
          >
            ここ
            <MdOpenInNew style={{ display: "inline", marginLeft: "0.5em" }} />
          </Link>
          から遊んでみてくれ。
        </>)}
        {lang === "en" && (<>
          If you like, you can try it <Link to="/blockchain-sample.html" target="_blank" className="link-secondary link">HERE<MdOpenInNew style={{ display: "inline", marginLeft: "0.5em" }} /></Link>.
        </>)}
      </Balloon>
      <div className="text-right"></div>
      <Balloon char="node">
      {lang === "ja" && "それでは、確認クイズに取り組んでくれ。"}
      {lang === "en" && "Now then, please take the confirmation quiz."}
      </Balloon>
      <QuizGame quizzes={quizzes} chapter={3}></QuizGame>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

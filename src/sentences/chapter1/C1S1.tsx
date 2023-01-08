import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { Sum } from "../../components/Sum";
import { BookInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C1S1 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <Crumb chapter={1} section={1} />
        <MiniSectionTitle>
          {lang === "ja" && "ブロックチェーンってなに？"}
          {lang === "en" && "What is Blockchain?"}
        </MiniSectionTitle>

        <Balloon char="nakamoto">
          {lang === "ja" && "ノード先生、ブロックチェーンってなんですか？"}
          {lang === "en" && "Prof. Node, what is blockchain?"}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && (
            <>
              <Important>データを安全に記録する</Important>
              ための仕組みの一つだ。
            </>
          )}
          {lang === "en" && (
            <>
              It is a{" "}
              <Important>mechanism for recording data securely.</Important>
            </>
          )}
        </Balloon>

        <Balloon char="nakamoto">
          {lang === "ja" && "安全に記録する、ですか？"}
          {lang === "en" && "Is it?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              そうだ、つまりブロックチェーン上に記録されたデータは
              <Important>改ざんが難しくなる</Important>
              のだ。そして何よりブロックチェーンの面白い点は、
              <Important>不特定多数</Important>
              によって、データが管理されていることだ。
            </>
          )}
          {lang === "en" && (
            <>
              Yes, in other words, recorded data on a blockchain is{" "}
              <Important>difficult to tamper with</Important>. And the most
              interesting point of blockchain is that the data is managed by{" "}
              <Important>unspecified number of people</Important>.
            </>
          )}
        </Balloon>

        <Balloon char="nakamoto">
          {lang === "ja" &&
            "不特定多数で管理？へぇ〜、すごいですね。それこそ誰かに改ざんされちゃいそう。どういう仕組みなんだろう？"}
          {lang === "en" &&
            "Managed by unspecified number of people? Wow, that's amazing. But, it can be tampered with. How does it work?"}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && (
            <>
              それは、ブロックチェーンに用いられている技術にある。そして驚くべきことに、それらの技術は決して
              <Important>真新しいものではない</Important>のだ。
            </>
          )}
          {lang === "en" && (
            <>
              The point is the technologies used in blockchain. And
              surprisingly, those technologies are{" "}
              <Important>not brand new</Important>.
            </>
          )}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && "それでは、ブロックチェーンについてまとめるぞ。"}
          {lang === "en" && "Let me summarize the blockchain."}
        </Balloon>

        <Sum>
          <li>
            {lang === "ja" && (
              <>
                ブロックチェーンとは、
                <Important>データを保存する仕組み</Important>
                の一つである。
              </>
            )}
            {lang === "en" && (
              <>
                Blockchain is a
                <Important> mechanism for storing data</Important>.
              </>
            )}
          </li>
          <li>
            {lang === "ja" && (
              <>
                ブロックチェーン上に記録されたデータは
                <Important>改ざんが困難</Important>である。
              </>
            )}
            {lang === "en" && (
              <>
                Recorded data on a blockchain is{" "}
                <Important>difficult to tamper with</Important>.
              </>
            )}
          </li>
          <li>
            {lang === "ja" && (
              <>
                ブロックチェーンのデータは
                <Important>不特定多数で管理</Important>される。
              </>
            )}
            {lang === "en" && (
              <>
                Data on blockchain is{" "}
                <Important>managed by unspecified number of people</Important>.
              </>
            )}
          </li>
        </Sum>
        <Balloon char="node">
          {lang === "ja" && "以上のことを頭の片隅に置いておこう。"}
          {lang === "en" && "Let's keep the above in mind."}
        </Balloon>
        <Pager direction="back" />
        <Pager direction="forward" />

        <MiniSectionTitle>
          {lang === "ja" && "参考文献"}
          {lang === "en" && "References"}
        </MiniSectionTitle>
        <BookInfo
          title="図解即戦力
            ブロックチェーンのしくみと開発がこれ1冊でしっかりわかる教科書"
          author="コンセンサスベイス・株式会社"
          publisher="技術評論社"
          year={2019}
        />
        <BookInfo
          title="決定版　ビットコイン＆ブロックチェーン"
          author="岡田 仁志"
          publisher="東洋経済新聞社"
          year={2018}
        />
      </Main>
    </>
  );
};

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
        <MiniSectionTitle>ブロックチェーンってなに？</MiniSectionTitle>

        {/* <Separator /> */}

        {/* <MiniSectionTitle>ブロックチェーンとは</MiniSectionTitle> */}

        <Balloon direction="right">
          ノード先生、ブロックチェーンってなんですか？
        </Balloon>

        <Balloon direction="left">
          <Important>データを安全に記録する</Important>ための仕組みの一つだ。
        </Balloon>

        <Balloon direction="right">安全に記録する、ですか？</Balloon>
        <Balloon direction="left">
          そうだ、つまりブロックチェーン上に記録されたデータは
          <Important>改ざんが難しくなる</Important>
          のだ。そして何よりブロックチェーンの面白い点は、
          <Important>不特定多数</Important>
          によって、データが管理されていることだ。
        </Balloon>

        <Balloon direction="right">
          不特定多数で管理？へぇ〜、すごいですね。それこそ誰かに改ざんされちゃいそう。どういう仕組みなんだろう？
        </Balloon>

        <Balloon direction="left">
          それは、ブロックチェーンに用いられている技術にある。そして驚くべきことに、それらの技術は決して
          <Important>真新しいものではない</Important>のだ。
        </Balloon>

        <Balloon direction="left">
          それでは、ブロックチェーンについてまとめるぞ。
        </Balloon>

        <Sum>
          <li>
            ブロックチェーンとは、<Important>データを保存する仕組み</Important>
            の一つである。
          </li>
          <li>
            ブロックチェーン上に記録されたデータは
            <Important>改ざんが困難</Important>である。
          </li>
          <li>
            ブロックチェーンのデータは
            <Important>不特定多数で管理</Important>される。
          </li>
        </Sum>

        <Balloon direction="left">以上のことを頭の片隅に置いておこう。</Balloon>

        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

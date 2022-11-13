// TODO ブロックチェーンの長所を解説することは絶対条件なので、以下の文を参考に修正する。

import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Important } from "../../components/Important";

export const C1S3 = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Main>
        <MiniSectionTitle>ブロックチェーンの長所</MiniSectionTitle>
        <Balloon direction="right">
          ノード先生、ここまでブロックチェーンの歴史とかを見てきましたけど、結局何がすごいんですか？
        </Balloon>
        <Balloon direction="left">
          それはズバリ、<Important>改ざんが難しい</Important>点、
          <Important>安定して動作する</Important>点、 そして、
          <Important>情報の透明性が高い</Important>点だ。
        </Balloon>
        <SubSectionTitle>改ざんが困難</SubSectionTitle>
        <Balloon direction="left">
          これは先ほども説明したが、ブロックチェーンは改ざんが難しいデータベースの一種であるが、
        </Balloon>
        <Balloon direction="left">
          <Important>ハッシュ関数</Important>、
          <Important>コンセンサス・アルゴリズム</Important>
          などが、改ざんを難しくするのに一役買っている。
        </Balloon>
        <SubSectionTitle>安定して動作する</SubSectionTitle>
        <Balloon direction="left">
          不特定多数のコンピューターでデータを分散管理、通信している。
        </Balloon>

        <Balloon direction="left">
          実際、ビットコインは2009年から
          <Important>約{year - 2009}年間</Important>もの間動き続けている。
        </Balloon>

        <SubSectionTitle>情報の透明性が高い</SubSectionTitle>
        <Balloon direction="left">
          ブロックチェーンの上のデータなら、誰もがすべて見ることができる。
        </Balloon>

        <Balloon direction="left">
          このような特徴を踏まえて、<Important>所有権</Important>や
          <Important>著作権</Important>
          の管理などへの活用が期待されている。
        </Balloon>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

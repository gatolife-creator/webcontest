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
          そして、ブロックチェーンでは、
          <Important>不特定多数</Important>のコンピューターでデータを
          <Important>分散管理</Important>
          し、相互に通信している。
        </Balloon>
        <Balloon direction="right">
          それが安定して動作することと関係があるんですか？
        </Balloon>
        <Balloon direction="left">
          ざっくりいうと、一部のコンピューターが壊れたりしても、それを
          <Important>肩代わりできる</Important>
          ものがあるから、システムが安定して動作する、といったところかな。
        </Balloon>

        <Balloon direction="left">
          実際、ビットコインは2009年から
          <Important>約{year - 2009}年間</Important>もの間動き続けているのだ。
        </Balloon>
        <Balloon direction="right">{year - 2009}年間もですか！？</Balloon>
        <Balloon direction="left">
          そうだ。これを実現するのには
          <Important>P2P（ピア・ツー・ピア）</Important>
          という技術が用いられている。そのうち詳しく解説しよう。
        </Balloon>

        <SubSectionTitle>情報の透明性が高い</SubSectionTitle>
        <Balloon direction="left">
          さらにブロックチェーンの上のデータは、誰もが見ることができる。
        </Balloon>
        <Balloon direction="right">例えばどんなデータがありますか？</Balloon>
        <Balloon direction="left">
          ブロックチェーンの用途にもよるが、誰が誰にお金を送金したのか、などといったデータを確認することが可能だ。
        </Balloon>

        <Balloon direction="left">
          このような特徴を踏まえて、<Important>所有権</Important>や
          <Important>著作権</Important>
          の管理などへの活用が期待されているのだ。
        </Balloon>
        <Balloon direction="right">
          ブロックチェーンを調べれば、誰のものかすぐにわかりますものね！
        </Balloon>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

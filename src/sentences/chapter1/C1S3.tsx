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
      <Main duration="long">
        <MiniSectionTitle>ブロックチェーンの長所</MiniSectionTitle>
        <Balloon char="nakamoto">
          ノード先生、ここまでブロックチェーンの歴史とかを見てきましたけど、結局何がすごいんですか？
        </Balloon>
        <Balloon char="node">
          それはズバリ、<Important>改ざんが難しい</Important>点、
          <Important>安定して動作する</Important>点、 そして、
          <Important>情報の透明性が高い</Important>点だ。
        </Balloon>
        <SubSectionTitle>改ざんが困難</SubSectionTitle>
        <Balloon char="node">
          ブロックチェーンでは、
          <Important>ハッシュ関数</Important>、
          <Important>コンセンサス・アルゴリズム</Important>
          などの技術を駆使して、改ざんの難易度を上げている。
        </Balloon>

        <Balloon char="nakamoto">
          改ざんがしづらいと、どんないいことがあるんですか？
        </Balloon>
        <Balloon char="node">そうだな...。</Balloon>
        <Balloon char="node">
          絶対に改ざんされてはならないもの、例えば公文書とか選挙の結果などに活用することができる。
        </Balloon>
        <Balloon char="node">
          実際に2020年の米大統領選挙では、試験的にブロックチェーンを用いたアプリケーションで投票も行われた。
        </Balloon>
        <Balloon char="nakamoto">大統領選挙にも！？</Balloon>
        <Balloon char="ether">今後の活用にも期待できそうですね。</Balloon>

        <SubSectionTitle>安定して動作する</SubSectionTitle>
        <Balloon char="node">
          そして、ブロックチェーンでは、
          <Important>不特定多数</Important>のコンピューターでデータを
          <Important>分散管理</Important>
          し、相互に通信している。
        </Balloon>
        <Balloon char="nakamoto">
          それが安定して動作することと関係があるんですか？
        </Balloon>
        <Balloon char="node">
          ざっくりいうと、一部のコンピューターが壊れたりしても、それを
          <Important>肩代わりできる</Important>
          ものがあるから、システムが安定して動作する、といったところかな。
        </Balloon>

        <Balloon char="node">
          実際、ビットコインは2009年から
          <Important>約{year - 2009}年間</Important>もの間動き続けているのだ。
        </Balloon>
        <Balloon char="nakamoto">{year - 2009}年間もですか！？</Balloon>
        <Balloon char="node">
          そうだ。これを実現するのには
          <Important>P2P（ピア・ツー・ピア）</Important>
          という技術が用いられている。そのうち詳しく解説しよう。
        </Balloon>

        <SubSectionTitle>情報の透明性が高い</SubSectionTitle>
        <Balloon char="node">
          さらにブロックチェーンの上のデータは、誰もが見ることができる。
        </Balloon>
        <Balloon char="nakamoto">例えばどんなデータがありますか？</Balloon>
        <Balloon char="node">
          ブロックチェーンの用途にもよるが、誰が誰にお金を送金したのか、などといったデータを確認することが可能だ。
        </Balloon>

        <Balloon char="node">
          このような特徴を踏まえて、<Important>所有権</Important>や
          <Important>著作権</Important>
          の管理などへの活用が期待されているのだ。
        </Balloon>
        <Balloon char="nakamoto">
          ブロックチェーンを調べれば、誰のものかすぐにわかりますものね！
        </Balloon>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

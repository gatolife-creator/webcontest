import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { Sum } from "../../components/Sum";
import { BookInfo } from "../../pages/Reference";

export const C1S1 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>ブロックチェーンってなに？</MiniSectionTitle>

        <Balloon char="nakamoto">
          ノード先生、ブロックチェーンってなんですか？
        </Balloon>

        <Balloon char="node">
          <Important>データを安全に記録する</Important>ための仕組みの一つだ。
        </Balloon>

        <Balloon char="nakamoto">安全に記録する、ですか？</Balloon>
        <Balloon char="node">
          そうだ、つまりブロックチェーン上に記録されたデータは
          <Important>改ざんが難しくなる</Important>
          のだ。そして何よりブロックチェーンの面白い点は、
          <Important>不特定多数</Important>
          によって、データが管理されていることだ。
        </Balloon>

        <Balloon char="nakamoto">
          不特定多数で管理？へぇ〜、すごいですね。それこそ誰かに改ざんされちゃいそう。どういう仕組みなんだろう？
        </Balloon>

        <Balloon char="node">
          それは、ブロックチェーンに用いられている技術にある。そして驚くべきことに、それらの技術は決して
          <Important>真新しいものではない</Important>のだ。
        </Balloon>

        <Balloon char="node">
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
        <Balloon char="node">以上のことを頭の片隅に置いておこう。</Balloon>
        <Pager direction="back" />
        <Pager direction="forward" />

        <MiniSectionTitle>参考文献</MiniSectionTitle>
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

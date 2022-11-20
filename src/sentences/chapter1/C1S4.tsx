// TODO ブロックチェーンの長所を解説することは絶対条件なので、以下の文を参考に修正する。

import React from "react";

import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from '../../components/Balloon';

export const C1S4 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>サトシ・ナカモトは何者？</MiniSectionTitle>
        <Balloon char="nakamoto">
          そういえば、ビットコインの開発者のサトシ・ナカモトってどんな人なんですか？
        </Balloon>
        <Balloon char="node">
          結論から言うと、誰なのかいまだにわかっていない。
        </Balloon>
        <Balloon char="nakamoto">え〜、つまんないの。</Balloon>
        <Balloon char="node">
          それでは、サトシ・ナカモトだと噂されている人物を紹介しよう。
        </Balloon>
        <MiniSectionTitle>ハル・フィニー説</MiniSectionTitle>
        <Balloon char="nakamoto">あれ、日本人の名前じゃない？</Balloon>
        <Balloon char="node">
          実は、サトシ・ナカモトの書く英文は非常に流暢であり、活動している時間帯はヨーロッパの営業時間が主だった。
        </Balloon>
        <Balloon char="node">
          このことから、サトシ・ナカモトは日本人ではなかったと考えられている。
        </Balloon>
        <Balloon char="nakamoto">
          そうだったのか...。それで、ハル・フィニーさんはどんな人物なんですか？
        </Balloon>
        <Balloon char="node">
          彼は、ソフトウェア開発者であり、ビットコインの最初期からの利用者だった。
        </Balloon>

        <MiniSectionTitle>金子勇説</MiniSectionTitle>
        {/* <Balloon></Balloon> */}
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

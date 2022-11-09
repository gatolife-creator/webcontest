import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

import { Important } from "../../components/Important";

export const C1S2 = () => {
  return (
    <Main>
      <MiniSectionTitle>ブロックチェーンの歴史</MiniSectionTitle>
      <Balloon direction="left">
        ブロックチェーンの前身となったアイデアは、1991年にまで遡る。
      </Balloon>
      <Balloon direction="right">かなり昔まで遡りますね。</Balloon>
      <Balloon direction="left">
        デジタル文書に<Important>タイムスタンプ</Important>
        をつけることで、文書の改ざんを防ぐというものだ。スチュアート・ヘイバー氏とスコット・ストルネッタ氏によって発表された。
      </Balloon>
      <Balloon direction="right">タイムスタンプって何ですか？</Balloon>
      <Balloon direction="left">
        簡単にいうと、データが<Important>作成された日時</Important>
        、作成された日時から<Important>改ざんされていない</Important>
        ことを証明する技術だ。
      </Balloon>
      <Pager
        direction="back"
        text="第一節"
        link="/content.html?chapter=1&section=1"
      />
      <Pager
        direction="forward"
        text="第三節"
        link="/content.html?chapter=1&section=3"
      />
    </Main>
  );
};

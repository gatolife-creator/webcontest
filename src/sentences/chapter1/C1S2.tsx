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
      <SubSectionTitle>デジタル文書とタイムスタンプ</SubSectionTitle>
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
      <Balloon direction="right">すごく便利じゃないですか！</Balloon>
      <Balloon direction="left">あぁ、しかし残念なことに、ビットコインが誕生する4年まえに特許が切れてしまったのだ。</Balloon>
      <p>："How to Time-Stamp a Digital Document"</p>

      <SubSectionTitle>ビットコイン誕生</SubSectionTitle>
      <Balloon direction="left">2018年、サトシ・ナカモトが、<Important>ビットコイン<Important />と呼ばれる電子決済システムについての論文を発表した。</Balloon>
      <Balloon direction="left">そして、2019年に運用開始。遂に世界初の仮想通貨、ビットコインの誕生だ！</Balloon>
      <Balloon direction="right">どんどんパフパフ～！</Balloon>
      <Balloon direction="left">そして、そのビットコインと呼ばれる電子決済システムに使われた技術が、後に<Important>ブロックチェーン</Important>として名をはせることになる。</Balloon>
      <Balloon direction="right">遂にブロックチェーン技術が誕生しましたね！</Balloon>
      <Balloon direction="left">その後、ビットコインの課題を解決すべく、たくさんの<Important>アルトコイン<Important />（ビットコインをもとにした仮想通貨）が誕生した。</Balloon>
      <Ballonn direction="left">その中でも革命的なものを次に見ていこう。</Balloon>

      <SubSectionTitle>ブロックチェーンの汎用化</SubSectionTitle>
      <Balloon direction="right">先生、革命的なアルトコインって何ですか？早く教えてくださいよ！</Balloon>
      <Balloon direction="left">まぁまぁ、落ち着け。実は仮想通貨よりもスケールの大きい物なのだよ。</Balloon>
      <Balloon direction="right">なおさら気になりますよ！</Balloon>
      <Balloon direction="left"><Important></Important></Balloon>
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

import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

import { Important } from "../../components/Important";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Image } from "../../components/Image";

export const C1S2 = () => {
  return (
    <Main>
      <MiniSectionTitle>ブロックチェーンの歴史</MiniSectionTitle>
      <SubSectionTitle>デジタル文書とタイムスタンプ</SubSectionTitle>
      <Balloon direction="left">
        ブロックチェーンの前身となったアイデアは、1991年にまでさかのぼる。
      </Balloon>
      <Balloon direction="right">かなり昔までさかのぼりますね。</Balloon>
      <Balloon direction="left">
        デジタル文書に<Important>タイムスタンプ</Important>
        をつけることで、文書の改ざんを防ぐというものだ。スチュアート・ヘイバー氏とスコット・ストルネッタ氏によって発表された。
      </Balloon>
      <Balloon direction="right">タイムスタンプって何ですか？</Balloon>
      <Balloon direction="left">
        簡単にいうと、データが<Important>作成された日時</Important>
        、それと<Important>改ざんされていない</Important>
        ことを証明する技術だ。
      </Balloon>
      <Balloon direction="right">すごく便利じゃないですか！</Balloon>
      <Balloon direction="left">
        あぁ、しかし残念なことに、ビットコインが誕生する4年まえに特許が切れてしまったのだ。
      </Balloon>
      <p>参考："How to Time-Stamp a Digital Document"</p>

      <SubSectionTitle>ビットコイン誕生</SubSectionTitle>
      <Image src={process.env.PUBLIC_URL + "/imgs/bitcoin-logo.svg"}></Image>
      <Balloon direction="left">
        2018年、サトシ・ナカモトが、<Important>ビットコイン</Important>
        （bitcoin） と呼ばれる電子決済システムについての論文を発表した。
      </Balloon>
      <Balloon direction="left">
        そして、2019年に運用開始。遂に世界初の仮想通貨、ビットコインの誕生だ！
      </Balloon>
      <Balloon direction="right">どんどんパフパフ～！</Balloon>
      <Balloon direction="left">
        そして、そのビットコインと呼ばれる電子決済システムに使われた技術が、後に
        <Important>ブロックチェーン</Important>として名をはせることになる。
      </Balloon>
      <Balloon direction="right">
        遂にブロックチェーン技術が誕生しましたね！
      </Balloon>
      <Balloon direction="left">
        その後、ビットコインの課題を解決すべく、たくさんの
        <Important>アルトコイン</Important>
        （ビットコインをもとにした仮想通貨）が誕生した。
      </Balloon>
      <Balloon direction="left">
        その中でも革命的なものを次に見ていこう。
      </Balloon>

      <SubSectionTitle>ブロックチェーンの汎用化</SubSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/ethereum-logo-landscape-black.png"}
      ></Image>
      <Balloon direction="right">
        先生、革命的なアルトコインって何ですか？早く教えてくださいよ！
      </Balloon>
      <Balloon direction="left">
        まぁまぁ、落ち着け。実は仮想通貨よりもスケールの大きい物なのだよ。
      </Balloon>
      <Balloon direction="right">なおさら気になりますよ！</Balloon>
      <Balloon direction="left">
        その名も<Important>イーサリアム</Important>（ethereum）。
        何とブロックチェーン上で<Important>プログラムの記録、実行</Important>
        ができてしまうのだ。
      </Balloon>
      <Balloon direction="right">それのどこが画期的なんですか？</Balloon>
      <Balloon direction="left">バカヤロウ！</Balloon>
      <Balloon direction="right">いてっ。</Balloon>
      <Balloon direction="left">
        今までブロックチェーンに記録されていたのは
        <Important>取引履歴</Important>
        だけだった。しかしプログラムを記録できるようになったことで、仮想通貨だけでなく
        <Important>様々な分野に応用</Important>できるようになった。
      </Balloon>
      <Balloon direction="left">
        ブロックチェーンの汎用化、というわけですね。
      </Balloon>
      <Balloon direction="left">
        イーサリアムを皮切りに、金融、IoT、ゲーム、教育などへの活用に向けて開発が活発化することになったのだ。
      </Balloon>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

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
    <Main duration="long">
      <MiniSectionTitle>ブロックチェーンの歴史</MiniSectionTitle>
      <SubSectionTitle>デジタル文書とタイムスタンプ</SubSectionTitle>
      <Balloon char="node">
        ブロックチェーンの前身となったアイデアは、1991年にまでさかのぼる。
      </Balloon>
      <Balloon char="nakamoto">かなり昔までさかのぼりますね。</Balloon>
      <Balloon char="node">
        デジタル文書に<Important>タイムスタンプ</Important>
        をつけることで、文書の改ざんを防ぐというものだ。スチュアート・ヘイバー氏とスコット・ストルネッタ氏によって発表された。
      </Balloon>
      <Balloon char="nakamoto">タイムスタンプって何ですか？</Balloon>
      <Balloon char="node">
        簡単にいうと、データが<Important>作成された日時</Important>
        、それと<Important>改ざんされていない</Important>
        ことを証明する技術だ。
      </Balloon>
      <Balloon char="nakamoto">すごく便利じゃないですか！</Balloon>
      <Balloon char="node">
        あぁ、しかし残念なことに、ビットコインが誕生する4年まえに特許が切れてしまったのだ。
      </Balloon>
      <p>参考："How to Time-Stamp a Digital Document"</p>

      <SubSectionTitle>ビットコイン誕生</SubSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/bitcoin-logo.svg"}
        style={{}}
      ></Image>
      <div className="text-right">
        <small>Bitcoin Forumより引用</small>
      </div>
      <Balloon char="node">
        2018年、サトシ・ナカモトを語る人物が、
        <Important>ビットコイン</Important>
        （bitcoin） と呼ばれる電子決済システムについての論文を発表した。
      </Balloon>
      <Balloon char="node">
        そして、2019年に運用開始。遂に世界初の仮想通貨、ビットコインの誕生だ！
      </Balloon>
      <Balloon char="nakamoto">どんどんパフパフ～！</Balloon>
      <Balloon char="node">
        そして、そのビットコインと呼ばれる電子決済システムに使われた技術が、後に
        <Important>ブロックチェーン</Important>として名をはせることになる。
      </Balloon>
      <Balloon char="nakamoto">
        遂にブロックチェーン技術が誕生しましたね！
      </Balloon>
      <Balloon char="node">
        その後、ビットコインの課題を解決すべく、たくさんの
        <Important>アルトコイン</Important>
        （ビットコインをもとにした仮想通貨）が誕生した。
      </Balloon>
      <Balloon char="node">その中でも革命的なものを次に見ていこう。</Balloon>

      <SubSectionTitle>ブロックチェーンの汎用化</SubSectionTitle>
      {/* <Image
        // src={process.env.PUBLIC_URL + "/imgs/ethereum-logo-landscape-black.png"}
      ></Image> */}
      <Balloon char="nakamoto">
        先生、革命的なアルトコインって何ですか？早く教えてくださいよ！
      </Balloon>
      <Balloon char="node">
        まぁまぁ、落ち着け。実は仮想通貨よりもスケールの大きい物なのだよ。
      </Balloon>
      <Balloon char="nakamoto">なおさら気になりますよ！</Balloon>
      <Balloon char="node">
        その名も<Important>イーサリアム</Important>（ethereum）。
        何とブロックチェーン上で<Important>プログラムの記録、実行</Important>
        ができてしまうのだ。
      </Balloon>
      <Balloon char="nakamoto">それのどこが画期的なんですか？</Balloon>
      <Balloon char="node">バカヤロウ！</Balloon>
      <Balloon char="nakamoto">いてっ。</Balloon>
      <Balloon char="node">
        今までブロックチェーンに記録されていたのは、仮想通貨の
        <Important>取引履歴</Important>
        だけだった。
      </Balloon>
      <Balloon char="node">
        しかし、プログラムを記録できるようになったことで、仮想通貨だけでなく
        <Important>様々な分野に応用</Important>できるようになったのだ。
      </Balloon>
      <Balloon char="ether">
        ブロックチェーンの汎用化、というわけですね。
      </Balloon>
      <Balloon char="node">
        イーサリアムを皮切りに、金融、IoT、ゲーム、教育などへの活用に向けて開発が活発化することになったのだ。
      </Balloon>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

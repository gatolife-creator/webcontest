import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from '../../components/Balloon';

export const C3S2 = () => {
  return (
    <Main duration="long">
      <MiniSectionTitle>処理の流れ</MiniSectionTitle>
      <Balloon char="node">ブロックチェーンの基本構造を理解したところで、各コンピューターが持っているブロックチェーンの情報をどのようにして共有しているかを見ていこう。</Balloon>
      <Balloon char="satoshi">いよいよブロックチェーンの仕組みですね！</Balloon>
      <Balloon char="node">今回はビットコインのブロックチェーンを参考に見ていくぞ。</Balloon>
      <Balloon char="node">まず、誰かに通貨を送る際にトランザクションを作成する。</Balloon>
      <Balloon char="satoshi">ふむふむ。</Balloon>
      <Balloon char="node">この時、トランザクションの送信者アドレスには、自身の作成した公開鍵を、受信者アドレスには、送る相手の公開鍵を指定する。</Balloon>
      <Balloon char="node">そして、最後に自分の秘密鍵を使って、トランザクションに署名して、トランザクションの作成は終了だ。</Balloon>
      <Balloon char="satoshi">ここでデジタル署名が使われているんですか？</Balloon>
      <Balloon char="node">そうだ。勝手に他の人に自分の仮想通貨を使われたら困るだろう？</Balloon>
      <Balloon char="satoshi">なるほど、デジタル署名は否認を防止するもの、裏を返せば自分が作成したトランザクションであることが証明できるのですね。</Balloon>
      <Balloon char="node">トランザクションもできたし、これで他のコンピューターに送信と行きたいところだが、ここで一手間。</Balloon>
      <Balloon char="node">作成したトランザクションが有効であるか検証する。</Balloon>
      <Balloon char="satoshi">なんで送信する前に確認が必要なんですか？</Balloon>
      <Balloon char="node">それは誤って、もしくは悪意があって無効なトランザクションを大量に送りつけることで、ネットワークに負荷がかかるのを防ぐためだ。</Balloon>
      <Balloon char="node">そして、そのトランザクションを受け取った他のコンピューターは再びトランザクションが有効か確認する。</Balloon>
      <Balloon char="satoshi">二重チェックですね！</Balloon>
      <Balloon char="node">それが終わったら、トランザクションプールというところに一時保管する。</Balloon>
      <Balloon char="satoshi">ブロックチェーンには追加しないんですか？</Balloon>
      <Balloon char="node">うむ。</Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

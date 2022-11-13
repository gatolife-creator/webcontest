import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { Image } from "../../components/Image";

export const C3S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>コンセンサスアルゴリズム（1）</MiniSectionTitle>
      <Balloon char="node">
        さっきブロックチェーンでは、<Important>承認</Important>
        作業が行われると言ったな。
      </Balloon>
      <Balloon char="satoshi">はい。</Balloon>
      <Balloon char="node">
        この承認を実現する仕組みのことを
        <Important>コンセンサスアルゴリズム</Important>
        と言う。ブロックチェーンによってその仕組みは異なるが、まずはビットコインを例に見てみよう。
      </Balloon>

      <SubSectionTitle>PoW（Proof of Work）</SubSectionTitle>
      <Balloon char="satoshi">Proof of Work...。仕事の証明？</Balloon>
      <Balloon char="node">
        そう。PoW では世界中のコンピュータが
        <Important>競って仕事をする</Important>ことで、ブロックを生成している。
      </Balloon>
      <Balloon char="node">
        この仕事ことを<Important>マイニング</Important>
        、仕事をするコンピューターのことを<Important>マイナー</Important>
        と呼ばれることが多い。
      </Balloon>
      <Balloon char="satoshi">
        マイニング...？金でも掘り当てるんですか？
      </Balloon>
      <Balloon char="node">あながち間違いでもない。</Balloon>

      <SubSectionTitle>PoWの仕組み</SubSectionTitle>

      <Balloon char="satoshi">どんな仕事をしているのですか？</Balloon>
      <Balloon char="node">
        <Important>ブロック＋ナンス値</Important>
        のハッシュ値を求めたときに、先頭に特定の数以上0が並ぶ値を求めるのだ。
      </Balloon>
      <Balloon char="satoshi">うん？</Balloon>
      <Balloon char="node">イザワ君、PoW の図を頼む。</Balloon>
      <Balloon char="ether">用意しました。</Balloon>
      <Balloon char="node">ありがとう。</Balloon>
      <Balloon char="node">
        まずブロック＋ナンス値のハッシュ値を求める。ここまではいいかな？
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/hash-from-block-and-nonce.png"}
      />
      <Balloon char="satoshi">はい。</Balloon>
      <Balloon char="node">
        さて、今求めたハッシュ値の先頭は87ac...だな。
      </Balloon>
      <Balloon char="node">
        もしハッシュ値の頭3桁が0である条件を満たさないといけないとき、ナンス値を変えてもう一度この作業を行う。
      </Balloon>
      <Balloon char="satoshi">ふむふむ。</Balloon>
      <Balloon char="node">
        そして、条件を満たしたコンピューターが晴れてブロックをブロックチェーンに繋げることができる。
      </Balloon>
      <Balloon char="satoshi">なんとなく流れは掴めてきたかも...！</Balloon>

      <SubSectionTitle>PoWの真髄</SubSectionTitle>
      <Balloon char="satoshi">
        うん？そもそもなんで競わせる必要があるんですか。
      </Balloon>
      <Balloon char="node">それこそがPoWの真髄だ。</Balloon>
      <Balloon char="node">
        PoWでは、一番早くブロックをチェーンに繋げられたものに、新しく刷られた仮想通貨がプレゼントされる。
      </Balloon>
      <Balloon char="satoshi">みんな仮想通貨が欲しいから競争するのか！</Balloon>
      <Balloon char="node">
        改ざんをしようと思ったら、この激しい競争で抜きん出なければならないわけだ。
      </Balloon>
      <Balloon char="node">
        改ざんを試みて失敗するくらいだったら、承認作業に貢献して報酬をもらった方が合理的だよな。
      </Balloon>
      <Balloon char="satoshi">確かに。</Balloon>
      <Balloon char="ether">
        IT技術のみならず、<Important>経済的な観点</Important>
        からもよく考えられている、奥深いアルゴリズムな訳ですね。
      </Balloon>

      <SubSectionTitle>PoWの問題点</SubSectionTitle>
      <Balloon char="satoshi">PoWばんざーい！PoWばんざーい！</Balloon>
      <Balloon char="satoshi">人類の叡智だProof of Work♪</Balloon>
      <Balloon char="ether">（何をやっているんだ...？）</Balloon>
      <Balloon char="node">おいおい、両手あげて喜ぶにはまだ早いぞ。</Balloon>
      <Balloon char="satoshi">へ？</Balloon>
      <Balloon char="node">
        確かにPoWは優れたコンセンサス・アルゴリズムだが、まだまだ課題は残っている。
      </Balloon>
      <Balloon char="node">
        まず、非常に<Important>多くの電力を要する</Important>
        と言うデメリットがある。
      </Balloon>
      <Balloon char="satoshi">そうなんですか？</Balloon>
      <Balloon char="node">
        ビットコインを国と考えた場合、国別電力使用量のランキング
        <Important>トップ30</Important>
        にランクインするほどの電力を消費している。
      </Balloon>
      <Balloon char="node">
        それに、使われ始めたばかりでマイナーが少ない場合には、
        <Important>改ざんの危険性が高まる</Important>。
      </Balloon>
      <Balloon char="satoshi">あれ、改ざんは難しかったんじゃ...？</Balloon>
      <Balloon char="node">
        先ほども言ったように、PoWは
        <Important>競争に勝ったものがブロックの承認を行える</Important>。
      </Balloon>
      <Balloon char="node">
        裏を返せば、競争に打ち勝てば改ざんが可能なわけだ。
      </Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

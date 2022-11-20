import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C2S4 = () => {
  return (
    <Main duration="long">
      <MiniSectionTitle>デジタル署名</MiniSectionTitle>
      <Balloon char="nakamoto">デジタル署名って何ができるんですか？</Balloon>
      <Balloon char="node">
        改ざんの検出、そして<Important>否認の防止</Important>だ。
      </Balloon>
      <Balloon char="nakamoto">否認？</Balloon>
      <Balloon char="node">
        インターネット上では、通常誰がデータを作成し、送信したのかを
        <Important>特定するのは困難</Important>だ。
      </Balloon>
      <Balloon char="node">
        この特徴を利用して、データを送信した後に「自分は送信していない」などと否認することができてしまう。
      </Balloon>
      <Balloon char="nakamoto">なるほど...。</Balloon>
      <Balloon char="node">
        そこで、<Important>デジタル署名</Important>の出番だ。
      </Balloon>
      <Balloon char="node">
        デジタル署名では、公開鍵暗号方式と同じく、公開鍵と秘密鍵を利用した仕組みだ。
      </Balloon>
      <Balloon char="nakamoto">
        公開鍵暗号方式とデジタル署名では、鍵の使い方が違うんですか？
      </Balloon>
      <Balloon char="node">
        そう。公開鍵暗号方式では、暗号化に公開鍵を利用していたが、デジタル署名では「秘密鍵」を利用する。
      </Balloon>
      <Balloon char="nakamoto"> なんで秘密鍵で暗号化するんですか？</Balloon>
      <Balloon char="node">
        じゃあ、もしも秘密鍵で暗号化にされたデータを、公開鍵で復号できた場合どんなことがわかるかな？
      </Balloon>
      <Balloon char="nakamoto">
        その公開鍵は、データを暗号化した秘密鍵と対応していることがわかりますね。
      </Balloon>
      <Balloon char="node">じゃあその秘密鍵の所持者は？</Balloon>
      <Balloon char="nakamoto">
        あぁ、なるほど！データの送信者しかいない。だからデータの送信者を特定できるんだ。
      </Balloon>

      <Balloon char="node">
        さて、下の図を見てみよう。まずは、送信者は送信したいデータのハッシュ値を求める。
      </Balloon>
      <Balloon char="node">
        それから、そのハッシュ値を秘密鍵を使って暗号化することで、署名の完成。目的のデータと一緒に送信する。
      </Balloon>
      <Balloon char="nakamoto">なんでこんなところにもハッシュ関数が？</Balloon>
      <Balloon char="node">
        理論上はデータを暗号化したものを署名として使用できる。
      </Balloon>
      <Balloon char="node">
        しかし、暗号化には時間がかかってしまうため、ハッシュ値にしてデータ量を減らしてから暗号化しているのだ。
      </Balloon>
      <Balloon char="nakamoto">なるほど〜。</Balloon>
      <Balloon char="node">さて、今度は受信者側の手順を紹介するぞ。</Balloon>
      <Balloon char="node">
        目的のデータと署名を受け取ったら、まずはデータをハッシュ化する。
      </Balloon>
      <Balloon char="node">
        次に、事前に受け取っていた公開鍵で署名を復号化する。すると、ハッシュ値が出てくるよな？
      </Balloon>
      <Balloon char="nakamoto">
        あとはデータのハッシュ値と復号化で得られたハッシュ値と照らし合わせるんですね！
      </Balloon>
      <Balloon char="node">
        その通りだ。ナカモト君、ハッシュ値のことになると急に頭が冴えるな。
      </Balloon>
      <Balloon char="nakamoto">いやぁそれほどでも///</Balloon>
      <Balloon char="ether">（これって褒められてるのか...？）</Balloon>
      <Balloon char="node">
        と言うことはさておき、ここでハッシュ値が一致すれば、有効な署名、一致していなければ無効ということになる。
      </Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

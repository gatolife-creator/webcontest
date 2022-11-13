import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from '../../components/Balloon';
import { Sum } from "../../components/Sum";
import { Important } from "../../components/Important";

export const C2S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>デジタル署名</MiniSectionTitle>
      <Balloon char="satoshi">デジタル署名って何ができるんですか？</Balloon>
      <Balloon char="node">
        改ざんの検出、そして<Important>否認の防止</Important>だ。
      </Balloon>
      <Balloon char="satoshi">否認？</Balloon>
      <Balloon char="node">
        インターネット上では、通常誰がデータを作成し、送信したのかを
        <Important>特定するのは困難</Important>だ。
      </Balloon>
      <Balloon char="node">
        この特徴を利用して、データを送信した後に「自分は送信していない」などと否認することができてしまう。
      </Balloon>
      <Balloon char="satoshi">なるほど...。</Balloon>
      <Balloon char="node">
        そこで、<Important>デジタル署名</Important>の出番だ。
      </Balloon>
      <Balloon char="node">
        公開鍵で復号化できるようにすることで、誰もが復号化できるようにしている。
      </Balloon>
      <Balloon char="satoshi">
        それじゃあ暗号化の意味ないじゃないですか！
      </Balloon>
      <Balloon char="node">
        そこが重要なのだよ。誰もが復号化できるようにすることで、誰もがデータ送信者が誰なのかを確かめることができるのだ。
      </Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

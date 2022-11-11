import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Sum } from "../../components/Sum";
import { Important } from "../../components/Important";

export const C2S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>デジタル署名</MiniSectionTitle>
      <Balloon direction="right">デジタル署名って何ができるんですか？</Balloon>
      <Balloon direction="left">
        改ざんの検出、そして<Important>否認の防止</Important>だ。
      </Balloon>
      <Balloon direction="right">否認？</Balloon>
      <Balloon direction="left">インターネット上では、通常誰がデータを作成し、送信したのかを<Important>特定するのは困難</Important>だ。</Balloon>
      <Balloon direction="left">この特徴を利用して、データを送信した後に「自分は送信していない」などと否認することができてしまう。</Balloon>
      <Balloon direction="left">
        公開鍵で復号化できるようにすることで、誰もが復号化できるようにしている。
      </Balloon>
      <Balloon direction="right">
        それじゃあ暗号化の意味ないじゃないですか！
      </Balloon>
      <Balloon direction="left">
        そこが重要なのだよ。誰もが複合化できるようにすることで、誰もが署名（データ送信者の照合）を確認することができるのだ。
      </Balloon>

      <Sum>
        ※<Important>否認</Important>
        ・・・データを送信したにも関わらず、送信したことを否定すること。インターネット上において、どれが元のデータであるか区別することは難しいため、デジタル署名のような方法が採用されている。
      </Sum>

      <Pager
        direction="back"
        text="第二節"
      />
      <Pager
        direction="forward"
        text="第三章"
      />
    </Main>
  );
};

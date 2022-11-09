import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Sum } from "../../components/Sum";

export const C2S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>署名</MiniSectionTitle>
      <Balloon direction="right">デジタル署名って何ができるんですか？</Balloon>
      <Balloon direction="left">
        改ざんの検出、そして<strong>否認の防止</strong>だ。
      </Balloon>

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
        ※<strong>否認</strong>
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

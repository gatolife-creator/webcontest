import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";

export const C5S1 = () => {
  return (
    <Main>
      <MiniSectionTitle>金融</MiniSectionTitle>
      <Balloon direction="left">
        ナカモト君、君はお金を送金するとき、どのような手続きをするかね？
      </Balloon>
      <Balloon direction="right">
        銀行の口座を開設した後に、数百円の手数料を払って振り込みます。
      </Balloon>
      <Balloon direction="left">
        そうかそうか。それじゃあ、海外送金の場合はどうする？
      </Balloon>
      <Balloon direction="right">
        滅多にないですけど、数千円の手数料払って送金することになりますね。
      </Balloon>
      <Balloon direction="left">
        そうだな。現金を手渡しする分にはお金はかからない。しかし、銀行を介してお金を渡すとなると手数料がかかる。
      </Balloon>
      <Balloon direction="right">
        よく考えると損した気分になりますね...。
      </Balloon>
      <Balloon direction="left">
        ハッハッハ。私もだ。ところが仮想通貨はほとんど手数料がかからない。海外送金にしても、かかって数百円程度だ。
      </Balloon>
      <Balloon direction="right">
        おぉ！それはいいですね！早速日本政府もブロックチェーンの導入を...
      </Balloon>
      <Balloon direction="left">（話を聞け）できたらイラスト欲しい</Balloon>
      <Balloon direction="right">いたたた...、何するんですか！</Balloon>
      <Balloon direction="left">
        今まで世界の経済は金融機関が回してきた。金融機関ありきで経済活動が促進されてきた。企業にお金を貸したり、海外通貨との交換業務をしたり...。つまり、それだけ重要な役を担ってきた企業を突然経営不振に陥れるようなことは経済への打撃にもつながる。それだけリスクが付きまとうのだよ。
      </Balloon>
      <Balloon direction="right">
        少しずつ金融システムを変えていこう。そういうことですか。
      </Balloon>
      <Balloon direction="left">
        そうだ。金融システムの刷新にはリスクと利権が絡む。様子を見なければならないのだ。
      </Balloon>
      <MiniSectionTitle>万人のための金融インフラ</MiniSectionTitle>
      <Balloon direction="right">
        BitCoinとかもありますから、案の定って漢字ですけど、そんなに期待されているんですか？
      </Balloon>
      <Balloon direction="left">
        あぁ、我々には実感が湧かないかもしれないが、自国の法定通貨の価値が安定していなかったり、経済力に乏しい国だと、ブロックチェーンの金融への活用は非常に大きな意味を持っている。
      </Balloon>
      <Balloon direction="right">
        いつ紙屑になるかわからないお金を持っておくよりは、仮想通貨を持っていた方がマシだと。
      </Balloon>
      <Balloon direction="left">
        そう。それに、我々に全く関係がないわけでもない。むしろ逆、金融が発達している日本にこそ必要なものでもある。
      </Balloon>
      <Pager
        direction="back"
      />
      <Pager
        direction="forward"
      />
    </Main>
  );
};

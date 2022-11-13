import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";

export const C5S1 = () => {
  return (
    <Main>
      <MiniSectionTitle>金融</MiniSectionTitle>
      <Balloon char="node">
        ナカモト君、君はお金を送金するとき、どのような手続きをするかね？
      </Balloon>
      <Balloon char="satoshi">
        銀行の口座を開設した後に、数百円の手数料を払って振り込みます。
      </Balloon>
      <Balloon char="node">
        そうかそうか。それじゃあ、海外送金の場合はどうする？
      </Balloon>
      <Balloon char="satoshi">
        滅多にないですけど、数千円の手数料払って送金することになりますね。
      </Balloon>
      <Balloon char="node">
        そうだな。現金を手渡しする分にはお金はかからない。しかし、銀行を介してお金を渡すとなると手数料がかかる。
      </Balloon>
      <Balloon char="satoshi">
        よく考えると損した気分になりますね...。
      </Balloon>
      <Balloon char="node">
        ハッハッハ。私もだ。ところが仮想通貨はほとんど手数料がかからない。海外送金にしても、かかって数百円程度だ。
      </Balloon>
      <Balloon char="satoshi">
        おぉ！それはいいですね！早速日本政府もブロックチェーンの導入を...
      </Balloon>
      <Balloon char="node">（話を聞け）できたらイラスト欲しい</Balloon>
      <Balloon char="satoshi">いたたた...、何するんですか！</Balloon>
      <Balloon char="node">
        今まで世界の経済は金融機関が回してきた。金融機関ありきで経済活動が促進されてきた。企業にお金を貸したり、海外通貨との交換業務をしたり...。つまり、それだけ重要な役を担ってきた企業を突然経営不振に陥れるようなことは経済への打撃にもつながる。それだけリスクが付きまとうのだよ。
      </Balloon>
      <Balloon char="satoshi">
        少しずつ金融システムを変えていこう。そういうことですか。
      </Balloon>
      <Balloon char="node">
        そうだ。金融システムの刷新にはリスクと利権が絡む。様子を見なければならないのだ。
      </Balloon>
      <MiniSectionTitle>万人のための金融インフラ</MiniSectionTitle>
      <Balloon char="satoshi">
        BitCoinとかもありますから、案の定って漢字ですけど、そんなに期待されているんですか？
      </Balloon>
      <Balloon char="node">
        あぁ、我々には実感が湧かないかもしれないが、自国の法定通貨の価値が安定していなかったり、経済力に乏しい国だと、ブロックチェーンの金融への活用は非常に大きな意味を持っている。
      </Balloon>
      <Balloon char="satoshi">
        いつ紙屑になるかわからないお金を持っておくよりは、仮想通貨を持っていた方がマシだと。
      </Balloon>
      <Balloon char="node">
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

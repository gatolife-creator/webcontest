import React from "react";
import { Balloon } from '../../components/Balloon';
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Important } from "../../components/Important";
import { SubSectionTitle } from "../../components/SubSectionTitle";

export const C5S1 = () => {
  return (
    <Main>
      <MiniSectionTitle>金融</MiniSectionTitle>
      <SubSectionTitle>価値保存の手段</SubSectionTitle>
      <Balloon char="satoshi">
        ビットコインとかもありますから、案の定って感じですけど、そんなに期待されているんですか？
      </Balloon>
      <Balloon char="node">
        あぁ、自国の通貨の価値が安定してない国、経済力に乏しい国では、仮想通貨を持っておくことは非常に大きな意味を持つ。
      </Balloon>
      <Balloon char="satoshi">
        いつ紙屑になるかわからないお金を持っておくよりは、仮想通貨を持っていた方がマシだと。
      </Balloon>
      <Balloon char="node">
        そう。それに、我々に全く関係がないわけでもない。むしろ、金融が発達している日本にこそ必要なものでもある。
      </Balloon>
      <Balloon char="satoshi">僕たちにも...？</Balloon>

      <SubSectionTitle>中間搾取の防止</SubSectionTitle>
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
        そうだな。現金を手渡しする分にはお金はかからない。しかし、
        <Important>銀行を介して送金すると手数料がかかる</Important>。
      </Balloon>
      <Balloon char="satoshi">よく考えると損した気分になりますね...。</Balloon>
      <Balloon char="node">
        私もだ。ところが仮想通貨は
        <Important>ほとんど手数料がかからない</Important>
        。海外送金であっても、かかって数百円程度だ。
      </Balloon>
      <Balloon char="node">
        仮想通貨のブロックチェーンが、銀行に代わって取引の安全性などを保証してくれるのだ。
      </Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

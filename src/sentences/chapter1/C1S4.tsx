import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { SubSectionTitle } from "../../components/SubSectionTitle";

export const C1S4 = () => {
  return (
    <Main duration="long">
      <MiniSectionTitle>サトシ・ナカモトの正体</MiniSectionTitle>
      <Balloon char="nakamoto">
        そう言えば、ブロックチェーンの仕組みを作ったサトシ・ナカモトさんってどんな人なんですか？きっと凄い頭が良いんだろうなぁ。
      </Balloon>
      <Balloon char="node">
        確かに頭が良いことに変わりはないだろうが、実はサトシ・ナカモトが何者なのか未だに分かっていないんだ。
      </Balloon>
      <Balloon char="nakamoto">そうなんですか？</Balloon>
      <Balloon char="node">
        うむ。サトシ・ナカモト氏は2010年以降もしばらくはビットコインに関わり続けたといわれているが、それ以降消息が不明になったんだ。
      </Balloon>
      <Balloon char="nakamoto">凄いことをしたのに残念...。</Balloon>
      <Balloon char="node">
        ただ、サトシ・ナカモトの正体については色々な説が提唱されているんだ。
      </Balloon>
      <Balloon char="nakamoto">一体誰が…？</Balloon>

      <SubSectionTitle>ドリアン・ナカモト氏説</SubSectionTitle>

      <SubSectionTitle>金子勇氏説</SubSectionTitle>
    </Main>
  );
};

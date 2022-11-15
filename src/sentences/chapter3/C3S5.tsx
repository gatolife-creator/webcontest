import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C3S5 = () => {
  return (
    <Main>
      <MiniSectionTitle>コンセンサスアルゴリズム（2）</MiniSectionTitle>
      <Balloon char="node">
        さて、今回はPoWの問題を解消するべく発明された<Important>PoS</Important>
        について見ていこう。
      </Balloon>

      <SubSectionTitle>PoS（Proof of Stake）</SubSectionTitle>
      <Balloon char="node">
        PoWでは、コンピューターの計算能力が高いほど、ブロックを承認できる確率が高くなる。
      </Balloon>
      <Balloon char="node">
        一方、PoSでは<Important>通貨の保有量が高い</Important>
        ほど、ブロックを承認できる確率が高くなる。
      </Balloon>
      <Balloon char="satoshi">ふむふむ。これがどうしていいんですか？</Balloon>
      <Balloon char="node">まず、ブロックの承認をするのに、<Important>大量の電力を消費しないというという点だ。</Important></Balloon>
      <Balloon char="satoshi">PoSでは</Balloon>
      <Balloon char="node">さらに、使われ始めたばかりの仮想通貨でも、改ざんされるリスクが低い。</Balloon>
      <Balloon char="satoshi">なんでですか？</Balloon>
      <Balloon char="node">改ざんをするためには、多くの通貨を買い集める必要がある。</Balloon>
      <Balloon char="satoshi">改ざんするためにはお金が必要ということか！</Balloon>
      <Balloon char="node">その通りだ。仮に十分な通貨を集めて改ざんに成功したとしても、改ざんした結果通貨の価値が落ちることがある。</Balloon>
      <Balloon char="satoshi">改ざんして得をするどころか、通貨の価値が下がって損をしてしまうのですね！</Balloon>
      <Balloon char="satoshi">よくできた仕組みだなぁ。</Balloon>

      <Balloon char="satoshi">やっぱりこれからは、PoWの代わりにPoSが採用されるようになるんですかね？</Balloon>
      <Balloon char="node">うむ、確かにイーサリアムでもPoWからPoSへ移行された。</Balloon>
      <Balloon char="node">だがやはり、PoSも完璧とは言えない。</Balloon>

      <SubSectionTitle>PoSの問題点</SubSectionTitle>
      <Balloon char="node">次に、PoSの問題点を見ていこう。</Balloon>

      <SubSectionTitle>新たなコンセンサスアルゴリズム</SubSectionTitle>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

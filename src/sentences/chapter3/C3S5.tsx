import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C3S5 = () => {
  return (
    <Main duration="long">
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
      <Balloon char="node">
        もちろん、ブロックの承認に成功したものは、報酬を得られる。
      </Balloon>
      <Balloon char="nakamoto">ふむふむ。これがどうしていいんですか？</Balloon>
      <Balloon char="node">
        まず、ブロックの承認をするのに、<Important>少ない電力で済む</Important>
        という点だ。
      </Balloon>
      <Balloon char="nakamoto">PoSでは</Balloon>
      <Balloon char="node">
        さらに、使われ始めたばかりの仮想通貨でも、改ざんされるリスクが低い。
      </Balloon>
      <Balloon char="nakamoto">なんでですか？</Balloon>
      <Balloon char="node">
        改ざんをするためには、多くの通貨を買い集める必要がある。
      </Balloon>
      <Balloon char="nakamoto">
        改ざんするためにはお金が必要ということか！
      </Balloon>
      <Balloon char="node">
        その通りだ。仮に十分な通貨を集めて改ざんに成功したとしても、改ざんした結果通貨の価値が落ちることがある。
      </Balloon>
      <Balloon char="nakamoto">
        改ざんして得をするどころか、通貨の価値が下がって損をしてしまうのですね！
      </Balloon>
      <Balloon char="nakamoto">よくできた仕組みだなぁ。</Balloon>

      <Balloon char="nakamoto">
        やっぱりこれからは、PoWの代わりにPoSが採用されるようになるんですかね？
      </Balloon>
      <Balloon char="node">
        うむ、確かにイーサリアムでもPoWからPoSへ移行された。
      </Balloon>
      <Balloon char="node">だがやはり、PoSも完璧とは言えない。</Balloon>

      <SubSectionTitle>PoSの問題点</SubSectionTitle>
      <Balloon char="nakamoto">
        電力を節約できて、改ざんにも強い。一体なんの問題があるっていうんですか？
      </Balloon>
      <Balloon char="node">
        単刀直入にいうと、<Important>通貨の流動性が低下する</Important>
        という点だ。
      </Balloon>
      <Balloon char="nakamoto">うん？</Balloon>
      <Balloon char="node">
        まぁ簡単にいえば、<Important>通貨の取引が活発化しない</Important>
        ということだ。
      </Balloon>
      <Balloon char="ether">
        PoSの場合、積極的に通貨を使うよりも、そのまま持ち続けていた方がブロックの承認に成功しやすいですからね。
      </Balloon>

      <SubSectionTitle>新たなコンセンサス・アルゴリズム</SubSectionTitle>
      <Balloon char="nakamoto">
        もう、いつになったら完璧なコンセンサス・アルゴリズムができるんですか？
      </Balloon>
      <Balloon char="node">
        まぁまぁ落ち着け。PoSを元に、新たなコンセンサス・アルゴリズムが提案または実装されている。
      </Balloon>
      <Balloon char="nakamoto">ぜひ教えてください！</Balloon>
      {/* <Balloon char="node">
        まずは<Important>DPoS</Important>（Delegated Proof of Stake）。
      </Balloon> */}

      <Balloon char="node">
        そして<Important>PoI</Important>（Proof of Importance）。
      </Balloon>
      <Balloon char="node">
        通貨の保有量はもちろんのこと、取引量や取引回数から通貨の流動性における、その人の重要度を算出する。これを元にブロックの承認権が与えられる。
      </Balloon>

      <Balloon char="ether">
        承認権欲しさに、通貨を溜め込むことがないようにしているわけですね。
      </Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

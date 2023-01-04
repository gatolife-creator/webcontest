import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { BookInfo, SiteInfo } from "../../pages/Reference";

export const C4S1 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>仮想通貨</MiniSectionTitle>
        <SubSectionTitle>仮想通貨とは</SubSectionTitle>
        <Balloon char="nakamoto">
          さっきまでの説明にたびたび「仮想通貨」って出てきましたけど、僕たちが使っている「円」とは何が違うんですか？
        </Balloon>
        <Balloon char="node">
          これらの違いを一言で表すなら、<Important>第三者の信用</Important>
          を必要とするか否かだ。
        </Balloon>
        <Balloon char="nakamoto">第三者の信用？</Balloon>

        <SubSectionTitle>仮想通貨の特長</SubSectionTitle>
        <Balloon char="node">
          私たちが使っている「円」、ヨーロッパで使われる「ユーロ」。これらは誰が管理しているかわかるかな？
        </Balloon>
        <Balloon char="nakamoto">日本政府とかEUですね。</Balloon>
        <Balloon char="node">
          そうだ。じゃあ、もしもどこのだれが作ったのかわからない通貨があったとしたら、君は使いたいと思うか。
        </Balloon>
        <Balloon char="nakamoto">
          それは嫌ですよ。誰が管理しているかわからないものなんて使いたくありません。
        </Balloon>
        <Balloon char="node">
          当然だな。円やユーロなどの<Important>法定通貨</Important>
          の場合、政府機関が通貨偽造対策、ゴールドの確保によってその価値を保証している。
        </Balloon>

        <Balloon char="node">一方で仮想通貨はどうかな？</Balloon>
        <Balloon char="nakamoto">
          あれ？仮想通貨って誰が管理するんだろう...？
        </Balloon>
        <Balloon char="node">
          答えは<Important>ブロックチェーンの仕組み</Important>だ。
        </Balloon>
        <Balloon char="node">
          ブロックチェーンによる改ざん対策によって、その価値を保証している。
        </Balloon>
        <Balloon char="node">
          このように、第三者の信用を必要としないことを
          <Important>トラストレス</Important>という。
        </Balloon>
        <Balloon char="nakamoto">
          トラストレスだとどんないいことがあるんですか？
        </Balloon>
        <Balloon char="node">
          一つには、<Important>個人間送金が可能</Important>
          という点が挙げられる。
        </Balloon>
        <Balloon char="node">
          通常、海外送金を行う際には、信用できる銀行に仲介をお願いする。
        </Balloon>
        <Balloon char="node">その際に手数料が差し引かれてしまう。</Balloon>
        <Balloon char="nakamoto">確かにそうですね。</Balloon>
        <Balloon char="node">
          一方仮想通貨では、個人に直接送金できるため、
          <Important>手数料があまりかからない</Important>。
        </Balloon>
        <Balloon char="nakamoto">それはいいですね！</Balloon>

        <Balloon char="node">
          さらに、権力を持つ者に
          <Important>財産を差し押さえられる心配が少ない</Important>
          、と言った点も仮想通貨のメリットだ。
        </Balloon>
        <Balloon char="node">
          仮想通貨の性質上、送金を行えるのは本人のみ。差し押さえるのが非常に難しいわけだ。
        </Balloon>
        <Balloon char="nakamoto">なるほど〜。</Balloon>
        <Balloon char="node">
          実際に、政府の権力が強い中華人民共和国では、財産差し押さえの懸念から、マイニング事業が発展した。
        </Balloon>
        <Balloon char="node">
          なお現在（2022年時点）、中国政府は金融の安定性を危惧して、マイニングが禁止されている。
        </Balloon>

        <SubSectionTitle>仮想通貨のデメリット</SubSectionTitle>
        <Balloon char="node">一方で、仮想通貨にはデメリットもある。</Balloon>
        <Balloon char="nakamoto">そうなんですか？</Balloon>
        <Balloon char="node">
          まず、<Important>価格変動が大きい</Important>という点だ。
        </Balloon>
        <Balloon char="nakamoto">価格変動が大きい？</Balloon>
        <Balloon char="node">
          そう。基本的に仮想通貨の価値は、その利用者の
          <Important>期待に大きく依存する</Important>。
        </Balloon>
        <Balloon char="node">
          仮想通貨に新機能が盛り込まれれば、価格は跳ね上がるし、仮想通貨が改ざんの被害を受けたものなら、価格は大きく下がってしまう。
        </Balloon>
        <Balloon char="nakamoto">なるほど...。</Balloon>
        <Balloon char="node">
          それゆえ、普段使いする決済手段としては不便であると言った問題も存在する。
        </Balloon>
        <Balloon char="node">
          一方で、<Important>ステーブルコイン</Important>
          と言って、<Important>法定通貨と価格が連動する</Important>
          ように設計された通貨も開発されている。
        </Balloon>
        <Balloon char="nakamoto">今後の進歩に目が離せませんね！</Balloon>
        <Balloon char="node">
          次のデメリットは、
          <Important>決済が確定するまでに時間がかかる</Important>という点だ。
        </Balloon>
        <Balloon char="nakamoto">あれ、電子決済だからはやいんじゃ？</Balloon>
        <Balloon char="node">
          採用されているコンセンサス・アルゴリズムにもよるが、PoWを採用するビットコインでは、
          <Important>1秒間に約5〜10件</Important>
          ほどのトランザクションしかさばけない。
        </Balloon>
        <Balloon char="node">
          一方、クレジットカード「Visa」では
          <Important>1秒間に約1700件</Important>の決済を行うことができる。
        </Balloon>
        <Balloon char="nakamoto">雲泥の差ですね...。</Balloon>

        <Pager direction="back" />
        <Pager direction="forward" />

        <MiniSectionTitle>
          {lang === "ja" && "参考文献"}
          {lang === "en" && "References"}
        </MiniSectionTitle>
        <BookInfo
          title="図解即戦力
            ブロックチェーンのしくみと開発がこれ1冊でしっかりわかる教科書"
          author="コンセンサスベイス・株式会社"
          publisher="技術評論社"
          year={2019}
        />
        <SiteInfo
          title="中国で仮想通貨が「全面禁止」になった理由と、矛盾もはらむ政府の思惑
            | WIRED.jp"
          author="WIRED"
          url="https://wired.jp/2021/10/07/chinas-sweeping-cryptocurrency-ban-inevitable/"
          date="12/22"
        />

        <SiteInfo
          title="仮想通貨と電子マネーの違いはなに？それぞれのメリットについて解説！
            - PayPay"
          author="PayPay"
          url="https://paypay.ne.jp/store-media/knowledge/0023_chigai/"
          date="12/22"
        />
      </Main>
    </>
  );
};

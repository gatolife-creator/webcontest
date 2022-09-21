import React from "react";
import { Balloon } from "../../components/Balloon";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";

export const C2S2 = () => {
  return (
    <Main>
      <SectionTitle>第二節　仮想通貨の用途、長所、短所（特徴）</SectionTitle>
      <MiniSectionTitle>
        中央で取引を仲介する管理者が存在しない
      </MiniSectionTitle>
      <li>
        取引の検証などはブロックチェーンのネットワークを構成するノードが独自におこなう
      </li>
      <MiniSectionTitle>
        仮名性や匿名性によってプライバシーが守られる
      </MiniSectionTitle>
      <li>アドレスを個人情報と結びつけない限り個人を特定できない</li>
      <MiniSectionTitle>
        外部の攻撃によるシステムダウンの懸念が少ない（ブロックチェーンの説明をもう一度）
      </MiniSectionTitle>
      <MiniSectionTitle>
        検閲耐性　運営者や政府組織により資金を没収されたり、送金を止められたりする可能性が非常に低い（中国でマイニングが発展した理由）
      </MiniSectionTitle>
      <Balloon direction="right">
        中国では財産の差し押さえの恐れもあったから、政府の介入が難しい仮想通貨のマイニングが発展したと考えられているぞ（中国のマイニング額やらなんやらのグラフを示したい）
      </Balloon>
      <p>なお、○○年に中国でマイニングが禁止されることとなりました。</p>
      <MiniSectionTitle>
        取引の確定に時間がかかる（マイニングの関係。電子マネーと比較する。電子マネーは決済業者が取引の不正がないかどうか保証する）
      </MiniSectionTitle>
      <MiniSectionTitle>価格変動率（ボラティリティ）が高い</MiniSectionTitle>
      <li>決済手段としては疑問視 </li>
      <Balloon direction="left">
        ピザの価格が10倍になったら困りますもんね
      </Balloon>
      <MiniSectionTitle>処理能力の限界</MiniSectionTitle>
      <li>
        取引が活発になると「送金づまり」と言って、なかなか取引が確定しなかったり、取引手数料が高騰する（早くトランザクションを処理してほしいと思う人がいるから）
      </li>
      <Balloon direction="left">
        画期的な技術だといえども、弱点はあるものですね。価格変動や処理の力の限界は、今後仮想通貨が普及していくにつれて、顕著になってきそうですね。
      </Balloon>
      <Balloon direction="right">
        そうだ。だから、～のようなステーブルコインや～のような送金が早い～が開発され始めている。
      </Balloon>
      <li>
        参考文献：https://www.nikkei.com/article/DGXMZO86090890U5A420C1000000/
      </li>
    </Main>
  );
};

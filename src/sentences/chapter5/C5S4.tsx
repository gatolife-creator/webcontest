import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C5S4 = () => {
  return (
    <Main duration="long">
      <MiniSectionTitle>環境対策</MiniSectionTitle>
      <Balloon char="satoshi">
        ブロックチェーンで環境対策？いくら凄い技術だとしても、さすがに環境対策にも使えるとは思えませんよ。
      </Balloon>
      <Balloon char="node">
        確かに、ブロックチェーンはあくまでデジタル上の技術だ。だが、ブロックチェーンの
        <Important>透明性</Important>や<Important>即時性</Important>
        が、<Important>流通の無駄を減らす</Important>手助けになる。
      </Balloon>
      <Balloon char="satoshi">どういうことですか？ </Balloon>
      <Balloon char="node">
        例えば食料品だ。従来の流通システムでは、食料品は生産場所からいろいろな機関を介して私たち消費者に届けられる。
      </Balloon>
      <Balloon char="node">
        そのため生産者と消費者の間のどこかに食料品の不適切な扱いや輸送、保管などがあると食料品がダメになってしまう場合があるんだ。
      </Balloon>
      <Balloon char="satoshi">それは嫌ですね。 </Balloon>
      <Balloon char="node">
        だろう。そこでブロックチェーンの出番だ。ブロックチェーンを使えば食料品がどのような経路をたどってきたかが一目でわかる。これによって食料品が適切な扱いを受けているかを確かめることができるのだ。
      </Balloon>
      <Balloon char="satoshi">
        なるほど。これなら食糧廃棄を減らすことができそうですね！
      </Balloon>

      <MiniSectionTitle>株式会社chaintope</MiniSectionTitle>
      <SubSectionTitle>
        電力取引にブロックチェーンを活用する理由
      </SubSectionTitle>
      <p>
        温室効果ガスの排出を全体としてゼロにする「カーボンニュートラル」の流れの中で、再生可能エネルギー由来の電力を発電・消費していることの証明や、証明書自体を売買する取り組みが、世界的に拡大しています。
        電力のやり取りでも、カーボンクレジット（温室効果ガスの削減量を売買可能にしたもの）発行申請の根拠となる等、発電・消費情報の正確性は極めて重視されます。電子データの真正性を保証するブロックチェーン技術を活用する理由はここにあります。
        将来的には、電力会社を介さない個人間取引（P2P取引）において、売買のマッチングや決済、取引時に使用するトークンの発行・管理等を、ブロックチェーン上で自動的に行うことも可能です。
      </p>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from '../../components/SubSectionTitle';
import { Balloon } from '../../components/Balloon';

export const C5S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>環境対策</MiniSectionTitle>

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

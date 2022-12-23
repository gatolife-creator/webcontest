import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { SubSectionTitle } from "../components/SubSectionTitle";
import { Pager } from "../components/Pager";

export const HowToUse = () => {
  return (
    <Drawer>
      <Main>
        <MiniSectionTitle>読み進め方</MiniSectionTitle>
        <SubSectionTitle>ステップ1: ノード先生の解説を聞こう。</SubSectionTitle>
        <SubSectionTitle>
          ステップ2: 各チャプター最後のクイズに取り組もう。
        </SubSectionTitle>
        <SubSectionTitle>
          スッテプ3: すべてのクイズに正解して、認定証をもらう。
        </SubSectionTitle>

        <MiniSectionTitle>認定証の受け取り方</MiniSectionTitle>
        <SubSectionTitle>
          ステップ1: ナビゲーションバーの「進捗度」を押そう。
        </SubSectionTitle>
        <SubSectionTitle>
          ステップ2: すべてのクイズに正解していることを確認しよう。
        </SubSectionTitle>
        <SubSectionTitle>
          ステップ3: 君だけの認定証を受け取ろう。
        </SubSectionTitle>
        <Pager direction="back" link="/index.html"></Pager>
        <Pager
          direction="forward"
          link="/content.html?chapter=1&section=0"
        ></Pager>
      </Main>
    </Drawer>
  );
};

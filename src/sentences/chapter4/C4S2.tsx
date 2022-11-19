import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Link } from "react-router-dom";

export const C4S2 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>スマート・コントラクト</MiniSectionTitle>
        <SubSectionTitle>スマート・コントラクトとは</SubSectionTitle>
        <Balloon char="nakamoto">
          スマート・コントラクト...。なんかかっこいい名前ですね。
        </Balloon>
        <Balloon char="node">う〜ん、サトシ君はお目が高い。</Balloon>
        <Balloon char="node">
          スマート・コントラクトは実にクールな技術なのだよ。
        </Balloon>
        <Balloon char="nakamoto">一体、どんなものなんですか？</Balloon>
        <Balloon char="node">
          ブロックチェーン上で、契約の自動実行などのプログラムを実行できるというものだ。
        </Balloon>
        <Balloon char="nakamoto">
          あっ、もしかして
          <Link
            to="/content.html?chapter=1&section=2"
            className="link-secondary link"
          >
            ブロックチェーンの歴史
          </Link>
          で紹介されてたやつですか？
        </Balloon>
        <Balloon char="node">よく覚えているな。</Balloon>
        <SubSectionTitle>スマート・コントラクトの用途</SubSectionTitle>
        <Balloon char="nakamoto">
          それで、スマート・コントラクトってどんなことに使われているんですか？
        </Balloon>
        <Balloon char="node">
          スマート・コントラクトはブロックチェーン上のコードとして実行されるものだ。
        </Balloon>
        <Balloon char="node">
          したがって、金融、ゲーム、IoT、サプライチェーン、環境保護にも用いることができる。
        </Balloon>
        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

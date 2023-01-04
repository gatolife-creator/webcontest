import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Link } from "react-router-dom";
import { Important } from "../../components/Important";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { BookInfo } from "../../pages/Reference";

export const C4S2 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>スマート・コントラクト</MiniSectionTitle>
        <SubSectionTitle>スマート・コントラクトとは</SubSectionTitle>
        <Balloon char="nakamoto">
          スマート・コントラクト...。なんかかっこいい名前ですね。
        </Balloon>
        <Balloon char="node">う〜ん、ナカモト君はお目が高い。</Balloon>
        <Balloon char="node">
          スマート・コントラクトは実にクールな技術なのだよ。
        </Balloon>
        <Balloon char="nakamoto">一体、どんなものなんですか？</Balloon>
        <Balloon char="node">
          ブロックチェーン上で、契約の自動履行などのプログラムを実行できるというものだ。
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
        <Balloon char="node">
          スマート・コントラクトを実装しているブロックチェーンの代表例が
          <Important>イーサリアム</Important>だ。
        </Balloon>
        <Balloon char="node">
          イーサリアムでは仮想通貨<Important>イーサ</Important>
          が用いられており、スマート・コントラクトの実行などに使用されている。
        </Balloon>

        <SubSectionTitle>スマート・コントラクトの用途</SubSectionTitle>
        <Balloon char="nakamoto">
          それで、スマート・コントラクトってどんなことに使われているんですか？
        </Balloon>
        <Balloon char="node">
          スマート・コントラクトはブロックチェーン上のコードとして実行されるものだ。
        </Balloon>
        <Balloon char="node">
          したがって、不正のできないゲームの制作や<Important>NFT</Important>
          などに活用される。
        </Balloon>
        <Balloon char="node">NFTについては、この後解説しよう。</Balloon>
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
      </Main>
    </>
  );
};

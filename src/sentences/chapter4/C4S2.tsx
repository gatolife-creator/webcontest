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
        <MiniSectionTitle>
          {lang === "ja" && "スマート・コントラクト"}
          {lang === "en" && "Smart Contract"}

        </MiniSectionTitle>
        <SubSectionTitle>
          {lang === "ja" && "スマート・コントラクトとは"}
          {lang === "en" && "What is a Smart Contract?"}

        </SubSectionTitle>


        <Balloon char="nakamoto">
          {lang === "ja" && "スマート・コントラクト...。なんかかっこいい名前ですね。"}
          {lang === "en" && "Smart Contract.... What a cool name and sounds great!"}

        </Balloon>

        <Balloon char="node">
          {lang === "ja" && "う〜ん、ナカモト君はお目が高い。"}
          {lang === "en" && "Well, Nakamoto, you have a good sence."}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && " スマート・コントラクトは実にクールな技術なのだよ。"}
          {lang === "en" && "Smart contract is a really cool technology."}

        </Balloon>

        <Balloon char="nakamoto">
          {lang === "ja" && "一体、どんなものなんですか？"}
          {lang === "en" && "What exactly is it?"}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && "ブロックチェーン上で、契約の自動履行などのプログラムを実行できるというものだ。"}
          {lang === "en" && "It is a technology that allows us to execute programs such as automatic contract execution on a blockchain."}

        </Balloon>


        <Balloon char="nakamoto">
          {lang === "ja" && <>
            あっ、もしかして
            <Link
              to="/content.html?chapter=1&section=2"
              className="link-secondary link"
            >
              ブロックチェーンの歴史
            </Link>
            で紹介されてたやつですか？
          </>}
          {lang === "en" && <>
            Oh, you mean the one that was introduced in{" "}
            <Link to="/content.html?chapter=1&section=2" className="link-secondary link">
              the history of blockchain
            </Link>?
          </>}
        </Balloon>
        <Balloon char="node">
        {lang === "ja" && "よく覚えているな。"}
        {lang === "en" && "You have a good memory"}
        </Balloon>


        <Balloon char="node">
        {lang === "ja" && <> スマート・コントラクトを実装しているブロックチェーンの代表例が
          <Important>イーサリアム</Important>だ。</>}
        {lang === "en" && <>A prime example of a blockchain that implements smart contracts is <Important>Ethereum</Important>.</>}

        </Balloon>


        <Balloon char="node">
          
          {lang === "ja" && <>イーサリアムでは仮想通貨<Important>イーサ</Important>
          が用いられており、スマート・コントラクトの実行などに使用されている。</>}
          {lang === "en" && <>Ethereum uses the cryptocurrency <Important>Ether</Important>, which is used to execute smart contracts.</>}


        </Balloon>

        <SubSectionTitle>
        {lang === "ja" && "スマート・コントラクトの用途"}
        {lang === "en" && "Uses of Smart Contract"}

        </SubSectionTitle>
        <Balloon char="nakamoto">
        {lang === "ja" && "それで、スマート・コントラクトってどんなことに使われているんですか？"}
        {lang === "en" && "So what are smart contracts used for?"}
          
        </Balloon>

        <Balloon char="node">
        {lang === "ja" && "スマート・コントラクトはブロックチェーン上のコードとして実行されるものだ。"}
        {lang === "en" && "Smart contract is executed as code on a blockchain."}

                  </Balloon>

        <Balloon char="node">
        {lang === "ja" && <>したがって、不正のできないゲームの制作や<Important>NFT</Important>
          などに活用される。</>}
        {lang === "en" && <>Therefore, they are used to create games that cannot be cheated, <Important>NFTs</Important>, etc.
NFTs will be explained later.
</>}
        
        </Balloon>
        
        <Balloon char="node">
        {lang === "ja" && "NFTについては、この後解説しよう。"}
        {lang === "en" && "NFTs will be explained later."}
        
        
        
        </Balloon>





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

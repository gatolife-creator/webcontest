import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";

export const C2S1 = () => {
  return (
    <>
      <Main>
        <SectionTitle>第一節　仮想通貨とは</SectionTitle>
        <Balloon direction="right">
          仮想通貨って、電子マネーと似たようなやつですよね。
        </Balloon>
        <Balloon direction="left">
          確かに、電子決済ができる点において共通しているが、その仕組みを見るとかなり異なるものだ。
        </Balloon>

        <MiniSectionTitle>電子マネーとの違い</MiniSectionTitle>
        <ul>
          <li>
            サトシ・ナカモトの論文を最初に紹介して、abstract
            を翻訳して、その翻訳に基づいて文章を展開していく
          </li>
        </ul>
        <MiniSectionTitle>
          ちょっと一休み　サトシ・ナカモトって何者？
        </MiniSectionTitle>
        <li>参考文献</li>
        <li>https://bitcoin.dmm.com/column/0130</li>
        <li>https://academy.binance.com/ja/articles/who-is-satoshi-nakamoto</li>
        <li>
          https://www.coinbase.com/ja/learn/crypto-basics/who-is-satoshi-nakamoto
        </li>
        <li>結論誰なのかはわかっていない</li>

        <h2 className="text-3xl font-bold underline">仮想通貨の仕組み</h2>
        <li>
          仮想通貨には何千何万という様々な種類があり、その仕組みもものによって異なるが、代表格のビットコインを説明すると書いておく
        </li>
        <li>暗号資産についても解説しておく</li>
        <h3 className="text-2xl font-bold underline">ビットコインとは何か</h3>
        <li>
          ビットコインはサトシナカモトによって2008年に発表、2009年に運用が開始された最初の仮想通貨
        </li>

        <Pager
          direction="back"
          text="第二章"
          link="/content.html?chapter=2&section=0"
        />
        <Pager
          direction="forward"
          text="第二節"
          link="/content.html?chapter=2&section=2"
        />
      </Main>
    </>
  );
};

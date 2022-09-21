import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C2S1 = () => {
  return (
    <>
      <Main>
        <SectionTitle>第一節　仮想通貨の概要</SectionTitle>
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
        <li>ブロックチェーンのソースコードを実際に見せる</li>
        <li>
          仮想通貨には何千何万という様々な種類があり、その仕組みもものによって異なるが、代表格のビットコインを説明すると書いておく
        </li>
        <li>暗号資産についても解説しておく</li>
        <h3 className="text-2xl font-bold underline">ビットコインとは何か</h3>
        <li>
          ビットコインはサトシナカモトによって2008年に発表、2009年に運用が開始された最初の仮想通貨
        </li>
        <h2 className="text-3xl font-bold underline">悪用される仮想通貨</h2>
        <h3 className="text-2xl font-bold underline">マネーロンダリング</h3>
        <h3 className="text-2xl font-bold underline">投資詐欺</h3>
        <Balloon direction="left">先生、ノード先生、大変です！</Balloon>
        <Balloon direction="right">どうした？</Balloon>
        <Balloon direction="left">
          サギ男さんって人、たったの一週間で＊億り人になったらしいですよ！この人のトレードのテクニック、一万円で教えてくれるらしいですよ！こんなの申し込むしかないですよね？！申し込みます。
        </Balloon>
        <Balloon direction="right">
          おい、まてい。その人が億稼いだ保証はあるのか？
        </Balloon>
        <Balloon direction="left">これ見てくださいよ、ほら。</Balloon>
        <Balloon direction="right">
          これ・・・。ブラウザの開発者向け機能を使って、数字を書き換えてるだけだぞ。
        </Balloon>
        <Balloon direction="left">え？</Balloon>
        <p>
          近年、仮想通貨にまつわる投資詐欺が増加しています。（正しいソースを持ってくる）
          <br />
          投資の成果を偽ったりして、セミナー料を騙し取るなど・・・
          <br />
          また、価格変動率が高いため、価格の予想は非常に困難です。仮に、その人が成功していたとしても、あなたが成功する補償はありません。仮想通貨に限らず、投資の勧誘には慎重になりましょう
          ＊億り人：株式投資や暗号資産取引（仮想通貨取引）などで億単位の資産を築いた投資家のこと。2008年公開の映画『おくりびと』のタイトルをもじった造語。
          Nomura.co.jp/terms/japan/o/A03207.html
        </p>
        <h3 className="text-2xl font-bold underline">仮想通貨自体が詐欺紛い</h3>
        <p>
          仮想通貨そのものの仕組み自体は、改竄耐性が高く、信用に足るものですが、開発陣に悪意がある場合があります。
          例えば、ネットワーク上に公開される前にマイニングをしたりプリマイニング（言葉があっているかは事前に調べておく）
          ・・・
          仮想通貨を購入する前に、ホワイトペーパーを熟読したり、事前にネットでリサーチすることが肝要です。
        </p>
      </Main>
    </>
  );
};

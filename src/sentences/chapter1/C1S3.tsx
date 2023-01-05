import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Important } from "../../components/Important";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const C1S3 = () => {
  const lang = useRecoilValue(langState);
  const year = new Date().getFullYear();
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>
          {lang === "ja" && "ブロックチェーンの長所"}
          {lang === "en" && "Advantages of Blockchain"}
        </MiniSectionTitle>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "ノード先生、ここまでブロックチェーンの歴史とかを見てきましたけど、結局何がすごいんですか？"}
          {lang === "en" &&
            "Prof. Node, we've looked at the history of blockchain and so on, but what makes it so great in the end?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              それはズバリ、<Important>改ざんが難しい</Important>点、
              <Important>安定して動作する</Important>点、 そして、
              <Important>情報の透明性が高い</Important>点だ。
            </>
          )}
          {lang === "en" && (
            <>
              In short, the advantages of blockchain are, it is{" "}
              <Important>difficult to tamper with</Important>, it is{" "}
              <Important>stable</Important>, and it has{" "}
              <Important>high transparency of information</Important>.
            </>
          )}
        </Balloon>
        <SubSectionTitle>
          {lang === "ja" && "改ざんが困難"}
          {lang === "en" && "Difficult to tamper with it"}
        </SubSectionTitle>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              ブロックチェーンでは、
              <Important>ハッシュ関数</Important>、
              <Important>コンセンサス・アルゴリズム</Important>
              などの技術を駆使して、改ざんの難易度を上げている。
            </>
          )}
          {lang === "en" && (
            <>
              Blockchain uses of <Important>hash functions,</Important>{" "}
              <Important>consensus algorithms</Important>, and other
              technologies. It makes difficult to tamper with.
            </>
          )}
        </Balloon>

        <Balloon char="nakamoto">
          {lang === "ja" &&
            "改ざんがしづらいと、どんないいことがあるんですか？"}
          {lang === "en" &&
            "What good does it do if it is hard to tamper with?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "そうだな...。"}
          {lang === "en" && "Well..."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "絶対に改ざんされてはならないもの、例えば公文書とか選挙の結果などに活用することができる。"}
          {lang === "en" &&
            "It can be used for things that absolutely must not be tampered with, such as official documents and election results."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "実際に2020年の米大統領選挙では、試験的にブロックチェーンを用いたアプリケーションで投票も行われた。"}
          {lang === "en" &&
            "In fact, in the 2020 U.S. presidential election, voting was conducted using a blockchain-based application on a trial basis."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "大統領選挙にも！？"}
          {lang === "en" && "Even for presidential elections!?"}
        </Balloon>
        <Balloon char="ether">
          {lang === "ja" && "今後の活用にも期待できそうですね。"}
          {lang === "en" && "We expect to see further development."}
        </Balloon>

        <SubSectionTitle>
          {lang === "ja" && "安定して動作する"}
          {lang === "en" && "Stability"}
        </SubSectionTitle>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              そして、ブロックチェーンでは、
              <Important>不特定多数</Important>のコンピューターでデータを
              <Important>分散管理</Important>
              し、相互に通信している。
            </>
          )}
          {lang === "en" && (
            <>
              And with blockchain, data is{" "}
              <Important>distributed and managed</Important> by an{" "}
              <Important>unspecified number</Important> of computers,
              communicating with each other.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "それが安定して動作することと関係があるんですか？"}
          {lang === "en" && "What does it have to do with operating stably?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              ざっくりいうと、一部のコンピューターが壊れたりしても、それを
              <Important>肩代わりできる</Important>
              ものがあるから、システムが安定して動作する、といったところかな。
            </>
          )}
          {lang === "en" && (
            <>
              To put it roughly, if some computers break down, there is
              something that can <Important>take their place</Important>, so the
              system can operate stably.
            </>
          )}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && (
            <>
              実際、ビットコインは2009年から
              <Important>約{year - 2009}年間</Important>
              もの間動き続けているのだ。
            </>
          )}
          {lang === "en" && (
            <>
              In fact, Bitcoin has been running for about{" "}
              <Important>{year - 2009} years</Important> since 2009.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && `${year - 2009}年間もですか！？`}
          {lang === "en" && `For ${year - 2009} years!?`}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              そうだ。これを実現するのには
              <Important>P2P（ピア・ツー・ピア）</Important>
              という技術が用いられている。そのうち詳しく解説しよう。
            </>
          )}
          {lang === "en" && (
            <>
              That's right. P2P (peer-to-peer) made it possible. I will explain
              in detail soon.
            </>
          )}
        </Balloon>

        <SubSectionTitle>
          {lang === "ja" && "情報の透明性が高い"}
          {lang === "en" && "High transparency of information"}
        </SubSectionTitle>
        <Balloon char="node">
          {lang === "ja" &&
            "さらにブロックチェーン上のデータは、誰もが見ることができる。 "}
          {lang === "en" &&
            "Furthermore, the data on the blockchain can be seen by anyone."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "例えばどんなデータがありますか？"}
          {lang === "en" && "What kind of data, for example?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "ブロックチェーンの用途にもよるが、誰が誰にお金を送金したのか、などといったデータを確認することが可能だ。"}
          {lang === "en" &&
            "Depending on the use of the blockchain, it is possible to check data such as who sent money to whom."}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && (
            <>
              このような特徴を踏まえて、<Important>所有権</Important>や
              <Important>著作権</Important>
              の管理などへの活用が期待されているのだ。
            </>
          )}
          {lang === "en" && (
            <>
              Based on these characteristics, it is expected to be used to
              manage <Important>ownership</Important> and{" "}
              <Important>copyrights</Important>.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "ブロックチェーンを調べれば、誰のものかすぐにわかりますものね！"}
          {lang === "en" &&
            "And if we check the blockchain, we can easily find out who owns it!"}
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
        <BookInfo
          title="決定版　ビットコイン＆ブロックチェーン"
          author="岡田 仁志"
          publisher="東洋経済新聞社"
          year={2018}
        />
        <SiteInfo
          title="First presidential vote cast using blockchain technology | Fox
            News"
          author="FOX News"
          url="https://www.foxnews.com/tech/first-presidential-vote-cast-using-blockchain-technology"
          date="12/22"
        />
      </Main>
    </>
  );
};

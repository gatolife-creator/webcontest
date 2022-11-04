// TODO ブロックチェーンの長所を解説することは絶対条件なので、以下の文を参考に修正する。

import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Sum } from "../../components/Sum";

export const C1S3 = () => {
  return (
    <>
      <Main>
        <SectionTitle>第三節　ブロックチェーンの長所</SectionTitle>

        <MiniSectionTitle>
          たくさんのコンピューターによって管理される
        </MiniSectionTitle>
        <Balloon direction="left">
          多数のブロックチェーンのネットワーク参加者のコンピューターで、同じデータが保存されている。そのため、いくつかのコンピューターがダウンしても、全てのコンピュータの動作が止まらない限り、ブロックチェーンは動き続ける。
        </Balloon>
        <Balloon direction="right">
          あっ、これ<strong>P2P（ピア・ツー・ピア）</strong>でやったやつだ！
        </Balloon>
        <Balloon direction="left">
          その通り！鋭いぞナカモト君。勉強の成果がいきているみたいだな。
        </Balloon>
        <MiniSectionTitle>改ざんが困難</MiniSectionTitle>
        <Balloon direction="left">
          そしてもう一つ、<strong>データの改竄が困難、という点にある。</strong>
        </Balloon>

        <MiniSectionTitle>管理者となる中央機関が存在しない</MiniSectionTitle>
        <Balloon direction="left">
          ナカモト君、みんなでデータを管理しながらも、改ざんすることは難しい。これは非常に革命的なのだ。なぜだかわかるか？
        </Balloon>

        <Balloon direction="right">う〜ん。わからないです。</Balloon>
        <Balloon direction="left">
          <strong>中央機関が必要なくなる</strong>
          。そういうことですよね、ノード先生。
        </Balloon>
        <Balloon direction="left">
          大正解。基本的に、情報の信憑性を保つには信用できる第三者、例えば国の機関や大企業などによる仲介が必要になる。しかしながらブロックチェーンを活用することによって、第三者の干渉無しに情報の信憑性を担保することができる。これを
          <strong>トラストレス</strong>
          という。これが実に革命的なのだよ。これは世の中の仕組みを変えてしまう可能性を秘めている。それをこの後説明しよう。
        </Balloon>

        <Balloon direction="right">
          世界を一変させてしまう技術かぁ。楽しみだなぁ。
        </Balloon>
        <Sum>
          これまでのお金の取引は、政府や中央銀行、民間の銀行などの中央管理者（信頼できる管理者）によって不正がないことが保証されていました。
          一方で、ブロックチェーンを使用することで、そのような中央管理者無しで、ブロックチェーンの参加者のみで不正がないことを確かめることができるようになったのです
        </Sum>
        <Pager
          direction="back"
          text="第二節"
          link="/content.html?chapter=1&section=2"
        />
        <Pager
          direction="forward"
          text="第四節"
          link="/content.html?chapter=1&section=4"
        />
      </Main>
    </>
  );
};

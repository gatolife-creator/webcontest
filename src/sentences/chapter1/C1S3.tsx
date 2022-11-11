// TODO ブロックチェーンの長所を解説することは絶対条件なので、以下の文を参考に修正する。

import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Sum } from "../../components/Sum";
import { Important } from "../../components/Important";

export const C1S3 = () => {
  return (
    <>
      <Main>
        <MiniSectionTitle>ブロックチェーンの長所</MiniSectionTitle>

        <SubSectionTitle>
          たくさんのコンピューターによって管理される
        </SubSectionTitle>
        <Balloon direction="left">
          多数のブロックチェーンのネットワーク参加者のコンピューターで、同じデータが保存されている。そのため、いくつかのコンピューターがダウンしても、全てのコンピュータの動作が止まらない限り、ブロックチェーンは動き続ける。
        </Balloon>
        <Balloon direction="right">
          あっ、これ<Important>P2P（ピア・ツー・ピア）</Important>でやったやつだ！
        </Balloon>
        <Balloon direction="left">
          その通り！鋭いぞナカモト君。勉強の成果がいきているみたいだな。
        </Balloon>
        <SubSectionTitle>改ざんが困難</SubSectionTitle>
        <Balloon direction="left">
          そしてもう一つ、<Important>データの改竄が困難、という点にある。</Important>
        </Balloon>

        <SubSectionTitle>管理者となる中央機関が存在しない</SubSectionTitle>
        <Balloon direction="left">
          ナカモト君、みんなでデータを管理しながらも、改ざんすることは難しい。これは非常に革命的なのだ。なぜだかわかるか？
        </Balloon>

        <Balloon direction="right">う〜ん。わからないです。</Balloon>
        <Balloon direction="left">
          <Important>中央機関が必要なくなる</Important>
          。そういうことですよね、ノード先生。
        </Balloon>
        <Balloon direction="left">
          大正解。基本的に、情報の信憑性を保つには信用できる第三者、例えば国の機関や大企業などによる仲介が必要になる。しかしながらブロックチェーンを活用することによって、第三者の干渉無しに情報の信憑性を担保することができる。これを
          <Important>トラストレス</Important>
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
        />
        <Pager
          direction="forward"
        />
      </Main>
    </>
  );
};

import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { Pager } from "../../components/Pager";

export const C1S2 = () => {
  return (
    <>
      <Main>
        <h2 className="text-3xl font-bold underline">
          二節　ブロックチェーンの用途・長所
        </h2>
        <h3 className="text-2xl font-bold underline">
          管理者となる中央機関が存在しない
        </h3>
        <p>
          これまでのお金の取引は、政府や中央銀行、民間の銀行などの中央管理者（信頼できる管理者）によって不正がないことが保証されていました。
          <br />
          一方で、ブロックチェーンを使用することで、そのような中央管理者無くして、ブロックチェーンの参加者のみで不正がないことを確かめることができるようになったのです。
        </p>
        <Balloon direction="left">
          つまり、ブロックチェーンが国の「信用力（貨幣の価値の強制力的な）」と金融機関の「仲介業務」を担ってくれているんですね！　（ブロックチェーン×エネルギービジネスから引用）
        </Balloon>
        <Balloon direction="right">いい例えだ</Balloon>
        <h3 className="text-2xl font-bold underline">
          たくさんのコンピューターによって管理される
        </h3>
        <Balloon direction="right">
          多数のブロックチェーンのネットワーク参加者のコンピューターで、同じデータが保存されている。そのため、いくつかのコンピューターがダウンしても、全てのコンピュータの動作が止まらない限り、ブロックチェーンは動き続ける
        </Balloon>
        <Balloon direction="left">どう言うことですか？</Balloon>
        <Balloon direction="right">
          従来のクライアントサーバーシステムと異なり、・・・
        </Balloon>
        <h3 className="text-2xl font-bold underline">改竄（かいざん）が困難</h3>
        <ul>
          <li>
            ブロックチェーンに書き込まれたデータは後から編集することが難しい
          </li>
          <li>
            取引履歴をまとめたブロックは、前のブロックの要約された情報を持っているから、データの一部を改竄しても、生合成が取れなくなるので、データの改竄を検知できる（イラストを使う）
          </li>
        </ul>
        <h3 className="text-2xl font-bold underline">
          コンセンサスアルゴリズム
        </h3>
        <Balloon direction="left">
          え、じゃあブロックチェーン丸ごと改竄しちゃえばいいじゃないですか
        </Balloon>
        <Balloon direction="right">
          ふふふ、それは甘いにゃあ。コンセンサスアルゴリズムを使ってネットワーク全体で整合性を保っているのだよ。
        </Balloon>
        <p>
          例えばPoWにおいて、ブロックは多数のコンピュータが競って生成している（暫定）。
          <br />
          改竄を施したブロックチェーンを正当化するには、厳しい競争を潜り抜けなければならない。（全体の51％以上くらいの計算の能力が必要（目安））
        </p>

        <Pager direction="back" text="第一節" link="/content?chapter=1&section=1" />
        <Pager
          direction="forward"
          text="第三節"
          link="/content?chapter=1&section=3"
        />
      </Main>
    </>
  );
};

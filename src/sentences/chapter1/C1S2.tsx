import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";

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
        <h2 className="text-3xl font-bold underline">
          三節　ブロックチェーンの活用例
        </h2>
        <h3 className="text-2xl font-bold underline">
          複数企業間での業務プロセスの共有
        </h3>
        <Balloon direction="left">
          あぁ〜なんでこの書類先生の判子が必要なんだよ〜
        </Balloon>
        <Balloon direction="right">どうしたんだナカモト君？</Balloon>　
        <Balloon direction="left">
          旅行の学割、先生の判子がないと適用されないんですよ。
        </Balloon>
        <Balloon direction="right">
          なるほど、確かにそれは面倒かもな。でもそれもいずれなくなるかもしれないぞ。
        </Balloon>
        <Balloon direction="left">ほんとですか？！</Balloon>
        <Balloon direction="right">
          もしかしたら、だけどな。今、いくつかの貿易関係の企業で書類のやり取りを、ブロックチェーンによって電子化する取り組みが行われている。
        </Balloon>
        <p>
          現在、いくつかの企業間でブロックチェーンを使ってデータを即時共有する取り組みが行われている。
          <br />
          例えば、今まで国を跨いだ貿易取引は、貿易書類のやりとりが面倒であったが、このやり取りをブロックチェーンを使って電子化することで、手続きにかかる時間を大幅に短縮したほか、セキュリティーを向上させることに成功した。
          <br />
          実際に、みずほ銀行もこれに取り組み、数日かかっていた貿易取引の処理をわずか2時間で終わらせたそうだ（2017）。
        </p>
        <Balloon direction="left">
          なるほど、ブロックチェーンは貿易書類のような改ざんされてはならない書類の電子化にはうってつけなんですね！先生の判子も電子化しないかな〜
        </Balloon>
        <Balloon direction="right">そうなるといいな（笑）</Balloon>
        <h3 className="text-2xl font-bold underline">投票</h3>
        <li>
          メモ：ブロックチェーンはすべての人がその情報にアクセスでき、改ざんしづらいという特徴がある
        </li>
        <h3 className="text-2xl font-bold underline">Brave Browser</h3>
        <Balloon direction="left">
          ねぇ先生、ウェブブラウジングするだけでお金がもらえるなんてうさん臭くないですか？
        </Balloon>
        <Balloon direction="right">
          うん？どれどれ、あぁこれはBraveブラウザーじゃないか。
        </Balloon>
        <Balloon direction="left">先生知ってるんですか？</Balloon>
        <Balloon direction="right">あぁ、Web3.0の代表格だからな。</Balloon>
        <p>
          Brave
          ブラウザーはプライバシー保護と新しいウェブエコシステムをコンセプトに、広告閲覧者に仮想通貨「BAT」を、コンテンツクリエイターにBATをチップできる仕組みを提供しているブラウザーである。
        </p>
      </Main>
    </>
  );
};

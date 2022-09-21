import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";

export const C1S3 = () => {
  return (
    <Main>
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
      <Pager
        direction="back"
        text="第二節"
        link="/content?chapter=1&section=2"
      />
      <Pager
        direction="forward"
        text="第二章"
        link="/content?chapter=2&section=0"
      />
    </Main>
  );
};

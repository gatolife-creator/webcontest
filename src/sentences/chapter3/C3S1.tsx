import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";

export const C3S1 = () => {
  return (
    <Main duration="long">
      <MiniSectionTitle>基本構造</MiniSectionTitle>
      <Balloon char="node">
        ブロックチェーンはざっくりこのような構造をしている。
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/blockchain.png"}
        caption="ブロックチェーン"
      />
      <Balloon char="node">
        トランザクションをまとめるブロックがあり、そのブロックが連なっているのがブロックチェーン、と言った感じだ。
      </Balloon>
      <Balloon char="nakamoto">
        ブロックが何かしらで繋がっているからブロックチェーンなんですね！
      </Balloon>
      <Balloon char="node">おや？今日は勘がいいな。</Balloon>
      <Balloon char="node">
        ちなみに、ブロックチェーンの最初のブロックを特別に
        <Important>ジェネシス・ブロック（Genesis Block）</Important>
        と呼ぶことを覚えておこう。
      </Balloon>

      <SubSectionTitle>トランザクション</SubSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/transaction.png"}
        caption="トランザクション"
      />
      <Balloon char="nakamoto">
        トランザクション、ですか。あまり聞き馴染みがありませんね。
      </Balloon>
      <Balloon char="node">
        日本語では、「取引」「取引履歴」などとと訳す。ブロックチェーンにおいては、
        <Important>資産や所有権</Important>の移動を記録する役割がある。
      </Balloon>
      <Balloon char="node">
        トランザクションには、「送信元アドレス」「送信先アドレス」「取引量」「日時」などのデータが記録されている。
      </Balloon>

      <SubSectionTitle>ブロック</SubSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/block.png"}
        caption="ブロック"
      />
      <Balloon char="node">
        続いてブロックだ。これは、一定量のトランザクションをまとめる役割がある。
      </Balloon>
      <Balloon char="nakamoto">
        なんで、トランザクションをまとめる必要があるんですか。
      </Balloon>
      <Balloon char="node">
        いい質問だ。実は、トランザクションの<Important>改ざん</Important>
        を防ぐのに一役買っている。
      </Balloon>
      <Balloon char="node">
        その仕組みについては、次のセクションで解説しよう。
      </Balloon>
      <Balloon char="nakamoto">わかりました！</Balloon>
      <Balloon char="node">
        さて、続いてはブロック内にある<Important>ブロックヘッダー</Important>
        について教えよう。
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/block-header.png"}
        caption="ブロックヘッダ"
      />
      <Balloon char="node">
        ブロックヘッダー内には、<Important>メタデータ</Important>
        が格納されている。
      </Balloon>
      <Balloon char="nakamoto">うん？メタデータ？</Balloon>
      <Balloon char="node">
        メタデータとは、<Important>データについてのデータ</Important>のことだ。
      </Balloon>
      <Balloon char="node">
        PDFを例にとると、PDF上の文字データ以外のデータ、例えば
        <Important>作成日</Important>や<Important>作成者</Important>
        がメタデータにあたる。
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/metadata.png"}
        caption="メタデータ"
      ></Image>
      <Balloon char="nakamoto">
        なるほど、メインのデータに付随しているのがメタデータなんですね！
      </Balloon>
      <Balloon char="node">
        今回の場合だと、そのブロックの直前のハッシュ値、日時、ナンス値などがメタデータだ。
      </Balloon>
      <Balloon char="node">
        特に、<Important>直前のハッシュ値</Important>と
        <Important>ナンス値</Important>
        は今後解説することになるから、しっかりと覚えておこう。
      </Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

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
      <Image src={process.env.PUBLIC_URL + "/imgs/blockchain.png"} />
      <Balloon char="node">
        トランザクションをまとめるブロックがあり、そのブロックが連なっているのがブロックチェーン、と言った感じだ。
      </Balloon>
      <Balloon char="satoshi">
        ブロックが何かしらで繋がっているからブロックチェーンなんですね！
      </Balloon>
      <Balloon char="node">おや？今日は勘がいいな。</Balloon>

      <SubSectionTitle>トランザクション</SubSectionTitle>
      <Image src={process.env.PUBLIC_URL + "/imgs/transaction.png"} />
      <Balloon char="satoshi">
        トランザクション、ですか。あまり聞き馴染みがありませんね。
      </Balloon>
      <Balloon char="node">
        日本語では、「取引」「取引履歴」などとと訳す。ブロックチェーンにおいては、資産の移動を記録する役割がある。
      </Balloon>
      <Balloon char="node">
        トランザクションには、「送信元アドレス」「送信先アドレス」「取引量」「日時」などのデータが記録されている。
      </Balloon>

      <SubSectionTitle>ブロック</SubSectionTitle>
      <Image src={process.env.PUBLIC_URL + "/imgs/block.png"} />
      <Balloon char="node">
        続いてブロックだ。これは、一定量のトランザクションをまとめる役割がある。
      </Balloon>
      <Balloon char="satoshi">
        なんで、トランザクションをまとめる必要があるんですか。
      </Balloon>
      <Balloon char="node">
        いい質問だ。実は、トランザクションの<Important>改ざん</Important>
        を防ぐのに一役買っている。
      </Balloon>
      <Balloon char="node">
        その仕組みについては、次のセクションで解説しよう。
      </Balloon>
      <Balloon char="satoshi">わかりました！</Balloon>
      <Balloon char="node">
        さて、続いてはブロック内にある<Important>ブロックヘッダー</Important>
        について教えよう。
      </Balloon>
      <Image src={process.env.PUBLIC_URL + "/imgs/block-header.png"} />
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

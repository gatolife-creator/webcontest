import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";

export const C3S1 = () => {
  return (
    <Main>
      <MiniSectionTitle>基本構造</MiniSectionTitle>
      <Balloon direction="left">
        ブロックチェーンはざっくりこのような構造をしている。
      </Balloon>
      <Image src={process.env.PUBLIC_URL + "/imgs/blockchain.png"} />
      <Balloon direction="left">
        トランザクションをまとめるブロックがあり、そのブロックが連なっているのがブロックチェーン、と言った感じだ。
      </Balloon>
      <Balloon direction="right">
        ブロックが何かしらで繋がっているからブロックチェーンなんですね！
      </Balloon>
      <Balloon direction="left">おや？今日は勘がいいな。</Balloon>

      <SubSectionTitle>トランザクション</SubSectionTitle>
      <Image src={process.env.PUBLIC_URL + "/imgs/transaction.png"} />
      <Balloon direction="right">
        トランザクション、ですか。あまり聞き馴染みがありませんね。
      </Balloon>
      <Balloon direction="left">
        日本語では、「取引」「取引履歴」などとと訳す。ブロックチェーンにおいては、資産の移動を記録する役割がある。
      </Balloon>
      <Balloon direction="left">
        トランザクションには、「送信元アドレス」「送信先アドレス」「取引量」「日時」などのデータが記録されている。
      </Balloon>

      <SubSectionTitle>ブロック</SubSectionTitle>
      <Image src={process.env.PUBLIC_URL + "/imgs/block.png"} />
      <Balloon direction="left">
        続いてブロックだ。これは、一定量のトランザクションをまとめる役割がある。
      </Balloon>
      <Balloon direction="right">
        なんで、トランザクションをまとめる必要があるんですか。
      </Balloon>
      <Balloon direction="left">
        いい質問だ。実は、トランザクションの<Important>改ざん</Important>
        を防ぐのに一役買っている。
      </Balloon>
      <Balloon direction="left">
        その仕組みについては、次のセクションで解説しよう。
      </Balloon>
      <Balloon direction="right">わかりました！</Balloon>
      <Balloon direction="left">
        さて、続いてはブロック内にある<Important>ブロックヘッダー</Important>
        について教えよう。
      </Balloon>
      <Image src={process.env.PUBLIC_URL + "/imgs/block-header.png"} />
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

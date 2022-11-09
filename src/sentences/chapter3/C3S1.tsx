import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Image } from "../../components/Image";

export const C3S1 = () => {
  return (
    <Main>
      <MiniSectionTitle>基本構造</MiniSectionTitle>
      <Balloon direction="left">
        ブロックチェーンはざっくりこのような構造をしている。
      </Balloon>
      <Image src="#"></Image>
      <Balloon direction="left">
        トランザクションをまとめるブロックがあり、そのブロックが連なっているのがブロックチェーン、と言った感じだ。
      </Balloon>
      <Balloon direction="right">
        ブロックが何かしらで繋がっているからブロックチェーンなんですね！
      </Balloon>
      <Balloon direction="left">おや？今日は勘がいいな。</Balloon>
      <SubSectionTitle>トランザクション</SubSectionTitle>
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
      <Balloon direction="left">
        続いてブロックだ。これは、一定量のトランザクションをまとめる役割がある。
      </Balloon>
      <Balloon direction="right">
        なんで、トランザクションをまとめる必要があるんですか。
      </Balloon>
      <Balloon direction="left">
        いい質問だ。実は、トランザクションの改ざんなどを防止をするのに「承認」と言う作業を行う。この際にブロックの存在が役に立つのだ。
      </Balloon>
      <Balloon direction="left">
        承認については、次のセクションで取り扱おう。
      </Balloon>
      <Pager direction="back" text="はじめに" link="/" />
      <Pager
        direction="forward"
        text="第三節"
      />
    </Main>
  );
};

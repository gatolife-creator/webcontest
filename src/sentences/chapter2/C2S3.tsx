import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { Sum } from "../../components/Sum";

export const C2S3 = () => {
  return (
    <Main>
      <MiniSectionTitle>公開鍵暗号方式</MiniSectionTitle>
      <Balloon direction="right">
        公開鍵暗号方式…。なんだか難しいそうな響きですね。
      </Balloon>
      <Balloon direction="left">
        安心しろ。決して仕組みは難しくない。<Important>秘密鍵</Important>
        で暗号化し、<Important>公開鍵</Important>で復号する仕組みだ。
      </Balloon>
      <Balloon direction="right">はぁ...。</Balloon>
      <Balloon direction="left">
        ナカモト君、下の図を見てみろ。これは、公開鍵暗号方式の仕組みを簡単にあらわしたものだ。
      </Balloon>
      <Balloon direction="right">
        まずは受信者が<Important>秘密鍵</Important>と
        <Important>公開鍵</Important>
        を作るんですね。
      </Balloon>
      <Balloon direction="left">
        送信者が鍵を受け取ったら、<Important>公開鍵</Important>
        でデータを暗号化したのちに送信する。
      </Balloon>
      <Balloon direction="left">
        そして、受信者側では受け取ったデータを
        <Important>秘密鍵</Important>で復号化する。
      </Balloon>
      <Balloon direction="left">
        これでめでたくデータを送信することができた。
      </Balloon>
      <Image
        src={`${process.env.PUBLIC_URL}/imgs/public-key-crypto-system.png`}
      />
      <Balloon direction="right">
        仕組みはわかったんですが、何で鍵を複数作る必要があるんですか？
      </Balloon>
      <Balloon direction="right">
        ふつう、玄関の鍵を閉めるのにも開けるのにも、同じ鍵を使いますよね？
      </Balloon>
      <Balloon direction="left">
        当然の疑問だな。もちろん、暗号化と復号化に同じ鍵を用いる
        <Important>共通鍵暗号方式</Important>というものもある。
      </Balloon>
      <Balloon direction="left">
        しかし、これには
        <Important>「鍵配送問題」</Important>
        といって、鍵の送信中に第三者に鍵を盗まれた場合、送信したデータを盗聴されてしまう恐れがあるのだ。
      </Balloon>
      画像
      <Balloon direction="left">
        一方で、公開鍵暗号方式ならば公開鍵が盗まれても、復号化に使うのは
        <Important>秘密鍵</Important>だから問題ないというわけだ。
      </Balloon>
      画像
      <Image src="#"></Image>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

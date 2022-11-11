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

      <p>
        <Important>公開鍵暗号方式</Important>は、
        <Important>暗号技術</Important>の一種です。
        <br />
        ※
        暗号技術・・・PDF等のデータを他人に盗み見られることなく、他の人と安全にデータをやり取りする技術。
        <br />
        <br />
        用語がやや難しく聞こえるので、ここで少し勉強していきましょう。
        <br />
        まずは、<Important>公開鍵</Important>。 公開鍵とは、
        <Important>データを暗号化するときに使われる</Important>鍵です。
        その名の通り、誰でも使えるように外部に
        <Important>公開</Important>されています。
        <Important>秘密鍵</Important>から作られています。
        <br />
        <br />
        次に<Important>秘密鍵</Important>。<br />
        これは、公開鍵で暗号化したデータを
        <Important>復号するための鍵</Important>です。
        そして、この鍵を所持するのは鍵を作成した人のみ。
        <Important>他の人に公開することはありません</Important>。
      </p>
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
        まずは受信者が<Important>秘密鍵</Important>と<Important>公開鍵</Important>
        を作るんですね。
      </Balloon>

      <Image
        src={`${process.env.PUBLIC_URL}/imgs/public-key-crypto-system.png`}
      />

      <Pager
        direction="back"
      />
      <Pager
        direction="forward"
      />
    </Main>
  );
};

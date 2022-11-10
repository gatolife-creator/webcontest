import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";

export const C5S4 = () => {
  return (
    <Main>
      <MiniSectionTitle>ゲーム</MiniSectionTitle>
      <MiniSectionTitle>double jump.tokyo株式会社</MiniSectionTitle>
      <SubSectionTitle>ゲームにブロックチェーンを活用する理由</SubSectionTitle>
      <p>
        double
        jump.tokyo（ダブルジャンプトーキョー）の2人の代表取締役は、共にソーシャルゲーム開発経験のあるエンジニアです。
        ソーシャルゲームでは毎年数多くのサービス終了があり、サービス終了と共にユーザーの所持していたアイテムが消えてしまいます。
        その点ブロックチェーンゲームでは、ブロックチェーン上でアイテム（NFT）を発行しているため、たとえサービス終了があってもアイテムは消えず、売買も可能です。
        面白いことにゲームの世界観をまたいで、他のゲームでそのアイテムを使用できる場合もあります。
        私たちはブロックチェーンゲームの「ゲームにかけた時間もお金も情熱も、あなたの資産となる世界」にゲームの未来を感じています。
      </p>

      <SubSectionTitle>今後の取り組み</SubSectionTitle>
      <p>
        私たちは「ブロックチェーン技術を使ってゲームの未来を再構築する」ことをミッションにしています。
        そのためには「ブロックチェーンのマスアダプション（大衆化）」が必要だと考えています。
        人気IP（知的財産）のゲームを出すことで、多くの人にブロックチェーンゲームを遊んでもらえるきっかけになることを確信しており、セガやスクエニなどの大手ゲーム会社のIPを活用したブロックチェーンゲーム開発に取り組んでいます。
      </p>

      <SubSectionTitle>皆さんへのコメント</SubSectionTitle>
      <p>
        Web3業界では若者が主役です。
        ブロックチェーンを学べば学ぶほど、これから起きるイノベーションの大きさに驚くと思います。
        テクノロジーのほか、金融経済や法律などの知識があると、より面白い未来を考えることができるようになると思います。
      </p>
      <p></p>
      <Pager direction="back" text="第三節" />
      <Pager direction="forward" text="第五節" />
    </Main>
  );
};

import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Important } from "../../components/Important";

export const C5S2 = () => {
  return (
    <Main duration="long">
      <MiniSectionTitle>ゲーム</MiniSectionTitle>
      <Balloon char="satoshi">
        ゲームにブロックチェーン？あまりピンときませんね...。
      </Balloon>
      <Balloon char="node">これがなかなか絶妙な相性なのだよ。</Balloon>
      <Balloon char="node">
        まず、ブロックチェーンの上のデータは改ざんが困難だったよな？
      </Balloon>
      <Balloon char="satoshi">はい。</Balloon>
      <Balloon char="node">
        ブロックチェーンゲームでは、プログラムがブロックチェーン上で実行されるため、ズルをするのが非常に難しいのだ。
      </Balloon>
      <Balloon char="satoshi">
        確かに、従来のオンラインゲームでは、チートプレーヤーが度々問題になっているから、これは便利そう！
      </Balloon>
      <Balloon char="node">
        さらに、NFTを導入することで<Important>遊んで稼げる</Important>
        ようにもなるのだ。
      </Balloon>
      <Balloon char="satoshi">そんな夢のような話が....</Balloon>
      <Balloon char="node">あるのだ。</Balloon>
      <Balloon char="node">
        例えば、ブロックチェーン上で動作するカードゲームがあったとしよう。
      </Balloon>
      <Balloon char="node">
        ここでもし、あるカードの発行上限を設定した場合、どんなことが起こるかな？
      </Balloon>
      <Balloon char="satoshi">
        そのカードは無限にあるわけじゃないから、希少価値が上がるんじゃないですか？
      </Balloon>
      <Balloon char="node">その通りだ。</Balloon>

      <Balloon char="node">
        このように、ゲームなどのコンテンツを利用し、仮想通貨やNFTなどのデジタル資産を稼ぐことを
        <Important>Play to Earn</Important>と言う。
      </Balloon>
      <Balloon char="node">
        今回はplay top earn gameの開発に取り組んでいる、double
        jump.tokyoを紹介しよう。
      </Balloon>

      <MiniSectionTitle>double jump.tokyo株式会社</MiniSectionTitle>
      <Balloon char="node">
        double jump.tokyo様にインタビューをお願いしました。
      </Balloon>
      <SubSectionTitle>ゲームにブロックチェーンを活用する理由</SubSectionTitle>
      <p>
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

      <SubSectionTitle>皆さんへのメッセージ</SubSectionTitle>
      <p>
        Web3業界では若者が主役です。
        ブロックチェーンを学べば学ぶほど、これから起きるイノベーションの大きさに驚くと思います。
        テクノロジーのほか、金融経済や法律などの知識があると、より面白い未来を考えることができるようになると思います。
      </p>
      <Balloon char="node">
        double jump.tokyo様、インタビューにお答えくださりありがとうござました！
      </Balloon>
      <Balloon char="satoshi">ありがとうござました！</Balloon>
      <Balloon char="node">ありがとうござました！</Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

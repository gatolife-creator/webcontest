import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Important } from "../../components/Important";
import { MdOpenInNew } from "react-icons/md";
import { Image } from "../../components/Image";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { SiteInfo } from "../../pages/Reference";

export const C5S1 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "ゲーム"}
        {lang === "en" && "Game"}
      </MiniSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "ゲームにブロックチェーン？あまりピンときませんね...。"}
        {lang === "en" && "Blockchain in games? I don’t get the point yet...."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "これがなかなか絶妙な相性なのだよ。"}
        {lang === "en" && "It is good chemistry."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "まず、ブロックチェーン上のデータは改ざんが困難だったよな？"}
        {lang === "en" &&
          "First of all, data on blockchain is difficult to tamper with, right?"}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "はい。"}
        {lang === "en" && "Yes."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "ブロックチェーンゲームでは、プログラムがブロックチェーン上で実行されるため、ズルをするのが非常に難しいのだ。"}
        {lang === "en" &&
          "In blockchain games, it is very difficult to cheat because the program runs on the blockchain."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "確かに、従来のオンラインゲームでは、チートプレーヤーが度々問題になっているから、これは便利そう！"}
        {lang === "en" &&
          "Certainly, in traditional online games, cheat players are a problem, so this sounds great!"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            さらに、NFTを導入することで<Important>遊んで稼げる</Important>
            ようにもなるのだ。
          </>
        )}
        {lang === "en" && (
          <>
            Furthermore, the NFT would also allow people to{" "}
            <Important>earn money by playing</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "そんな夢のような話が...."}
        {lang === "en" && "It sounds too good to be true…"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "あるのだ。"}
        {lang === "en" && "There are some things that can be done."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "例えば、ブロックチェーン上で動作するカードゲームがあったとしよう。"}
        {lang === "en" &&
          "For example, let's say there is a card game that runs on blockchain."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "ここでもし、あるレアカードの発行上限を設定した場合、どんなことが起こるかな？"}
        {lang === "en" &&
          "What would happen if we set an issuance limit for certain rare cards?"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && " 希少価値が上がって、需要が大きくなるのでは？"}
        {lang === "en" && "It would be valuable and increasing demand"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "その通りだ。そこで、レアカードを持っている人が持っていない人に売ることで、収益を得ることができるだろう。"}
        {lang === "en" &&
          "Exactly. So, those who have rare cards would be able to earn revenue by selling cards to those who don't have them."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          " そうか！ブロックチェーンだったら、チートの恐れもないしNFTの売買もできる。"}
        {lang === "en" &&
          "I see! If it were blockchain, there would be no fear of cheating, and you could buy and sell NFTs."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "だからブロックチェーンとゲームは相性がいいのか！"}
        {lang === "en" && "So blockchain and games are good chemistry!"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "僕もゲームしてお金稼ぎたいな〜。"}
        {lang === "en" && "I want to play games and make money too!"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            このように、ゲームなどのコンテンツを利用し、仮想通貨やNFTなどのデジタル資産を稼ぐことを
            <Important>Play to Earn</Important>と言う。
          </>
        )}
        {lang === "en" && (
          <>
            In this way, using content such as games to earn digital assets such
            as crypto currency and NFTs is called
            <Important> Play to Earn</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            今回は<Important>MyCryptoHeroes</Important>を手がける、double
            jump.tokyo株式会社を紹介しよう。
          </>
        )}
        {lang === "en" && (
          <>
            Let me introduce you to double jump.tokyo, the company which is{" "}
            <Important>MyCryptoHeroes</Important>.
          </>
        )}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/mch_logo_yoko_b.png"}
        caption="提供：double jump.tokyo株式会社"
        style={{ width: "100%" }}
        disableSwitching={true}
      />

      <MiniSectionTitle>
        {lang === "ja" && "double jump.tokyo株式会社"}
        {lang === "en" && "double jump.tokyo Ink."}
      </MiniSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/doublejumptokyo_logo.png"}
        caption="提供：double jump.tokyo株式会社"
        style={{ width: "100%" }}
        disableSwitching={true}
      />
      <Balloon char="ether">
        {lang === "ja" &&
          "インタビューに回答してくださったのは、double jump.tokyo広報のU.K様です。"}
        {lang === "en" &&
          "We interviewed Ms. U.K, PR Manager of double jump.tokyo."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "ゲームにブロックチェーンを活用する理由"}
        {lang === "en" &&
          "Why does double jump.tokyo use a blockchain for games?"}
      </SubSectionTitle>
      <p>
        {lang === "ja" &&
          "ソーシャルゲームでは毎年数多くのサービス終了があり、サービス終了と共にユーザーの所持していたアイテムが消えてしまいます。その点ブロックチェーンゲームでは、ブロックチェーン上でアイテム（NFT）を発行しているため、たとえサービス終了があってもアイテムは消えず、売買も可能です。面白いことにゲームの世界観をまたいで、他のゲームでそのアイテムを使用できる場合もあります。私たちはブロックチェーンゲームの「ゲームにかけた時間もお金も情熱も、あなたの資産となる世界」にゲームの未来を感じています。"}
        {lang === "en" &&
          "Large number of social game services are shut down every year, and when services end,  items owned by user disappear.In blockchain games, items (NFT) are issued on blockchain, so even if the service is terminated, the items are not lost and it can be bought and sold. Interestingly, the item can be used in other games, even across game worlds. We feel that the future of gaming in blockchain games can be 'a world where the time, money, and passion you put into a game' become your assets."}
      </p>

      <SubSectionTitle>
        {lang === "ja" && "今後の取り組み"}
        {lang === "en" && "Future Initiatives"}
      </SubSectionTitle>
      <p>
        {lang === "ja" &&
          "私たちは「ブロックチェーン技術を使ってゲームの未来を再構築する」ことをミッションにしています。そのためには「ブロックチェーンのマスアダプション（大衆化）」が必要だと考えています。人気IP（知的財産）のゲームを出すことで、多くの人にブロックチェーンゲームを遊んでもらえるきっかけになることを確信しており、セガやスクエニなどの大手ゲーム会社のIPを活用したブロックチェーンゲーム開発に取り組んでいます。"}
        {lang === "en" &&
          "Our mission is to 'reimagine the future of games using blockchain technology.To achieve this, we believe that'mass adoption of blockchain' is necessary. We are convinced that by releasing games with popular IP (intellectual property), it will be an opportunity for many people to play blockchain games, and we are working on developing blockchain games that utilize the IP of major game companies such as Sega and SQUAENI."}
      </p>

      <SubSectionTitle>
        {lang === "ja" && "皆さんへのメッセージ"}
        {lang === "en" && "Message to everyone"}
      </SubSectionTitle>
      <p>
        {lang === "ja" && (
          <>
            Web3<small>※</small>業界では若者が主役です。
            ブロックチェーンを学べば学ぶほど、これから起きるイノベーションの大きさに驚くと思います。
            テクノロジーのほか、金融経済や法律などの知識があると、より面白い未来を考えることができるようになると思います。
          </>
        )}
        {lang === "en" && (
          <>
            Young people are main players in the Web3* industry. The more you
            learn about blockchain, more you will be surprised at innovation
            that will take place. I believe that if you have knowledge of
            financial economics and law in addition to technology, you will be
            able to think about a more interesting future.
          </>
        )}
      </p>

      {lang === "ja" && (
        <>
          <small>
            ※：ブロックチェーンを用いた、分散型のネットワーク。中央管理者が存在する現在のインターネットと対の言葉。
          </small>
        </>
      )}

      {lang === "en" && (
        <>
          *: A decentralized network using blockchain. The opposite of the
          current Internet, where there is a central controller.
        </>
      )}

      <p className="my-3 text-right">
        <a
          href="https://www.doublejump.tokyo/"
          className="link-secondary link text-right"
          target="blank"
        >
          double jump.tokyo
          <MdOpenInNew style={{ display: "inline" }} />
        </a>
      </p>

      <Pager direction="back" />
      <Pager direction="forward" />
      <MiniSectionTitle>
        {lang === "ja" && "参考文献"}
        {lang === "en" && "References"}
      </MiniSectionTitle>
      <SiteInfo
        title="NFTゲームとは？既存ゲームとの違いとおすすめ6選、利益を出す方法も
  | Coincheck（コインチェック）"
        author="Coincheck"
        url="https://paypay.ne.jp/store-media/knowledge/0023_chigai/"
        date="12/22"
      />
    </Main>
  );
};

import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Important } from "../../components/Important";
import { SiteInfo } from "../../pages/Reference";
import { Image } from "../../components/Image";

export const C5S4 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>番外編：高校生web3質問会</MiniSectionTitle>
        <Balloon char="nakamoto">るんるん♪</Balloon>
        <Balloon char="node">ナカモトくん、今日は妙に機嫌が良いな。</Balloon>
        <Balloon char="nakamoto">
          いやぁ〜、実は<Important>Web3 Startups</Important>主催の
          <Important>高校生web3質問会</Important>に行ってきたんですよ！
        </Balloon>
        <Balloon char="node">なかなか積極的じゃないか。</Balloon>
        <Balloon char="nakamoto">
          えへへ、熱意と情熱と意欲で勝ち取りました！
        </Balloon>
        <Balloon char="ether">（全部同じような意味じゃ...？）</Balloon>
        <SubSectionTitle>Web3 Startups</SubSectionTitle>
        <p>
          Web3 Startupsは、double jump.tokyoとgumiが共同で創設した
          <Important>Web3領域での学生起業支援プログラム</Important>。
          <br />
          略称は<Important>ウェブスタ</Important>です。
        </p>
        <SubSectionTitle>高校生web3質問会</SubSectionTitle>
        <p className="mb-10">
          質問に答えてくださったのは、ウェブスタ一期生の
          <Important>高橋 勇作さん</Important>
          。Web3ベースのソーシャルグルメアプリ「
          <Important>Veroo</Important>」の共同開発者であり、起業家です。
          高校生web3質問会は、最初に高橋さんに15分ほどWeb3について解説していただいた後、生徒が質問する約2時間のプログラムでした。
          <br />
          今回ご紹介するのは、高橋さんにお聞きした質問、特にこれからWeb3を学ぶにあたってのアドバイスです。
          <Image
            src={process.env.PUBLIC_URL + "/imgs/meeting-room1.png"}
            caption="高橋さんの解説"
          />
        </p>
        <Balloon char="nakamoto">
          React.js,
          Node.jsなどはよく使うのですが、Solidityは少ししか触ったことがありません。これからどのようにWeb3を勉強したら良いでしょうか？
        </Balloon>
        <Balloon char="takahashi">
          まずは、Web3アプリケーションにふれ、Web3を肌で感じることが大切です。
        </Balloon>
        <Balloon char="takahashi">
          また、Web3についての情報を得るには、Google検索ではなくTwitterを活用するのが良いと思います。
        </Balloon>
        <Balloon char="nakamoto">Twitterですか？</Balloon>
        <Balloon char="takahashi">
          現在、Web3に関する情報は少なく、Googleで調べられる知識は限られています。一方で、Twitterでは最新の情報を得ることができます。
        </Balloon>
        <Balloon char="takahashi">
          他にも、Web3に取り組んでいるコミュニティーに自ら飛び込んでみるのも良いでしょう。
        </Balloon>
        <Balloon char="takahashi">
          先ほど述べたように、Web3関連の情報は少ないので、すでに詳しい人に教わることもWeb3を勉強する上で非常に重要です。
        </Balloon>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/meeting-room2.png"}
          caption="質問会の様子"
        />
        <Balloon char="nakamoto">
          おすすめのコミュニティーはありますか。
        </Balloon>
        <Balloon char="takahashi">
          UNCHAINというコミュニティーがあり、日本語の教材が用意されています。英語圏の教材にあたるのもいいですが、早くキャッチアップしたいのであれば日本語の方がいいかもしれません。
        </Balloon>
        <Balloon char="nakamoto">
          なぜ、WWeb3ベースのソーシャルグルメアプリを開発しているのですか？
        </Balloon>
        <Balloon char="takahashi">
          まず、現在のSNSでは別のプラットフォームでフォロワーを共有することはできません。また、そのプラットフォームがサービス終了した途端、フォロワーを失ってしまいます。一方で、web3においてはフォロワーをNFT化することで、異なるプラットフォームでも既存のフォロワーを引き継ぐことができ、サービス終了してもフォロワーを失う心配はありません。
        </Balloon>
        <Balloon char="takahashi">
          このメリットを活用し、クリエイターとフォロワーの双方をサポートすることで、食に関わる全ての人々を繋ぎ、新たなエコシステムを構築することを目指しています。
        </Balloon>
        <p>
          今回ご紹介したのは、たったの一部。他にもメタバースなど、Web3に関する様々なお話を聞きました。
          <br />
          他にも、アプリケーション開発に使用しているプログラミング言語の内訳や、イーサリアムハッカソンでの出来事など、踏み込んだ話をお聞きすることができました。
        </p>
        <MiniSectionTitle>最後に</MiniSectionTitle>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/T-shirt.png"}
          caption="ロゴ入りTシャツ"
        />
        <Image
          src={process.env.PUBLIC_URL + "/imgs/goods.png"}
          caption="その他グッズ"
        />
        質問に答えてくださった高橋
        勇作さん、また、質問会をサポートしてくださった double
        jump.tokyoの皆様、gumiの皆様に厚くお礼を申し上げます。
        <MiniSectionTitle>参考文献</MiniSectionTitle>
        <SiteInfo
          title="Web3領域で起業を目指す学生向け支援制度「Web3 Startups」一期生決定！"
          author="double jump.tokyo"
          url="https://prtimes.jp/main/html/rd/p/000000102.000034671.html"
          date="12/29"
        />
        <SiteInfo
          title="Web3 Startups　一期生"
          author="gumi"
          url="https://hrmos.co/pages/gumi/jobs/web3_001"
          date="12/29"
        />
        <SiteInfo
          title="Veroo"
          author="Veroo"
          url="https://veroo.xyz/"
          date="12/30"
        />
      </Main>
    </>
  );
};

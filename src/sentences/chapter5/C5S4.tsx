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
        <MiniSectionTitle>
          番外編：高校生web3質問会
        </MiniSectionTitle>
        <Balloon char="nakamoto">るんるん♪</Balloon>
        <Balloon char="node">
          ナカモトくん、今日は妙に機嫌が良さそうだな。
        </Balloon>
        <Balloon char="nakamoto">いやぁ〜、実は</Balloon>
        <SubSectionTitle>Web3 Startupsとは</SubSectionTitle>
        <p>
          Web3 Startupsは、double jump.tokyoとgumiが共同で創設した
          <Important>Web3領域での学生起業支援プログラム</Important>です。
          <br />
          略称は<Important>ウェブスタ</Important>です。
        </p>
        <SubSectionTitle>インタビュー</SubSectionTitle>
        <p>
          インタビューに答えてくださったのは、ウェブスタ一期生の
          <Important>高橋 勇作さん</Important>です。
          高校生web3質問会は、最初に高橋さんが15分web3について解説したのちに、生徒が質問する約二時間のプログラムでした。
        </p>
        <Balloon char="nakamoto">
          JavaScript系統のReact.js,
          Node.jsなどを扱うことができますが、Solidityなどはほとんど触ったことがありません。これからどのようにWeb3を勉強したら良いでしょうか？
        </Balloon>
        <Balloon char="takahashi">
          まずは、Web3のアプリケーションにふれ、肌で感じることでWeb3を理解していくことが大切です。
        </Balloon>
        <Balloon char="takahashi">
          また、Web3についての情報を得るには、Google検索ではなくTwitterを活用するのが良いと思います。
        </Balloon>
        <Balloon char="nakamoto">Twitter...ですか？</Balloon>
        <Balloon char="takahashi">
          （これこれこうで）Web3に関する情報量は少なく、Googleで調べられる知識は限られています。一方で、Twitterでは最新の情報を得ることができます。
        </Balloon>
        <Balloon char="takahashi">
          他にも、web3に取り組んでいるコミュニティーに自ら飛び込んでみるのも良いでしょう。
        </Balloon>
        <Balloon char="takahashi">
          先ほど述べたように、web3関連の情報量は少ないので、すでに詳しい人に教わることで効率よく学ぶことができます。
        </Balloon>
        <Balloon char="nakamoto">
          おすすめのコミュニティーはありますか。
        </Balloon>
        <Balloon char="takahashi">
          UNCHAINというコミュニティーがあり、日本語の教材が豊富です。英語圏の教材にあたるのもいいですが、早くキャッチアップしたいのであれば日本語の方がいいかもしれません。
        </Balloon>
        <Balloon char="nakamoto">
          なぜ、web3ベースのグルメアプリを開発しているのですか？
        </Balloon>
        <Balloon char="takahashi">
          まず、現在のSNSでは別のプラットフォームでフォロワーを共有することはできません。また、そのプラットフォームがサービス終了した途端、フォロワーを失ってしまいます。一方で、web3においてはフォロワーをNFT化することで、異なるプラットフォームでも既存のフォロワーを引き継ぐことができ、サービス終了してもフォロワーを失う心配はありません。
        </Balloon>
        <Balloon char="takahashi">
          このメリットを活用し、クリエイターとフォロワーの双方をサポートすることで、食に関わる全ての人々を繋ぎ、新たなエコシステムを構築することを目指しています。
        </Balloon>
        <MiniSectionTitle>最後に</MiniSectionTitle>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/T-shirt.png"}
          caption="ロゴ入りTシャツ"
        />
        <Image
          src={process.env.PUBLIC_URL + "/imgs/goods.png"}
          caption="その他グッズ"
        />
        インタビューに答えてくださった高橋
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

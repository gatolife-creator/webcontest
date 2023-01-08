import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Important } from "../../components/Important";
import { SiteInfo } from "../../pages/Reference";
import { Image } from "../../components/Image";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Pager } from "../../components/Pager";
import { Crumb } from "../../components/Crumb";

export const C5S4 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <Crumb chapter={5} section={4} />
        <MiniSectionTitle>
          {lang === "ja" && "番外編：高校生web3質問会"}
          {lang === "en" &&
            "Spin-off: High School Student Web3 Question-and-answer Session"}
        </MiniSectionTitle>

        <Balloon char="nakamoto">
          {lang === "ja" && "るんるん♪"}
          {lang === "en" && " Yipeee! Oh happy day~♪"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "ナカモトくん、今日は妙に機嫌が良いな。"}
          {lang === "en" &&
            "Mr. Nakamoto, you seem to be in a happy mood today."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && (
            <>
              いやぁ〜、実は<Important>Web3 Startups</Important>主催の
              <Important>高校生web3質問会</Important>に行ってきたんですよ！
            </>
          )}

          {lang === "en" && (
            <>
              Well, I actually went to{" "}
              <Important>a question-and-answer session</Important> hosted by{" "}
              <Important>Web3 Startups</Important>
            </>
          )}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && "なかなか積極的じゃないか。"}
          {lang === "en" && "You are quite active, aren't you?"}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "えへへ、熱意と情熱と意欲で勝ち取りました。"}
          {lang === "en" &&
            "Hehe, I got the opportunity with enthusiasm, passion, and keenness!"}
        </Balloon>
        <Balloon char="ether">
          {lang === "ja" && "（全部同じような意味じゃ...？）"}
          {lang === "en" && "(They all mean the same things..., don’t they?)"}
        </Balloon>
        <SubSectionTitle>Web3 Startups</SubSectionTitle>
        <p>
          {lang === "ja" &&
            " Web3 Startupsは、double jump.tokyoとgumiが共同で創設した"}
          {lang === "en" &&
            "Web3 Startups is a program established by double jump.tokyo and gumi "}

          <Important>
            {lang === "ja" && "Web3領域での学生起業支援プログラム"}
            {lang === "en" &&
              "to support student entrepreneurs in the Web3 area."}
          </Important>
          <br />

          {lang === "ja" && "略称は、ウェブスタ"}
          {lang === "en" && "It is called WebSTA "}

          {lang === "ja" && "です。"}
          {lang === "en" && "for short."}
        </p>
        <SubSectionTitle>
          {lang === "ja" && "高校生web3質問会"}
          {lang === "en" && "A question-and-answer session"}
        </SubSectionTitle>
        <p className="mb-10">
          {lang === "ja" && " 質問に答えてくださったのは、ウェブスタ一期生の"}
          {lang === "en" &&
            "The question-and-answer session was led by first-year WebSTA student "}

          <Important>
            {lang === "ja" && "高橋 勇作さん"}
            {lang === "en" && "Yusaku Takahashi"}
          </Important>

          {lang === "ja" && "Web3ベースのソーシャルグルメアプリ"}
          {lang === "en" && " Web3-based social gourmet food application"}

          {lang === "ja" && "の共同開発者であり、起業家です。"}
          {lang === "en" && " an entrepreneur and co-creator of "}
          <Important>
            {lang === "ja" && "「Veroo」"}
            {lang === "en" && "'Veroo'"}
          </Important>

          {lang === "ja" &&
            "高校生web3質問会は、最初に高橋さんに15分ほどWeb3について解説していただいた後、生徒が質問する約2時間のプログラムでした。"}
          {lang === "en" &&
            ". The high school web3 Q&A session started with a 15-minute explanation of Web3 by Mr. Takahashi, followed by a 2-hour program in which  students asked questions."}

          <br />

          {lang === "ja" &&
            "今回ご紹介するのは、高橋さんにお聞きした質問、特にこれからWeb3を学ぶにあたってのアドバイスです。"}
          {lang === "en" &&
            "What we would like to introduce here are the questions we asked Mr. Takahashi, especially his advice for learning Web3 in the future."}
          <Image
            src={process.env.PUBLIC_URL + "/imgs/meeting-room1.png"}
            caption={
              lang === "ja"
                ? "高橋さんの説明"
                : lang === "en"
                ? "Explanation by Ms. Takahashi"
                : ""
            }
            disableSwitching={true}
          />
        </p>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "React.js,Node.jsなどはよく使うのですが、Solidityは少ししか触ったことがありません。これからどのようにWeb3を勉強したら良いでしょうか？"}
          {lang === "en" &&
            "I often use React.js, Node.js, etc., but I have only touched Solidity a little. How should I study Web3 from now on?"}
        </Balloon>
        <Balloon char="takahashi">
          {lang === "ja" &&
            "まずは、Web3アプリケーションにふれ、Web3を肌で感じることが大切です。"}
          {lang === "en" &&
            "First of all, it is important to first-hand experience of Web3 by working with Web3 applications."}
        </Balloon>
        <Balloon char="takahashi">
          {lang === "ja" &&
            "また、Web3についての情報を得るには、Google検索ではなくTwitterを活用するのが良いと思います。"}
          {lang === "en" &&
            "Also, to get information about Web3, I think it is better to use Twitter instead of Google search."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "Twitterですか？"}
          {lang === "en" && "Twitter?"}
        </Balloon>
        <Balloon char="takahashi">
          {lang === "ja" &&
            "現在、Web3に関する情報は少なく、Googleで調べられる知識は限られています。一方で、Twitterでは最新の情報を得ることができます。"}
          {lang === "en" &&
            "Currently, there is little information about Web3, and the knowledge you can find on Google. It is limited.On the other hand, you can get the latest information on Twitter."}
        </Balloon>
        <Balloon char="takahashi">
          {lang === "ja" &&
            "他にも、Web3に取り組んでいるコミュニティーに自ら飛び込んでみるのも良いでしょう。"}
          {lang === "en" &&
            "Another good idea is to dive into the communities that are working on Web3 yourself."}
        </Balloon>
        <Balloon char="takahashi">
          {lang === "ja" &&
            "先ほど述べたように、Web3関連の情報は少ないので、すでに詳しい人に教わることもWeb3を勉強する上で非常に重要です。"}
          {lang === "en" &&
            "As I mentioned before, there is not much information related to Web3, so it is very important to learn from those who are already familiar with Web3."}
        </Balloon>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/meeting-room2.png"}
          caption={
            lang === "ja"
              ? "質問会の様子"
              : lang === "en"
              ? "A picture of the session"
              : ""
          }
          disableSwitching={true}
        />
        <Balloon char="nakamoto">
          {lang === "ja" && "おすすめのコミュニティーはありますか。"}
          {lang === "en" &&
            "Are there any communities that you would recommend?"}
        </Balloon>
        <Balloon char="takahashi">
          {lang === "ja" &&
            "UNCHAINというコミュニティーがあり、日本語の教材が用意されています。英語圏の教材にあたるのもいいですが、早くキャッチアップしたいのであれば日本語の方がいいかもしれません。"}
          {lang === "en" &&
            "There is a community called UNCHAIN, which has some materials written in Japanese.It is good try to use materials written in English.But if you want to catch up quickly, Japanese might be a better choice."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            " なぜ、WWeb3ベースのソーシャルグルメアプリを開発しているのですか？"}
          {lang === "en" &&
            "Why are you developing a WWeb3-based social gourmet application?"}
        </Balloon>
        <Balloon char="takahashi">
          {lang === "ja" &&
            "まず、現在のSNSでは別のプラットフォームでフォロワーを共有することはできません。また、そのプラットフォームがサービス終了した途端、フォロワーを失ってしまいます。一方で、web3においてはフォロワーをNFT化することで、異なるプラットフォームでも既存のフォロワーを引き継ぐことができ、サービス終了してもフォロワーを失う心配はありません。"}
          {lang === "en" &&
            "First of all, current social networking sites do not allow you to share your followers on another platform. Also, you will lose your followers as soon as that platform ends its service.On the other hand, with web3, by converting your followers to NFT, you can take over your followers on different platforms, and you do not have to worry about losing your followers even if the service is terminated."}
        </Balloon>
        <Balloon char="takahashi">
          {lang === "ja" &&
            "このメリットを活用し、クリエイターとフォロワーの双方をサポートすることで、食に関わる全ての人々を繋ぎ、新たなエコシステムを構築することを目指しています。"}
          {lang === "en" &&
            "By leveraging this advantage to support both creators and followers, we aim to connect all people involved in the food industry and build a new ecosystem."}
        </Balloon>
        <p>
          {lang === "ja" &&
            " 今回ご紹介したのは、たったの一部。他にもメタバースなど、Web3に関する様々なお話を聞きました。"}
          {lang === "en" &&
            "What I have learnt here is only a part of the story. Mr. Takahashi also talked about various other stories about Web3, such as the Metaverse."}

          <br />

          {lang === "ja" &&
            "他にも、アプリケーション開発に使用しているプログラミング言語の内訳や、イーサリアムハッカソンでの出来事など、踏み込んだ話をお聞きすることができました。"}
          {lang === "en" &&
            "I also heard other in-depth stories, such as breakdown of the programming language used for application development and what he experienced at the Ethereum Hackathon that he participated."}
        </p>
        <MiniSectionTitle>
          {lang === "ja" && "最後に"}
          {lang === "en" && "In the end"}
        </MiniSectionTitle>
        <Image
          src={process.env.PUBLIC_URL + "/imgs/T-shirt.png"}
          caption={
            lang === "ja" ? "ロゴ入りTシャツ" : lang === "en" ? "T-shirt" : ""
          }
          disableSwitching={true}
        />
        <Image
          src={process.env.PUBLIC_URL + "/imgs/goods.png"}
          caption={
            lang === "ja" ? "その他グッズ" : lang === "en" ? "Other goods" : ""
          }
          disableSwitching={true}
        />
        {lang === "ja" &&
          "質問に答えてくださった高橋勇作さん、また、質問会をサポートしてくださった double jump.tokyoの皆様、gumiの皆様に厚くお礼を申し上げます。"}
        {lang === "en" &&
          "We would like to thank Yusaku Takahashi for answering our questions, as well as double jump.tokyo and gumi for their support of the Q&A session."}

        <div />
        <Pager direction="back" />
        <Pager direction="forward" />

        <MiniSectionTitle>
          {lang === "ja" && "参考文献"}
          {lang === "en" && "References"}
        </MiniSectionTitle>
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

import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Important } from "../../components/Important";
import { SiteInfo } from "../../pages/Reference";

export const C5S4 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>
          番外編：高校生web3質問会に参加しました
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
        </p>
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
      </Main>
    </>
  );
};

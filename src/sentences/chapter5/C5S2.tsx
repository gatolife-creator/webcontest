import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { Image } from "../../components/Image";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const C5S2 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "環境対策"}
        {lang === "en" && "Environmental measures"}
      </MiniSectionTitle>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "ブロックチェーンで環境対策？いくら凄い技術だとしても、さすがに環境対策にも使えるとは思えませんよ。"}
        {lang === "en" &&
          "Environmental measures with blockchain?No matter how great the technology is, you can't really expect it to be used for environmental measures, indeed."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            {" "}
            確かに、ブロックチェーンはあくまでデジタル上の技術だ。だが、ブロックチェーンの
            <Important>透明性</Important>や<Important>即時性</Important>
            が、<Important>流通の無駄を減らす</Important>手助けになる。
          </>
        )}
        {lang === "en" && (
          <>
            Indeed, blockchain is only a digital technology. But{" "}
            <Important>transparency</Important> and{" "}
            <Important>immediacy</Important> of blockchain can help{" "}
            <Important>reduce waste</Important> in distribution.
          </>
        )}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "どういうことですか？"}
        {lang === "en" && "What do you mean?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "例えば食料品だ。従来の流通システムでは、食料品は生産場所からいろいろな機関を介して私たち消費者に届けられる。"}
        {lang === "en" &&
          "Talking about foodstuffs, for example. In the traditional distribution system, foodstuffs are delivered from the place of production through various agencies."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "そのため生産者と消費者の間のどこかに食料品の不適切な扱いや輸送、保管などがあると食料品がダメになってしまう場合があるんだ。"}
        {lang === "en" &&
          "So if there are improper handlings between producers and consumers, such as transportation, or storage of foodstuffs, fresh food would go bad."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "それは嫌ですね。"}
        {lang === "en" && "I don't like that."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "だろう。そこでブロックチェーンの出番だ。"}
        {lang === "en" &&
          "You don't want to. So, Blockchain solve the problem."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "ブロックチェーンを使えば食料品がどのような経路をたどってきたかが一目でわかる。これによって食料品が適切な扱いを受けているかを確かめることができるのだ。"}
        {lang === "en" &&
          "With blockchain, you can see at a glance how your foodstuffs have been routed.This allows us to make sure that the foodstuffs are being handled properly."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "なるほど。これなら食糧廃棄を減らすことができそうですね！"}
        {lang === "en" && "I see. That should help reduce food waste!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "さて、これらの知識を踏まえて、日本企業の取り組みを見てみよう。"}
        {lang === "en" &&
          "Now, with this knowledge in mind, let's take a look at the efforts of a Japanese company."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            今回紹介するのは株式会社chaintope、独自のブロックチェーン
            <Important>Tapyrus</Important>を<Important>電力取引</Important>や
            <Important>サプライチェーン</Important>
            に活用している。
          </>
        )}
        {lang === "en" && (
          <>
            I would like to introduce chaintope Inc., which is using its
            proprietary blockchain <Important>Tapyrus</Important> for{" "}
            <Important>power trading</Important> and{" "}
            <Important>supply chain</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" &&
          "インタビューに回答してくださったのは、chaintope事業開発担当のH.K様です！"}
        {lang === "en" &&
          "We interviewed Mr.H.K  In charge of development of Chaintope Ink."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/TAPYRUS_horizontal_CMYK.png"}
        caption={
          lang === "ja"
            ? "提供：株式会社chaintope"
            : lang === "en"
            ? "Provided by Chaintope Inc."
            : ""
        }
        style={{}}
        disableSwitching={true}
      />
      <MiniSectionTitle>
        {lang === "ja" && "株式会社chaintope"}
        {lang === "en" && "Chaintope Ink."}
      </MiniSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/chaintope_line2.jpg"}
        caption={
          lang === "ja"
            ? "提供：株式会社chaintope"
            : lang === "en"
            ? "Provided by Chaintope Inc."
            : ""
        }
      />
      <SubSectionTitle>
        {lang === "ja" && " 電力取引にブロックチェーンを活用する理由"}
        {lang === "en" &&
          "Why does Chaintope Ink. use blockchain for electricity trading?"}
      </SubSectionTitle>
      <p>
        {lang === "ja" &&
          "温室効果ガスの排出を全体としてゼロにする「カーボンニュートラル」の流れの中で、再生可能エネルギー由来の電力を発電・消費していることの証明や、証明書自体を売買する取り組みが、世界的に拡大しています。電力のやり取りでも、カーボンクレジット（温室効果ガスの削減量を売買可能にしたもの）発行申請の根拠となる等、発電・消費情報の正確性は極めて重視されます。電子データの真正性を保証するブロックチェーン技術を活用する理由はここにあります。将来的には、電力会社を介さない個人間取引（P2P取引）において、売買のマッチングや決済、取引時に使用するトークンの発行・管理等を、ブロックチェーン上で自動的に行うことも可能です。"}
        {lang === "en" &&
          "In the trend toward 'carbon neutrality', which aims to reduce greenhouse gas emissions to zero overall, efforts to prove that power is generated and consumed from renewable energy sources, and to trade the certificates themselves, are expanding worldwide. Even in the exchange of electricity, the accuracy of information on power generation and consumption is extremely important, as it is the basis for applications to issue carbon credits (a tradable reduction in greenhouse gas emissions).　This is the reason for utilizing blockchain technology, which guarantees the authenticity of electronic data. In the future, in transactions between individuals (P2P transactions) that do not involve electric power companies, matching and settlement of sales and purchases, as well as the issuance and management of tokens used during transactions, can be performed automatically on blockchain."}
      </p>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

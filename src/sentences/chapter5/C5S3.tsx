import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { MdOpenInNew } from "react-icons/md";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { SiteInfo } from "../../pages/Reference";
import { Crumb } from "../../components/Crumb";

export const C5S3 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <Crumb chapter={5} section={3} />
      <MiniSectionTitle>
        {lang === "ja" && "サプライチェーン"}
        {lang === "en" && "Supply Chain"}
      </MiniSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" && " サプライチェーン？あまり聞き馴染みがありませんね。"}
        {lang === "en" && "Supply chain? It is not very familiar to us."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "簡単に言うと、"}
        {lang === "en" && "Simply put,"}
        <Important>
          {lang === "ja" && "商品が消費者に届けられるまでの流れを表す。"}
          {lang === "en" && " it describes the flow of goods to the consumer."}
        </Important>
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "経済産業省は、ブロックチェーンは67兆円もの影響を日本経済に与えると推測してるのだが、"}
        {lang === "en" &&
          "The Ministry of Economy, Trade and Industry (METI) estimates that blockchain will have a 67 trillion yen impact on the Japanese economy."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            実はその半数が<Important>サプライチェーン</Important>
            の効率化等によるものと考えられている。
          </>
        )}
        {lang === "en" && (
          <>
            In fact, half of that amount is thought to be due to{" "}
            <Important>supply chain</Important> efficiency improvements.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "は、半数も！？"}
        {lang === "en" && "Half of that!?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            {" "}
            サプライチェーンにおける課題として、
            <Important>商品の過剰生産、欠品</Important>
            などが挙げられるが、これらの原因は事業者間の
            <Important>情報共有が不十分</Important>であることにある。
          </>
        )}
        {lang === "en" && (
          <>
            One of the issues in the supply chain is{" "}
            <Important>overproduction and shortages of goods</Important>, which
            are caused by{" "}
            <Important>insufficient information sharing</Important> among
            businesses.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            そこで、ブロックチェーンの<Important>透明性</Important>と
            <Important>改ざん耐性</Important>
            を活用し、データを共有することで効率化を図ろうと言うわけだ。
          </>
        )}
        {lang === "en" && (
          <>
            Therefore, <Important>the transparency</Important> and{" "}
            <Important>tamper-resistance</Important> of blockchain is being used
            to share data to improve efficiency.
          </>
        )}
      </Balloon>

      <MiniSectionTitle>
        {lang === "ja" && "株式会社chaintope"}
        {lang === "en" && "Chaintope Inc."}
      </MiniSectionTitle>
      <SubSectionTitle>
        {lang === "ja" && "サプライチェーンにブロックチェーンを活用する理由"}
        {lang === "en" && "Why Blockchain for Supply Chain?"}
      </SubSectionTitle>

      <p>
        {lang === "ja" && (
          <>
            {" "}
            サプライチェーン（SC）とは、製品の原材料・部品の調達から生産、販売、消費までの一連の流れを指しますが、SCでは「モノ」「カネ」等多くの情報がやり取りされます。誤った情報が記録・流通してしまうと、取引の前提が崩れ、ビジネスが成立しなくなってしまいますが、ここにブロックチェーン技術を用いることで、情報の正確性を保証します。
            特に、当社の開発したTapyrus（タピルス）は、パブリックチェーン
            <small>※1</small>&nbsp;の持つオープン性と、プライベートチェーン
            <small>※2</small>
            &nbsp;の特性である管理権限の制御を、技術上同時に実現可能です。
            経済のグローバル化が進む今日、情報の正確性を損なわずに安価にシステムを実装・拡張できるTapyrusは、多くのお客様に評価いただいています。
          </>
        )}
        {lang === "en" && (
          <>
            Supply chain (SC) refers to a series of processes from procurement
            of raw materials and parts to production, sales, and consumption of
            products, and in SC, a lot of information such as "goods" and
            "money" are exchanged. If incorrect information is recorded and
            circulated, the premise of the transaction will be destroyed and the
            business will cease to exist. In particular, Tapyrus, which we
            developed, can technically realize the openness of a public chain*1
            and the control of management authority, which is a characteristic
            of a private chain*2, simultaneously. In today's globalized economy,
            Tapyrus is highly valued by many customers because it can be
            implemented and expanded inexpensively without compromising the
            accuracy of infomation.
          </>
        )}
      </p>

      <small>
        {lang === "ja" && (
          <>
            ※1：パブリックチェーン・・・管理者がおらず、誰でも参加可能なブロックチェーン。
            <br />
            ※2：プライベートチェーン・・・管理者が許可した参加者が参加可能なブロックチェーン。
          </>
        )}
        {lang === "en" && (
          <>
            *1: Public chain: A blockchain in which there is no administrator
            and anyone can participate. 2: Private chain: A blockchain in which
            only participants authorized by the administrator can participate.
          </>
        )}
      </small>

      <SubSectionTitle>
        {lang === "ja" && "今後の取り組み"}
        {lang === "en" && "Future Initiatives"}
      </SubSectionTitle>
      <p>
        {lang === "ja" &&
          "サプライチェーンや電力の例でもお示ししたとおり、当社のブロックチェーン技術の強みは、電子データの真正性証明やそのデータを基にした価値の取引を、多くの主体を巻き込んだ形で実現可能であることです。 現在当社では、様々な情報（物流・商流情報、電力の発電・消費量、温室効果ガスの排出・削減量、行政機関の保有する住民情報等）の証明、さらにそれらの情報の価値化を、様々な分野のお客様とともに進めています。カーボンニュートラルの実現やサーキュラーエコノミー社会への移行といった人類共通の目標を見据えながらも、（世界中の）地域住民の日々の生活を少しでも良くするために、ブロックチェーンの社会実装を推進してまいります。"}
        {lang === "en" &&
          "As shown in the examples of supply chain and electric power, the strength of our blockchain technology is that it can prove the authenticity of electronic data and realize transactions of value based on such data, involving many entities. We are currently working with customers in various fields to prove the authenticity of various types of information (logistics and commercial distribution information, electricity generation and consumption, greenhouse gas emissions and reductions, information on residents held by government agencies, etc.) and to convert such information into value. We will continue to promote the social implementation of blockchain in order to improve the daily lives of local residents (around the world) as much as possible, while keeping in mind the common goals of mankind, such as the realization of carbon neutrality and the transition to a circular economy society."}
      </p>

      <SubSectionTitle>
        {lang === "ja" && "皆さんへのメッセージ"}
        {lang === "en" && "Message to everyone"}
      </SubSectionTitle>
      <p>
        {lang === "ja" &&
          "ブロックチェーンという最先端技術を学ぶことは、みなさんにとってそれ自体非常にエキサイティングな体験だと思います。そのうえで、もしみなさんが将来、仕事としてブロックチェーンに関わることを検討されているのでしたらもう一つ、「これは誰の暮らしを便利にするのか？」という視点を持つと良いと考えます。例えば「電気」という100年前の最先端技術は、ファラデーの新発見が魅力的だったことに加え、エジソンをはじめとする多くの先人の努力により、それが蒸気機関よりも「便利」だと多くの人々に認識されるに至ったために、世の中に広まりました。みなさんの学ばれた知識や技術の種が、それぞれの形で大きく花開くことをお祈りいたします。"}
        {lang === "en" &&
          "Learning about the cutting-edge technology of blockchain is an exciting experience.If you consider working with blockchain in the future, it would be good to have another point of view: 'Whose life will this make convenient?' For example, the cutting-edge technology of 'electricity' was spread to the world 100 years ago because of Faraday's fascinating new discovery. It was recognized by many people as more 'convenient' than the steam engine. Thanks to the efforts of Edison and many others.I hope that the seeds of knowledge and technology that you have learned will bloom in their own ways. "}
      </p>
      <p className="my-3 text-right">
        <a
          href="https://www.chaintope.com/"
          className="link-secondary link text-right"
          target="blank"
        >
          chaintope
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
        title="サプライチェーンとは何か具体例を交えて徹底解説｜三井倉庫グループ"
        author="三井倉庫グループ"
        url="https://www.mitsui-soko.com/column/2019/11"
        date="12/22"
      />

      <SiteInfo
        title="ブロックチェーンが与えるサプライチェーンマネジメントへのインパクト
            | DATA INSIGHT | NTTデータ"
        author="NTTデータ"
        url="https://www.nttdata.com/jp/ja/data-insight/2019/0221/"
        date="12/22"
      />
    </Main>
  );
};

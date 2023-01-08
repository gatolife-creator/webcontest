import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { Crumb } from "../../components/Crumb";

export const C4S1 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <Crumb chapter={4} section={1} />
        <MiniSectionTitle>
          {lang === "ja" && "仮想通貨"}
          {lang === "en" && "Cryptocurrency"}
        </MiniSectionTitle>
        <SubSectionTitle>
          {lang === "ja" && "仮想通貨とは"}
          {lang === "en" && "What is cryptocurrency"}
        </SubSectionTitle>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "さっきまでの説明にたびたび「仮想通貨」って出てきましたけど、僕たちが使っている「円」とは何が違うんですか？"}
          {lang === "en" &&
            'You mentioned "crypto currency" often in your explanation before, but what is the difference between it and the "yen" we use?'}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              これらの違いを一言で表すなら、<Important>第三者の信用</Important>
              を必要とするか否かだ。
            </>
          )}
          {lang === "en" && (
            <>
              If I were to describe these differences briefly, it would be
              whether they require{" "}
              <Important>the trust of a third party</Important> or not.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "第三者の信用？"}
          {lang === "en" && "Third-party credit?"}
        </Balloon>

        <SubSectionTitle>
          {lang === "ja" && "仮想通貨の特長"}
          {lang === "en" && "Features of virtual currency"}
        </SubSectionTitle>
        <Balloon char="node">
          {lang === "ja" &&
            "私たちが使っている「円」、ヨーロッパで使われる「ユーロ」。これらは誰が管理しているかわかるかな？"}
          {lang === "en" &&
            'The "yen" we use, the "euro" used in Europe. Do you know who manages these?'}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "日本政府とかEUですね。"}
          {lang === "en" && "The Japanese government or the EU."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "そうだ。じゃあ、もしもどこのだれが作ったのかわからない通貨があったとしたら、君は使いたいと思うか。"}
          {lang === "en" &&
            "That's right. Then, if there was a currency that you did not know who made it, would you want to use it?"}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "それは嫌ですよ。誰が管理しているかわからないものなんて使いたくありません。"}
          {lang === "en" &&
            "I don't want to do that. I don't want to use something that I don't know who controls."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              当然だな。円やユーロなどの<Important>法定通貨</Important>
              の場合、政府機関が通貨偽造対策、ゴールドの確保によってその価値を保証している。
            </>
          )}
          {lang === "en" && (
            <>
              Of course. In the case of <Important>legal tenders</Important>{" "}
              such as the yen and the euro, their value is guaranteed by
              government agencies through anti-counterfeiting measures and by
              securing gold.
            </>
          )}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && "一方で仮想通貨はどうかな？"}
          {lang === "en" && "How about cryptocurrencies?"}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "あれ？仮想通貨って誰が管理するんだろう...？"}
          {lang === "en" && "Huh? Who manages cryptocurrency...?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              答えは<Important>ブロックチェーンの仕組み</Important>だ。
            </>
          )}
          {lang === "en" && (
            <>
              The answer is <Important>blockchain mechanism.</Important>
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "ブロックチェーンによる改ざん対策によって、その価値を保証している。"}
          {lang === "en" &&
            "Its value is guaranteed by the anti-tampering measures of the blockchain."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              このように、第三者の信用を必要としないことを
              <Important>トラストレス</Important>という。
            </>
          )}
          {lang === "en" && (
            <>
              The thing does not need the trust of a third party is called{" "}
              <Important>trustless.</Important>
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "トラストレスだとどんないいことがあるんですか？"}
          {lang === "en" && "What are the advantages of being trustless?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              一つには、<Important>個人間送金が可能</Important>
              という点が挙げられる。
            </>
          )}
          {lang === "en" && (
            <>
              For one thing, it’s{" "}
              <Important>
                possible to provide a person-to-person money transfers.
              </Important>
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "通常、海外送金を行う際には、信用できる銀行に仲介をお願いする。"}
          {lang === "en" &&
            "Normally, when you make an overseas remittance, you would ask a trustworthy bank to act as an intermediary."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "その際に手数料が差し引かれてしまう。"}
          {lang === "en" && "You would pay a lot of fees."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "確かにそうですね。"}
          {lang === "en" && "That is certainly true."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              一方仮想通貨では、個人に直接送金できるため、
              <Important>手数料があまりかからない</Important>。
            </>
          )}
          {lang === "en" && (
            <>
              With cryptocurrency, you can send money directly to individuals,
              so <Important>you don't have to pay a lot of fees.</Important>
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "それはいいですね！"}
          {lang === "en" && "That's great!"}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" && (
            <>
              さらに、権力を持つ者に
              <Important>財産を差し押さえられる心配が少ない</Important>
              、と言った点も仮想通貨のメリットだ。
            </>
          )}
          {lang === "en" &&
            "Another advantage of cryptocurrency is that there is less fear of having one's property seized by someone with power."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "仮想通貨の性質上、送金を行えるのは本人のみ。差し押さえるのが非常に難しいわけだ。"}
          {lang === "en" &&
            "Due to the nature of cryptocurrency, only the individual can transfer money. This makes it very difficult to be seized"}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "なるほど〜。"}
          {lang === "en" && "I see."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "実際に、政府の権力が強い中華人民共和国では、財産差し押さえの懸念から、マイニング事業が発展した。"}
          {lang === "en" &&
            "In fact, in China, where a government power is strong, the mining business has developed due to concerns about seizure of property."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "なお現在（2022年時点）、中国政府は金融の安定性を危惧して、マイニングが禁止されている。"}
          {lang === "en" &&
            "Currently (as of 2022), mining is banned by the Chinese government due to concerns about financial stability."}
        </Balloon>

        <SubSectionTitle>
          {lang === "ja" && "仮想通貨のデメリット"}
          {lang === "en" && "Disadvantages of Cryptocurrency"}
        </SubSectionTitle>
        <Balloon char="node">
          {lang === "ja" && "一方で、仮想通貨にはデメリットもある。"}
          {lang === "en" && "Cryptocurrencies also have disadvantages."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "そうなんですか？"}
          {lang === "en" && "Really?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              まず、<Important>価格変動が大きい</Important>という点だ。
            </>
          )}
          {lang === "en" && (
            <>
              First, there is <Important>a large price fluctuation.</Important>
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "価格変動が大きい？"}
          {lang === "en" && "The large price fluctuations?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              そう。基本的に仮想通貨の価値は、その利用者の
              <Important>期待に大きく依存する</Important>。
            </>
          )}
          {lang === "en" && (
            <>
              Yes, it is. Basically, the value of a cryptocurrency{" "}
              <Important>
                depends largely on the expectations of its users.
              </Important>
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "仮想通貨に新機能が盛り込まれれば、価格は跳ね上がるし、仮想通貨が改ざんの被害を受けたものなら、価格は大きく下がってしまう。"}
          {lang === "en" &&
            "If a new function is included in a cryptocurrency, the price will jump, and if the cryptocurrency is the one that has been damaged by tampering, the price will drop significantly."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "なるほど...。"}
          {lang === "en" && "I see..."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "それゆえ、普段使いする決済手段としては不便であると言った問題も存在する。"}
          {lang === "en" &&
            "Therefore, there is a problem that it is inconvenient as a means of payment for everyday use."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              一方で、<Important>ステーブルコイン</Important>と言って、
              <Important>法定通貨と価格が連動する</Important>
              ように設計された通貨も開発されている。
            </>
          )}
          {lang === "en" && (
            <>
              <Important>Stable coins</Important>, which are designed to be
              linked to legal tender, are also being developed.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "今後の進歩に目が離せませんね！"}
          {lang === "en" &&
            "We'll have to keep our eyes peeled for further development!"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              次のデメリットは、
              <Important>決済が確定するまでに時間がかかる</Important>
              という点だ。
            </>
          )}
          {lang === "en" && (
            <>
              The next disadvantage is that{" "}
              <Important>
                it takes time for the payment to be finalized.
              </Important>
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "あれ、電子決済だからはやいんじゃ？"}
          {lang === "en" &&
            "Hey, it's an electronic payment, so isn't it fast?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              採用されているコンセンサス・アルゴリズムにもよるが、PoWを採用するビットコインでは、
              <Important>1秒間に約5〜10件</Important>
              ほどのトランザクションしかさばけない。
            </>
          )}
          {lang === "en" && (
            <>
              Depending on the consensus algorithm used, Bitcoin, which uses
              PoW, can{" "}
              <Important>
                only handle about 5 to 10 transactions per second.
              </Important>
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              一方、クレジットカード「Visa」では
              <Important>1秒間に約1700件</Important>の決済を行うことができる。
            </>
          )}
          {lang === "en" && (
            <>
              The Visa credit card can handle{" "}
              <Important>about 1,700 transactions per second.</Important>
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "雲泥の差ですね...。"}
          {lang === "en" && "That's a huge difference..."}
        </Balloon>

        <Pager direction="back" />
        <Pager direction="forward" />

        <MiniSectionTitle>
          {lang === "ja" && "参考文献"}
          {lang === "en" && "References"}
        </MiniSectionTitle>
        <BookInfo
          title="図解即戦力
            ブロックチェーンのしくみと開発がこれ1冊でしっかりわかる教科書"
          author="コンセンサスベイス・株式会社"
          publisher="技術評論社"
          year={2019}
        />
        <SiteInfo
          title="中国で仮想通貨が「全面禁止」になった理由と、矛盾もはらむ政府の思惑
            | WIRED.jp"
          author="WIRED"
          url="https://wired.jp/2021/10/07/chinas-sweeping-cryptocurrency-ban-inevitable/"
          date="12/22"
        />

        <SiteInfo
          title="仮想通貨と電子マネーの違いはなに？それぞれのメリットについて解説！
            - PayPay"
          author="PayPay"
          url="https://paypay.ne.jp/store-media/knowledge/0023_chigai/"
          date="12/22"
        />
      </Main>
    </>
  );
};

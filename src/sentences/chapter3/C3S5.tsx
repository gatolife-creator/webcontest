import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { Image } from "../../components/Image";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C3S5 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <Crumb chapter={3} section={5} />
      <MiniSectionTitle>
        {lang === "ja" && "コンセンサスアルゴリズム（2）"}
        {lang === "en" && "Consensus Algorithm (2)"}
      </MiniSectionTitle>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            さて、今回はPoWの問題を解消するべく発明された
            <Important>PoS</Important>について見ていこう。
          </>
        )}
        {lang === "en" && (
          <>
            Now, let's look at <Important>PoS</Important>, which was invented to
            solve the PoW problems
          </>
        )}
      </Balloon>

      <SubSectionTitle>PoS（Proof of Stake）</SubSectionTitle>
      <Balloon char="node">
        {lang === "ja" &&
          "PoWでは、コンピューターの計算能力が高いほど、ブロックを承認できる確率が高くなる。"}
        {lang === "en" &&
          "In PoW, when the calculation ability of the computer is high, there is a probability that a block can be approved."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            一方、PoSでは<Important>通貨の保有量が高い</Important>
            ほど、ブロックを承認できる確率が高くなる。
          </>
        )}
        {lang === "en" && (
          <>
            On the other hand, in PoS, When{" "}
            <Important>the amount of currency is high</Important>, there is a
            possibility that a block can be approved.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "もちろん、ブロックの承認に成功したものは、報酬を得られる。"}
        {lang === "en" &&
          "Of course, those that succeed in approving the block will be rewarded"}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "ふむふむ。これがどうしていいんですか？"}
        {lang === "en" && "Hmmm. How is it good?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            まず、ブロックの承認をするのに、
            <Important>少ない電力で済む</Important>
            という点だ。
          </>
        )}
        {lang === "en" && (
          <>
            First of all, it is <Important>low power consumption</Important>{" "}
            When approves a block.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "なるほど、PoSでは計算競争がありませんもんね！"}
        {lang === "en" &&
          "I see, with PoS, there is no computational competition!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "さらに、使われ始めたばかりの仮想通貨でも、改ざんされるリスクが低い。"}
        {lang === "en" &&
          "Furthermore, there is a low risk of tampering, even with crypto currencies that are just starting to be used."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "なんでですか？"}
        {lang === "en" && "Why?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "改ざんをするためには、多くの通貨を買い集める必要がある。"}
        {lang === "en" &&
          "In order to tamper, you need to buy a lot of currency."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "改ざんするためにはお金が必要ということか！"}
        {lang === "en" && "You mean, in order to tamper, you need money!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "その通りだ。仮に十分な通貨を集めて改ざんに成功したとしても、改ざんした結果通貨の価値が下がることがある。"}
        {lang === "en" &&
          "That's right. Even if you succeed in collecting enough currency to tamper with, the value of the currency may decrease as a result of tampering."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "改ざんして得をするどころか、通貨の価値が下がって損をしてしまうのですね！"}
        {lang === "en" &&
          "So instead of gaining from tampering, the currency loses value!"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "よくできた仕組みだなぁ。"}
        {lang === "en" && "That's a well-designed mechanism."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "やっぱりこれからは、PoWの代わりにPoSが採用されるようになるんですか？"}
        {lang === "en" &&
          "After all, will PoS be adopted instead of PoW from now on?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "うむ、確かにイーサリアムでもPoWからPoSへ移行された。"}
        {lang === "en" &&
          "Yes, it is true that even Ethereum has moved from PoW to PoS."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "だがやはり、PoSも完璧とは言えない。"}
        {lang === "en" && "But still, PoS is not perfect either."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "PoSの問題点"}
        {lang === "en" && "Problems with PoS"}
      </SubSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "電力を節約できて、改ざんにも強い。一体なんの問題があるっていうんですか？"}
        {lang === "en" &&
          "It saves power and is tamper-resistant. What's the problem?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            まずは、<Important>通貨の流動性が低下する</Important>
            という点だ。
          </>
        )}
        {lang === "en" && (
          <>
            To put it simply, it{" "}
            <Important>reduces the liquidity of the currency</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "うん？"}
        {lang === "en" && "Hmmm?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            まぁ簡単にいえば、<Important>通貨の取引が活発化しない</Important>
            ということだ。
          </>
        )}
        {lang === "en" && (
          <>
            Well, simply put, it means that{" "}
            <Important>the currency will not be actively traded</Important>.
          </>
        )}
      </Balloon>

      <Balloon char="ether">
        {lang === "ja" &&
          " PoSの場合、積極的に通貨を使うよりも、そのまま持ち続けていた方がブロックの承認に成功しやすいですからね。"}
        {lang === "en" &&
          "In the case of PoS, it is easier to succeed in getting a block approved if you hold on to the currency rather than actively use it."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            流動性が低くなるのに加えて、
            <Important>通貨を多く保有する人が有利</Important>
            になると言ったデメリットもある。
          </>
        )}
        {lang === "en" && (
          <>
            In addition to being less liquid. advantage to those who hold more
            currency. In addition to being less liquid, it also has{" "}
            <Important>
              the disadvantage of favoring those who hold more of the currency
            </Important>
            .
          </>
        )}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" && " お金持ちが、さらにお金持ちになるイメージですね。"}
        {lang === "en" && " It is an image of the rich getting even richer."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "新たなコンセンサス・アルゴリズム"}
        {lang === "en" && "New Consensus Algorithm"}
      </SubSectionTitle>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "もう、いつになったら完璧なコンセンサス・アルゴリズムができるんですか？"}
        {lang === "en" &&
          "When are we going to have a perfect consensus algorithm?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "まぁまぁ落ち着け。PoSを元に、新たなコンセンサス・アルゴリズムが提案または実装されている。"}
        {lang === "en" &&
          "Well, well, well, calm down; a new consensus algorithm has been proposed or implemented based on PoS."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "ぜひ教えてください！"}
        {lang === "en" && "Please let us know!"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            代表的なものに<Important>PoI（Proof of Importance）</Important>
            がある。
          </>
        )}
        {lang === "en" && (
          <>
            A typical one is <Important>PoI (Proof of Importance)</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            通貨の保有量はもちろんのこと、<Important>取引量</Important>や
            <Important>取引回数</Important>
            から通貨の流動性における、その人の重要度を算出する。これを元にブロックの承認権が与えられる。
          </>
        )}
        {lang === "en" && (
          <>
            It calculates a person's importance in the liquidity of a currency
            based on <Important>the amount of currency held</Important>, as well
            as <Important>the volume</Important> and{" "}
            <Important>number of transactions</Important>.Based on this, a
            person is given the right to approve a block. So you are making sure
            that you do not accumulate currency because you want approval
            rights.
          </>
        )}
      </Balloon>
      <Image src={process.env.PUBLIC_URL + "/imgs/PoS.png"} caption="PoI" />
      <Balloon char="ether">
        {lang === "ja" &&
          "承認権欲しさに、通貨を溜め込むことがないようにしているわけですね。"}
        {lang === "en" &&
          "So you are making sure that you do not accumulate currency for the sake of approval rights."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "PoIを利用している仮想通貨の代表例は、<Important>ネム（XEM）</Important>だ。"}
        {lang === "en" &&
          "A typical example of a crypto currency that uses PoI is Nem (XEM)."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            他にも、<Important>DPoS（Delegated Proof of Stake）</Important>
            というものがある。
          </>
        )}
        {lang === "en" && (
          <>
            Another example is{" "}
            <Important>DPoS (Delegated Proof of Stake)</Important>
          </>
        )}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "なんかPoSと名前が似てますね。"}
        {lang === "en" && "It's kind of similar to PoS."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            頭文字<Important>D</Important>がポイントだ。
          </>
        )}
        {lang === "en" && <>The initial D is the key.</>}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            Delegatedの略で、<Important>委任</Important>を表す。
          </>
        )}
        {lang === "en" && (
          <>
            It stands for Delegated and represents{" "}
            <Important>delegation</Important>
          </>
        )}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "委任、ですか。"}
        {lang === "en" && "Delegation, huh?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "そう、DPoSでは通貨保有量に応じ投票者が選ばれ、投票によってブロック生成・承認権が与えられるという仕組みになっている。"}
        {lang === "en" &&
          "Yes, in DPoS, voters are selected according to the amount of currency they hold, and the right to generate and approve blocks is given to them by voting."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "はぁ...。それの何がすごいんですか？"}
        {lang === "en" && "Wow.... What is it so great?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "PoSでは、通貨を多く保有している人がブロックの生成・承認を牛耳っていた。"}
        {lang === "en" &&
          "In PoS, the person who holds the most currency controls the generation and approval of blocks."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          " 一方、DPoSではブロックの生成・承認を他人に委ねるから、通貨を多く持っているだけでは不正が難しくなるのだ。"}
        {lang === "en" &&
          "On the other hand, in DPoS, the generation and approval of blocks are left to others, making it more difficult to cheat just by holding a lot of currency."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "それじゃあ、投票によって選ばれた人が不正を働くこともできるんじゃないんですか？"}
        {lang === "en" &&
          "So wouldn't it be possible, then, for someone selected by vote to commit fraud?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "いい質問だ。実は、承認者が不正を働いた場合、承認者のみならずその投票者にもペナルティーが課される。"}
        {lang === "en" &&
          "Good question. Actually, if an approver cheats, not only the approver but also his/her voters will be penalized."}
      </Balloon>

      <Balloon char="ether">
        {lang === "ja" &&
          "つまり、投票者は信用できる承認者を選ばなければならないのですね。"}
        {lang === "en" && "So the voter has to choose a trustworthy approver!"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "なるほど〜。"}
        {lang === "en" && "Oh, I see."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            {" "}
            <Important>トロン（TRON）</Important>、
            <Important>コスモス（ATOM）</Important>
            などがDPoSをコンセンサスアルゴリズムに採用している。
          </>
        )}
        {lang === "en" && (
          <>
            {" "}
            <Important>TRON (TRON) </Important>,{" "}
            <Important>Cosmos (ATOM) </Important>, and others have adopted DPoS
            as their consensus algorithm.
          </>
        )}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/logo-EN-horizontal.png"}
        style={{}}
        caption={
          lang === "ja"
            ? "https://tron.network/resources より引用"
            : lang === "en"
            ? "Reference Source: https://tron.network/resources"
            : ""
        }
        disableSwitching={true}
      />
      <Image
        src={
          process.env.PUBLIC_URL +
          "/imgs/cosmos-logo-horizontal-outline-light.png"
        }
        style={{}}
        caption={
          lang === "ja"
            ? "https://v1.cosmos.network/design より引用"
            : lang === "en"
            ? "Reference Source: https://v1.cosmos.network/design"
            : ""
        }
        disableSwitching={true}
      />

      <Balloon char="node">
        {lang === "ja" &&
          "ただし、PoIもDPoSも完璧とは言えず、それぞれに弱点がある。"}
        {lang === "en" &&
          "However, neither PoI nor DPoS is perfect, and each has its weaknesses."}
      </Balloon>

      <Balloon char="ether">
        {lang === "ja" && "完璧なアルゴリズムはなさそうですね。"}
        {lang === "en" && "It seems that there is no perfect algorithm."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "さて、今まで紹介してきたコンセンサスアルゴリズムの特徴を、以下の表にまとめておいたから参考にしてくれ。"}
        {lang === "en" &&
          "Now, I have summarized the characteristics of the consensus algorithms I have introduced so far in the table below for your reference."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/consensus-algorithm-table.png"}
        caption={lang === "ja" ? "アルゴリズム一覧" : "List of Algorithms"}
      />

      <Balloon char="nakamoto">
        {lang === "ja" && "ありがとうございます！"}
        {lang === "en" && "Thank you!"}
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
        title="PoWとPoSの仕組みの違いは？ 採用する代表的な暗号資産も紹介"
        author="CoinDesk Japan"
        url="https://www.coindeskjapan.com/keywords/pow-pos/"
        date="12/27"
      />
      <SiteInfo
        title="ネム（XEM）とは"
        author="GMO Coin"
        url="https://coin.z.com/jp/corp/information/xem/"
        date="12/27"
      />
      <SiteInfo
        title="What Is Delegated Proof of Stake?"
        author="crypto.com"
        url="https://crypto.com/university/what-is-dpos-delegated-proof-of-stake"
        date="12/22"
      />
    </Main>
  );
};

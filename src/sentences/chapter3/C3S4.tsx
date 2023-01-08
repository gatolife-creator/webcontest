import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { Image } from "../../components/Image";
import { Sum } from "../../components/Sum";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C3S4 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <Crumb chapter={3} section={4} />
      <MiniSectionTitle>
        {lang === "ja" && "コンセンサスアルゴリズム（1）"}
        {lang === "en" && " Consensus Algorithm (1)"}
      </MiniSectionTitle>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            さっきブロックチェーンでは、<Important>承認</Important>
            作業が行われると言ったな。
          </>
        )}
        {lang === "en" && (
          <>
            I said that in blockchain,{" "}
            <Important>the approval process</Important> takes place.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "はい。"}
        {lang === "en" && "Yes, I remember."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            この承認を実現する仕組みのことを
            <Important>コンセンサス・アルゴリズム</Important>
            と言う。
          </>
        )}
        {lang === "en" && (
          <>
            The mechanism makes this approval possible is called{" "}
            <Important>a consensus algorithm</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "ブロックチェーンによってその仕組みは異なるが、まずはビットコインを例に見てみよう。"}
        {lang === "en" &&
          "The mechanism differs from a type of blockchain. Let's start with Bitcoin as an example."}
      </Balloon>

      <SubSectionTitle>PoW（Proof of Work）</SubSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" && "Proof of Work...。仕事の証明？"}
        {lang === "en" && "Proof of Work...?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            そう。PoW では世界中のコンピュータが
            <Important>競って仕事をする</Important>
            ことで、ブロックを生成している。
          </>
        )}
        {lang === "en" && (
          <>
            Yes, in PoW, computers around the world{" "}
            <Important>generate blocks by competing</Important>
            with each other to do work.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            この仕事のことを<Important>マイニング</Important>
            、仕事をするコンピューターのことを<Important>マイナー</Important>
            と呼ぶことが多い。
          </>
        )}
        {lang === "en" && (
          <>
            This work is often referred to as <Important>mining</Important>, and
            the computers doing the work are called{" "}
            <Important>miners</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "マイニング...？金でも掘り当てるんですか？"}
        {lang === "en" && "Mining...? Are you going to dig for gold?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "あながち間違いでもない。"}
        {lang === "en" && "Not quite."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "ハッシュ値が一定の条件を満たすまで、計算を続けるのだ。"}
        {lang === "en" &&
          "They keep calculating until the hash value meets certain conditions."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "ここにきてなんでハッシュが...？"}
        {lang === "en" && "Why is hash here...?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "ハッシュ関数の特徴を思い出してみよう。"}
        {lang === "en" && "Let's recall the characteristics of hash functions."}
      </Balloon>
      <Sum>
        {lang === "ja" && (
          <>
            <li>
              入力した値の長さに関わらず、
              <Important>常に同じ長さの値を出力する</Important>。
            </li>
            <li>
              同じ値を入力すれば、
              <Important>常に同じ値が出力される</Important>。
            </li>
            <li>
              ハッシュ値から、
              <Important>元の値を復元することはできない</Important>。
            </li>
          </>
        )}
        {lang === "en" && (
          <>
            <li>
              It{" "}
              <Important>always outputs a value of the same length</Important>,
              regardless of the length of the input value.
            </li>
            <li>
              If you input the same value, it
              <Important>always outputs the same value</Important>.
            </li>
            <li>
              <Important>The original value cannot be recovered</Important> from
              the hash value.
            </li>
          </>
        )}
      </Sum>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "あぁ、わかった！ハッシュ値から元の値は復元できないのか！"}
        {lang === "en" &&
          "Ah, I got it! You can't recover the original value from a hash value."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "そう。だから、地道に計算をして条件を満たすハッシュ値を探すしかないのだ。"}
        {lang === "en" &&
          "That' right. So, the only way is to calculate steadily to find a hash value that satisfies the condition."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "PoWの仕組み"}
        {lang === "en" && "How PoW works"}
      </SubSectionTitle>

      <Balloon char="nakamoto">
        {lang === "ja" && "具体的にどんな計算をしているのですか？"}
        {lang === "en" && "What exactly is the calculation?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            <Important>ブロックのデータ＋ナンス値</Important>
            のハッシュ値を求めたときに、先頭に特定の数以上0が並ぶ値を求めるのだ。
          </>
        )}
        {lang === "en" && (
          <>
            When you find a hash value of{" "}
            <Important>the block's data + nonce value</Important>, you find a
            value that has a specific number or more zeros in a row at the
            beginning.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "うん？"}
        {lang === "en" && "Hm?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "イザワ君、PoW の図を頼む。"}
        {lang === "en" && "Mr. Izawa, please draw a diagram of PoW."}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" && "用意しました。"}
        {lang === "en" && "I’ve already prepared it."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "ありがとう。"}
        {lang === "en" && "Thank you."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "まずブロック＋ナンス値のハッシュ値を求める。ここまではいいかな？"}
        {lang === "en" &&
          "First, we need to find the hash value of the block + nonce value. Is that all right so far?"}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/hash-from-block-and-nonce.png"}
        caption={
          lang === "ja"
            ? "ブロックとナンス値のハッシュ化"
            : lang === "en"
            ? "Hashing of block and nonce value"
            : ""
        }
      />
      <Balloon char="nakamoto">
        {lang === "ja" && "はい。"}
        {lang === "en" && "Yes."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "さて、今求めたハッシュ値の先頭は87ac...だな。"}
        {lang === "en" &&
          "Now, the first hash value we just obtained is 87ac..., right?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "もしハッシュ値の頭3桁が0である条件を満たさないといけないとき、ナンス値を変えてもう一度この作業を行う。"}
        {lang === "en" &&
          "If the condition that the first three digits of the hash value are 0 must be satisfied, we change the nonce value and do this process again."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/mining.png"}
        caption={
          lang === "ja"
            ? "マイニングのフローチャート"
            : lang === "en"
            ? "Mining Flowchart"
            : ""
        }
      />
      <Balloon char="nakamoto">
        {lang === "ja" && "ふむふむ。"}
        {lang === "en" && "Hmmm..."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "そして、条件を満たしたコンピューターが晴れてブロックをブロックチェーンに繋げることができる。"}
        {lang === "en" &&
          "Then the computer that meets the condition can connect a block to blockchain."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "なんとなく流れは掴めてきたかも...！"}
        {lang === "en" && "I think I'm starting to understand it…!"}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "PoWの真髄"}
        {lang === "en" && "The essence of PoW"}
      </SubSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" && "うん？そもそもなんで競わせる必要があるんですか。"}
        {lang === "en" &&
          "Hm? Why do you need to make them compete in the first place?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "それこそがPoWの真髄だ。"}
        {lang === "en" && "That is the essence of PoW."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "PoWでは、一番早くブロックをチェーンに繋げられたものに、新しく刷られた仮想通貨がプレゼントされる。"}
        {lang === "en" &&
          "In PoW, the first one to get a block onto the chain will receive a newly printed virtual currency."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "みんな仮想通貨が欲しいから競争するのか！"}
        {lang === "en" && "Everyone wants cryptocurrency, so they compete!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "改ざんをしようと思ったら、この激しい競争で抜きん出なければならないわけだ。"}
        {lang === "en" &&
          "So if you want to tamper, you have to get ahead of this fierce competition."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "確かに、でも一回くらいなら競争に勝つことができるだろうから、改ざんできちゃうんじゃないですか？"}
        {lang === "en" &&
          "Sure, but it would be possible to win the competition at least once, so you could tamper with it?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            その指摘はもっともだ。それを防ぐために、
            <Important>一番ブロックの連なりが長いチェーン</Important>
            を正当とするルールがある。
          </>
        )}
        {lang === "en" && (
          <>
            You make a good point. To prevent this, there is a rule that the
            <Important>
              chain with the longest sequence of blocks is legitimate
            </Important>
            .
          </>
        )}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/fork.png"}
        caption={
          lang === "ja"
            ? "PoWのイメージ図"
            : lang === "en"
            ? "Image of PoW"
            : ""
        }
      />
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "なるほど、それじゃあ改ざんをしたかったら、連続して競争に勝たなければいけませんね。"}
        {lang === "en" &&
          "I see, so if you want to tamper, you have to win the competition in consecutively."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "改ざんを試みて失敗するくらいだったら、承認作業に貢献して報酬をもらった方が合理的だよな。"}
        {lang === "en" &&
          "It would be more reasonable to get paid for contributing to the approval process rather than trying to tamper and failing."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "確かに。"}
        {lang === "en" && "Indeed."}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" && (
          <>
            ITのみならず、<Important>経済的な観点</Important>
            からもよく考えられている、奥深いアルゴリズムな訳ですね。
          </>
        )}
        {lang === "en" && (
          <>
            So it is a profound algorithm that is well thought out not only from
            an IT but also <Important>an economic point of view</Important>.
          </>
        )}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "PoWの問題点"}
        {lang === "en" && "Problems of PoW"}
      </SubSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" && "PoWばんざーい！PoWばんざーい！"}
        {lang === "en" && "Hurray for PoW! Hurray for PoW!"}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "人類の叡智だProof of Work♪"}
        {lang === "en" && "The wisdom of mankind, Proof of Work♪"}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" && "（何をやっているんだ...？）"}
        {lang === "en" && "(What is he doing...?)"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && "おいおい、両手あげて喜ぶにはまだ早いぞ。"}
        {lang === "en" && "Hey, hey, hey, it's too early to rejoice like that."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "へ？"}
        {lang === "en" && "Heh?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "確かにPoWは優れたコンセンサス・アルゴリズムだが、まだまだ課題は残っている。"}
        {lang === "en" &&
          "It is true that PoW is an excellent consensus algorithm, but there are still some issues to be solved."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            まず、非常に<Important>多くの電力を要する</Important>
            と言うデメリットがある。
          </>
        )}
        {lang === "en" && (
          <>
            First, there is the disadvantage that it requires{" "}
            <Important>a very large amount of power</Important>.
          </>
        )}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "そうなんですか？"}
        {lang === "en" && "Really?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            ビットコインを国と考えた場合、国別電力使用量のランキング
            <Important>トップ30</Important>
            にランクインするほどの電力を消費している。
          </>
        )}
        {lang === "en" && (
          <>
            If you think of Bitcoin as a country, it consumes so much power that
            it ranks among <Important>the top 30</Important> countries in terms
            of power usage.
          </>
        )}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/national-energy-use.png"}
        caption={
          lang === "ja"
            ? "引用元：BBC"
            : lang === "en"
            ? "Reference Source: BBC"
            : ""
        }
        disableSwitching={true}
      />
      <Balloon char="node">
        {lang === "ja" && (
          <>
            それに、使われ始めたばかりでマイナーが少ない場合には、
            <Important>改ざんの危険性が高まる</Important>。
          </>
        )}
        {lang === "en" && (
          <>
            Besides, if it is just starting to be used and there are only a few
            miners, <Important>the risk of tampering increases</Important>.
          </>
        )}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "あれ、改ざんは難しかったんじゃ...？"}
        {lang === "en" && "Hey, I thought tampering was difficult...?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            先ほども言ったように、PoWは
            <Important>競争に勝ったものがブロックの承認を行える</Important>。
          </>
        )}
        {lang === "en" && (
          <>
            As I told you before, PoW{" "}
            <Important>
              allows the winner of the competition to approve the block
            </Important>
            .
          </>
        )}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && "裏を返せば、競争に打ち勝てば改ざんが可能なわけだ。"}
        {lang === "en" &&
          "In other words, if you beat the competition, you can tamper with it."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "うぅ...。"}
        {lang === "en" && "Ugh..."}
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
      <BookInfo
        title="決定版　ビットコイン＆ブロックチェーン"
        author="岡田 仁志"
        publisher="東洋経済新聞社"
        year={2018}
      />
      <BookInfo
        title="ブロックチェーン・レボリューション
            ――ビットコインを支える技術はどのようにビジネスと経済、そして世界を変えるのか"
        author="ドン・タプスコット, アレックス・タプスコット"
        publisher="ダイヤモンド社"
        year={2016}
      />
      <SiteInfo
        title="Bitcoin consumes 'more electricity than Argentina'"
        author="BCC"
        url="https://www.bbc.com/news/technology-56012952"
        date="12/22"
      />
    </Main>
  );
};

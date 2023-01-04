import React from "react";
import { Balloon } from "../../components/Balloon";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { Sum } from "../../components/Sum";
import { OptionalHash } from "../../sample/hash/OptionalHash";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const C2S2 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "ハッシュ関数"}
        {lang === "en" && "Hash Function"}
      </MiniSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "ハッシュ関数...。それって、あの美味しい食べ物ですか？"}
        {lang === "en" && "Hash functions.... Is that yummy?"}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" && "いや、それはハッシュドポテト。"}
        {lang === "en" && "No, it's hash browns."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "お、これはなかなかいい線いっているぞ。"}
        {lang === "en" && "But, this is a very good line."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "実はハッシュ関数とハッシュドポテトには共通した意味があるのだ。"}
        {lang === "en" &&
          "Actually, hash functions and hash browns have a common meaning."}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" && "（えぇ...。）"}
        {lang === "en" && "(Oh, yeah..?)"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "ハッシュ（hash）には、「細かく切る」などの意味がある。"}
        {lang === "en" && "Hash means 'to cut into small pieces'."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "したがって、ハッシュドポテトは「細かく切られたポテト」、ハッシュ関数は「細かく切る関数」というわけだな。"}
        {lang === "en" &&
          "Therefore, hashed potatoes are 'potatoes cut into small pieces' and hash functions are 'functions to cut something into small pieces'."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "細かく切る関数...。何のことだかよくわかりませんね。"}
        {lang === "en" &&
          "A function to cut something finely... I'm not sure what you are talking about."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            正確にいえば、入力した値を元に、規則性がなくバラバラに見える値、
            <Important>ハッシュ値（ハッシュ）</Important>を出力するのだ。
          </>
        )}
        {lang === "en" && (
          <>
            Based on a input value, it outputs{" "}
            <Important>a hash value</Important> which is irregular. And it
            appears to be in pieces.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "「見える」ってなんですか？"}
        {lang === "en" && "What do you mean by 'appears'?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "一見するとバラバラに見えるが、ハッシュ関数は以下の特徴を持った値を出力する。"}
        {lang === "en" &&
          "Although it seemingly disjointed, the hash function outputs a value with the following characteristics."}
      </Balloon>

      <Sum>
        <li>
          {lang === "ja" && (
            <>
              入力した値の長さに関わらず、
              <Important>常に同じ長さの値を出力する</Important>。
            </>
          )}
          {lang === "en" && (
            <>
              It{" "}
              <Important>always outputs a value of the same length</Important>,
              regardless of the length of the input value.
            </>
          )}
        </li>
        <li>
          {lang === "ja" && (
            <>
              同じ値を入力すれば、
              <Important>常に同じ値が出力される</Important>。
            </>
          )}
          {lang === "en" && (
            <>
              If the same value is input,{" "}
              <Important>the same value is always output</Important>.
            </>
          )}
        </li>
        <li>
          {lang === "ja" && (
            <>
              ハッシュ値から、
              <Important>元の値を復元することはできない</Important>。
            </>
          )}
          {lang === "en" && (
            <>
              <Important>The original value cannot be recovered</Important> from
              the hash value.
            </>
          )}
        </li>
      </Sum>

      <Image
        src={process.env.PUBLIC_URL + "/imgs/hash-function.png"}
        caption={
          lang === "ja" ? "ハッシュ関数" : lang === "en" ? "Hash Function" : ""
        }
      />

      <Balloon char="ether">
        {lang === "ja" &&
          "ハッシュ関数のサンプルも作っておきました。これで1と2の特徴を確かめることができます。"}
        {lang === "en" &&
          "We have also created a sample hash function. You can now verify the characteristics of number 1 and 2."}
      </Balloon>

      <OptionalHash />

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "それにしても、ハッシュ関数って一体なんの役に立つんですか？"}
        {lang === "en" &&
          "But still, what the heck is a hash function good for?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            うむ。いい質問だ。実は、<Important>改ざん検知</Important>や
            <Important>認証システム</Important>に活用されているのだよ。今回は、
            改ざん検知に焦点を当てるぞ。
          </>
        )}
        {lang === "en" && (
          <>
            Hmmm. Good question. Actually, they are used in{" "}
            <Important>tamper detection</Important> and{" "}
            <Important>authentication systems</Important>. In this article, we
            will focus on tamper detection.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "まずは下の図を見てみよう。これはデータ送信の流れを簡略化した図だ。何の変哲もない図だが、ここには一つ問題がある。"}
        {lang === "en" &&
          "First, let's look at the figure below. This is a simplified diagram of the data transmission flow. It may not look like much, but there is a problem."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/data-sending.png"}
        caption={
          lang === "ja"
            ? "データ送信"
            : lang === "en"
            ? "Data transmission"
            : ""
        }
      />
      <Balloon char="node">
        {lang === "ja" &&
          "何も対策をしていなければ、データが改ざんされても、それを知る術はないのだ。"}
        {lang === "en" &&
          "If no measures are taken, there is no way to know if data has been tampered with."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/data-sending-with-tamper.png"}
        caption="Data transmission"
      />
      <Balloon char="nakamoto">
        {lang === "ja" && "もしも機密情報だったりしたら、大変ですね。"}
        {lang === "en" &&
          "If it were sensitive information, we would be in trouble."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && "そこで、ハッシュ関数が役立つのだよ。"}
        {lang === "en" && "That's hash functions come in handy."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "まず、送信したいデータのハッシュ値をあらかじめ受信者に送信しておく。それからデータを送るのだ。"}
        {lang === "en" &&
          "First, send the hash value of the data to recipient in advance. Then you send the data."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "その後、受信者側でそのデータのハッシュ値を求めたら、送信者から受け取っていたハッシュ値と照合する。"}
        {lang === "en" &&
          "Then, when the hash value of the data is obtained at the receiver's side, it is checked against the hash value received from the sender."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "そうすることでデータが改ざんされているか否か、判断することができる。"}
        {lang === "en" &&
          "In this way, it is possible to determine whether the data has been tampered with or not."}
      </Balloon>
      <Image
        src={
          process.env.PUBLIC_URL +
          "/imgs/data-sending-with-tamper-detection1.png"
        }
        caption={
          lang === "ja"
            ? "データ送信"
            : lang === "en"
            ? "Data transmission"
            : ""
        }
      />

      <Balloon char="node">
        {lang === "ja" &&
          "では、このような対策をしている状態で、データの送信の際に改ざんされたらどうなるだろうか？"}
        {lang === "en" &&
          "In this case, what will happen if the data is tampered with during transmission?"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "データが改ざんされるとハッシュ値が変わるから、あらかじめ受け取ったハッシュ値と一致しない！"}
        {lang === "en" &&
          "Well, if the data is tampered with, the hash value will change, so it won't match the hash value we received beforehand!"}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "だから改ざんされていることがわかるのか！"}
        {lang === "en" && "So you know it has been tampered with!"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && "その通り！"}
        {lang === "en" && "Exactly!"}
      </Balloon>
      <Image
        src={
          process.env.PUBLIC_URL +
          "/imgs/data-sending-with-tamper-detection2.png"
        }
        caption={
          lang === "ja"
            ? "データ送信"
            : lang === "en"
            ? "Data transmission"
            : ""
        }
      />

      <Balloon char="node">
        {lang === "ja" && "まとめると、"}
        {lang === "en" && "In summary,"}
      </Balloon>
      <Sum>
        {lang === "ja" && (
          <>
            <li>同じ値を入力すると、同じ値が出力される</li>
            <li>入力値が少し違うだけで、結果が大きく異なる。</li>
          </>
        )}
        {lang === "en" && (
          <>
            <li>Input the same value, output the same value.</li>
            <li>
              Slightly different input values produce vastly different results.
            </li>
          </>
        )}
      </Sum>
      <Balloon char="node">
        {lang === "ja" && "この二つの特徴を利用して改ざんを検知しているのだ。"}
        {lang === "en" &&
          "These two characteristics are used to detect tampering."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            なお、ハッシュ関数に値を入力して、ハッシュ値を得る操作のことを
            <Important>ハッシュ化</Important>という。
          </>
        )}
        {lang === "en" && (
          <>
            The operation of inputting a value into a hash function to obtain a
            hash value is called <Important>hashing</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "今後の説明で用いるだろうから、覚えておくといい。"}
        {lang === "en" &&
          "You should keep this in mind as it will be used in future explanations."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "はい、頑張ります！"}
        {lang === "en" && "I'll do my best."}
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
      <SiteInfo
        title="英語「hash」の意味・使い方・読み方 | Weblio英和辞書"
        author="weblio"
        url="https://ejje.weblio.jp/content/hash"
        date="12/26"
      />
    </Main>
  );
};

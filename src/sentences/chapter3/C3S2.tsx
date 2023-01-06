import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const C3S2 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "処理の流れ"}
        {lang === "en" && "Process Flow"}
      </MiniSectionTitle>
      <Balloon char="node">
        {lang === "ja" &&
          "ブロックチェーンの基本構造を理解したところで、各コンピューターが持っているブロックチェーンの情報をどのようにして共有しているかを見ていこう。"}
        {lang === "en" &&
          "Now that we understand the basic structure of blockchain, let's look at how each computer shares blockchain information it has."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "いよいよブロックチェーンの仕組みですね！"}
        {lang === "en" && "Finally, we get to see how blockchain works!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "今回はビットコインのブロックチェーンを参考に見ていくぞ。"}
        {lang === "en" &&
          "We're going to look at blockchain of Bitcoin as a reference."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "トランザクション作成"}
        {lang === "en" && "Transaction Creation"}
      </SubSectionTitle>
      <Balloon char="node">
        {lang === "ja" &&
          "まず、誰かに通貨を送る際にトランザクションを作成する。"}
        {lang === "en" &&
          "First, when you send currency to someone, you create a transaction."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "ふむふむ。"}
        {lang === "en" && "Hmmm"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "この時、トランザクションの送信者アドレスには、自身の作成した公開鍵を、受信者アドレスには、送る相手の公開鍵を指定する。"}
        {lang === "en" &&
          "At this time, you have to appoint the public key for the sender address of the transaction you created."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "そして、最後に自分の秘密鍵でトランザクションに署名して、トランザクションの作成は終了だ。"}
        {lang === "en" &&
          "Finally, you sign the transaction with your private key, and the transaction creation is complete."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/create-transaction.png"}
        caption={
          lang === "ja"
            ? "トランザクション作成"
            : lang === "en"
            ? "Create Transaction"
            : ""
        }
      />
      <Balloon char="nakamoto">
        {lang === "ja" && "ここでデジタル署名が使われているんですか？"}
        {lang === "en" && "Is a digital signature used here?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "そうだ。勝手に他の人に自分の仮想通貨を使われたら困るだろう？"}
        {lang === "en" &&
          "Yes, it is. You don't want other people to use your crypto currency without your permission, do you?"}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "なるほど、デジタル署名は否認を防止するもの、裏を返せば自分が作成したトランザクションであることが証明できるのですね。"}
        {lang === "en" &&
          "I see, the digital signature is a non-repudiation, and in other word, it can prove that the transaction was created by you."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "トランザクション送信"}
        {lang === "en" && "Transmitting the Transaction"}
      </SubSectionTitle>
      <Balloon char="node">
        {lang === "ja" &&
          "トランザクションもできたし、これで他のコンピューターに送信と行きたいところだが、ここで一手間。"}
        {lang === "en" &&
          "Now, you have a transaction, you want to send it to another computer."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "作成したトランザクションが有効であるか検証する。"}
        {lang === "en" &&
          "We need to verify that the transaction we have created is valid."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "なんで送信する前に確認が必要なんですか？"}
        {lang === "en" && "Why do we need to verify before sending?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "それは誤って、もしくは悪意があって無効なトランザクションを大量に送りつけることで、ネットワークに負荷がかかるのを防ぐためだ。"}
        {lang === "en" &&
          "It is to avoid overloading the network by accidentally or maliciously sending out a large number of invalid transactions."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "そして、そのトランザクションを受け取った他のコンピューターは再びトランザクションが有効か確認する。"}
        {lang === "en" &&
          "Then, other computers that receive the transaction will check it if the transaction is valid."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "二重チェックですね！"}
        {lang === "en" && "That's double checking!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            それが終わったら、<Important>トランザクションプール</Important>
            というところに一時保管する。
          </>
        )}
        {lang === "en" && (
          <>
            When it finished, it is temporarily stored in a place called the{" "}
            <Important>transaction pool.</Important>
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "トランザクションプール？"}
        {lang === "en" && "Transaction pool?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "トランザクションプールとは、有効であることが確認されており、ブロック格納待ちのトランザクションが一時保存される場所だ。"}
        {lang === "en" &&
          "A transaction pool is a place where transactions that have been verified as valid.And are waiting for block storage are temporarily stored."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "ブロック生成"}
        {lang === "en" && "Block Generation"}
      </SubSectionTitle>
      <Balloon char="node">
        {lang === "ja" && "ついにブロック生成についてだ。"}
        {lang === "en" && "Finally, we come to block generation."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "ブロックの生成方法は、コンセンサス・アルゴリズムによって変わる。"}
        {lang === "en" &&
          "The method of block generation depends on the consensus algorithm."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "さあ、ブロックを生成できたら、あとは他のノードへブロックを送信するだけだ。"}
        {lang === "en" &&
          "Now the block has been generated, all that is left is to send the block to the other nodes."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "ブロックを受け取ったら、あとはブロックチェーンに追加する。"}
        {lang === "en" &&
          "Once the block is received, it has added to blockchain."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "以上がブロックチェーンの処理の大まかな流れだ。"}
        {lang === "en" && "This is the general flow of blockchain process."}
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
        title="ブロックチェーンビジネスモデル"
        author="芝野恭平"
        url="https://www.jss-net.com/wp-content/uploads/8db8166db1b6b4935df1f3a285b0ff29.pdf"
        date="12/27"
      />
    </Main>
  );
};

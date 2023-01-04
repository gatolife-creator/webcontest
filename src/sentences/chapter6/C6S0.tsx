import React from "react";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Quiz, QuizGame } from "../../components/QuizGame";
import { Balloon } from "../../components/Balloon";
import { Link } from "react-router-dom";
import { quizzes as q1 } from "../chapter1/C1S5";
import { quizzes as q2 } from "../chapter2/C2S5";
import { quizzes as q3 } from "../chapter3/C3S6";
import { quizzes as q4 } from "../chapter4/C4S5";
import { quizzes as q5 } from "../chapter5/C5S5";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

const quizzes: Quiz[] = [...q1, ...q2, ...q3, ...q4, ...q5];

export const C6S0 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "総まとめ"}
        {lang === "en" && "Conclusion"}
      </MiniSectionTitle>
      <Balloon char="node">
        {lang === "ja" && "ナカモト君、これで君に伝えるブロックチェーンの基礎知識は全てだ。"}
        {lang === "en" && "Mr. Nakamoto, this is all the basic knowledge of blockchain I have to share with you."}

      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "長い道のりでしたね。"}
        {lang === "en" && "It has been a long road."}
      </Balloon>
      <Balloon char="node">

        {lang === "jp" && "イザワ君も今まで手伝ってくれてありがとうな。"}
        {lang === "en" && "Thanks for helping me out so far, Mr.Izawa."}
      </Balloon>
      <Balloon char="ether">

        {lang === "jp" && "いえいえ、僕はナカモト君の成長が見れたので、結構楽しかったですよ。"}
        {lang === "en" && "No, it's been a lot of fun watching his grow."}

      </Balloon>
      <Balloon char="node">
        {lang === "jp" && "さぁ、今までの勉強の総まとめの時間だ。"}
        {lang === "en" && "Now, it's time for a summary of what we've learned so far."}
      </Balloon>



      <Balloon char="node">
        {lang === "jp" && "まずは、"}
        {lang === "en" && "First,"}
        <Link
          to="/content.html?chapter=1&section=0"
          className="link-secondary link"
        >
          {lang === "jp" && "「ブロックチェーンとは」 。"}
          {lang === "en" && "'What is Blockchain?'"}
        </Link>
       
      </Balloon>
      <Balloon char="nakamoto">
        
        {lang === "jp" && "ブロックチェーンはどのようなものか、どのような歴史をたどってきたのかを勉強しましたね。"}
        {lang === "en" && "You studied what blockchain is and what kind of history it has had."}
      </Balloon>
      <Balloon char="node">
        
        {lang === "jp" && "そして、"}
       {lang === "en" && "Then,"}
        <Link
          to="/content.html?chapter=2&section=0"
          className="link-secondary link"
        >
          
          {lang === "jp" && "「基礎技術」。"}
       {lang === "en" && "'Basic Technology.'"}
        </Link>
      
      </Balloon>
      <Balloon char="nakamoto">
        
       {lang === "jp" && "ブロックチェーンを支える技術、P2P、ハッシュ関数、公開鍵暗号方式、デジタル署名について勉強しましたね。"}
       {lang === "en" && "You studied the technologies that support blockchain, P2P, hash functions, public key cryptography, and digital signatures."}

      </Balloon>
      <Balloon char="node">
        
        {lang === "jp" && "それから、"}
       {lang === "en" && "Then, "}
        <Link
          to="/content.html?chapter=3&section=0"
          className="link-secondary link"
        >
          
          {lang === "jp" && "「仕組み」"}
       {lang === "en" && "'Mechanism' "}
        </Link>
        。
      </Balloon>
      <Balloon char="nakamoto">
        
        {lang === "jp" && "基礎技術がどのようにブロックチェーンで活用されてるのかを見てきましたね。あれは学びごたえがありました。"}
       {lang === "en" && "We have studied how the basic technology is used in blockchain. That was a great learning experience. "}

      </Balloon>
      <Balloon char="node">
               
      {lang === "en" && "I also explained the"}
 <Link
          to="/content.html?chapter=4&section=0"
          className="link-secondary link"
        >
        
          {lang === "jp" && "「活用例」"}
       {lang === "en" && "'usage'."}

       
        </Link>
        {lang === "jp" && " についても解説したな。"}
       
      </Balloon>
      <Balloon char="nakamoto">
       
        {lang === "jp" && " 仮想通貨やスマート・コントラクト、NFTやメタバースについて見てきましたね。"}
       {lang === "en" && "You've looked at cryptocurrencies, smart contracts, NFTs, and metaverse."}

      </Balloon>
      <Balloon char="node">
       
       {lang === "jp" && " 最後に、"}
       {lang === "en" && "Finally,"}

        <Link
          to="/content.html?chapter=5&section=0"
          className="link-secondary link"
        >
          
       {lang === "jp" && "「企業の取り組み」"}
       {lang === "en" && "'corporate initiatives'"}
</Link>
{lang === "jp" && "について見てきた"}
{lang === "en" && " you've looked at."}
       
      </Balloon>
      <Balloon char="nakamoto">
        
        {lang === "jp" && "ブロックチェーンをゲームに活用しているdouble　jump.tokyoさん、電力取引やサプライチェーンに活用しているchaintopeさん。"}

       {lang === "en" && "Double jump.tokyo is using blockchain for gaming, and chaintope is using it for power trading and supply chain."}

      </Balloon>
      <Balloon char="nakamoto">
        
 {lang === "jp" && "僕の知らないところで、革新的で面白い取り組みが行われていたんですね。"}
{lang === "en" && "There were innovative and interesting activities going on in places I didn't know about."}

      </Balloon>

      <Balloon char="node">
{lang === "jp" && "これで、何を勉強したか思い出せたかな？"}
{lang === "en" && "I hope this help you remember what you studied."}

      </Balloon>
      <Balloon char="node">
        
{lang === "jp" && "もし、忘れているものがあれば、リンクからもう一度戻って復習するといい。"}
{lang === "en" && "If you forget something, you can go back and review it again from the link."}


      </Balloon>
      <Balloon char="node">
        
 {lang === "jp" && "さてと、総合問題を解く準備はできているかな？"}
{lang === "en" && "Now, are you ready to take the comprehensive test?"}


      </Balloon>
      <Balloon char="nakamoto">
   {lang === "jp" && "はい！"}
{lang === "en" && "Yes!"}

      </Balloon>
      <Balloon char="node">
{lang === "jp" && "さぁ、今までの勉強の成果を見せてくれ。"}
{lang === "en" && "Now, show me what you've studied so far"} 

      </Balloon>
      <Balloon char="nakamoto">
       
   {lang === "jp" && " ノード先生の名にかけて、精一杯頑張ります！"}
{lang === "en" && "In the name of Prof. Nord, I will do my very best!"} 


      </Balloon>
      <QuizGame quizzes={quizzes} chapter={6} />
      <Pager direction="back" />
      <Pager direction="forward" text="最後に" link="/conclude.html" />
    </Main>
  );
};

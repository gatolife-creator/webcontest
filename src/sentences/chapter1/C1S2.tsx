import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { OptionalHash } from "../../sample/hash/OptionalHash";
import { Sum } from "../../components/Sum";

import { Quiz } from "../../components/QuizGame";
import { QuizGame } from "../../components/QuizGame";

export const C1S2 = () => {
  const quizzes: Quiz[] = [
    {
      question: "改ざん検知や認証システムに活用されるものは？",
      options: ["バッシュ関数", "ラッシュ関数", "ハッシュ関数", "ダッシュ関数"],
      answer: "ハッシュ関数",
    },
    {
      question: "P2Pの利点は？",
      options: ["システムダウンしにくい", "ハッキングされづらい"],
      answer: "システムダウンしにくい",
    },
  ];

  return (
    <Main>
      <SectionTitle>第二節　ブロックチェーンの基礎となる技術</SectionTitle>
      <Balloon direction="left">
        それではブロックチェーンの基礎となる技術の仕組みと、その活用例を見ていこう。
      </Balloon>
      <MiniSectionTitle>Peer to Peer（P2P）</MiniSectionTitle>

      <Balloon direction="right">ぺ、ぺあとーぺあ？</Balloon>

      <Balloon direction="left">
        <strong>ピア・ツー・ピア</strong>
        だ。これはブロックチェーンにおいて、最も重要であると言っても過言ではない。
      </Balloon>

      <Balloon direction="left">
        一般的に用いられる、<strong>クライアント・サーバー・システム</strong>
        にはないメリットがある。
      </Balloon>

      <Balloon direction="right">
        ピア・ツー・ピアにクライアント・サーバー・システム？聞きなれない言葉ばっかり...。
      </Balloon>

      <Balloon direction="left">
        では、我々の生活に馴染み深いクライアント・サーバー・システムから解説しよう。
      </Balloon>

      <p>
        クライアント・サーバー・システムは、コンピューターを
        <strong>クライアント</strong>と<strong>サーバー</strong>
        に役割分担して、情報をやり取りする仕組みです。
        <br />
        クライアントは、サーバーに<Important>データを要求し</Important>
        、それを受け取るコンピューター、
        <br />
        サーバーは、クライアントからの要求に応じて、
        <Important>データを提供する</Important>コンピューターです。
      </p>

      <Balloon direction="left">
        つまり、サーバーはたくさんのコンピューターにデータを提供する、偉〜いコンピューターなのだ。
      </Balloon>

      <Balloon direction="left">
        イザワ君、ピア・ツー・ピアとクライアント・サーバー・システムの図を用意してくれ。
      </Balloon>
      <Balloon direction="left">かしこまりました。</Balloon>

      <Image
        src={`${process.env.PUBLIC_URL}/imgs/クライアント・サーバー・システム.jpeg`}
      />

      <Balloon direction="left">
        これがクライアント・サーバー・システムを表した図だ。真ん中のものがサーバー、その他のものがクライアントだ。クライアントはサーバーにデータの要求を行い、サーバーはその要求に応じて、データをクライアントに提供する。
      </Balloon>

      <Balloon direction="right">
        クライアント側にスマートフォンやパソコンがありますね！
      </Balloon>

      <Balloon direction="left">
        そうだ。例えば我々はYouTubeを見る時、スマホを使うだろう？つまり、我々のスマホが
        <strong>クライアント</strong>
        としてYouTubeの<strong>サーバー</strong>
        に動画のデータを要求しているというわけだ。
      </Balloon>

      <Balloon direction="right">なるほど〜。</Balloon>

      <Balloon direction="left">
        それでは、次にピア・ツー・ピアを見ていこう。
      </Balloon>

      <Balloon direction="left">
        ピア・ツー・ピアは直訳すると「<strong>対等なもの</strong>から
        <strong>対等なもの</strong>へ」だな。
      </Balloon>

      <Balloon direction="left">
        ピア・ツー・ピアはよく下ような図で表される。
      </Balloon>

      <Image src={`${process.env.PUBLIC_URL}/imgs/ピア・ツー・ピア.jpg`} />

      <Balloon direction="right">
        あれ？サーバーが見当たらないですね...。
      </Balloon>

      <Balloon direction="left">
        いいところに気がついたな。そう、ピア・ツー・ピアにはクライアント、サーバーという役割分担が存在しないのだ。
      </Balloon>

      <Balloon direction="right">
        じゃあどうやってデータをやりとりしているんですか？
      </Balloon>

      <Balloon direction="left">
        それは実にシンプルだ。各コンピューターが対等な立場で、他のコンピューターにデータを要求すると同時に、データを提供しているのだ。
      </Balloon>

      <Balloon direction="left">
        それぞれのコンピューターがクライアントとサーバー、両方の役割を担っているとも言えますね。
      </Balloon>

      <Balloon direction="left">
        その通りだ。さすがイザワ君。全てのコンピューターが同じ役割を持っているから、
        <strong>「対等なもの」</strong>というわけだな。
      </Balloon>

      <Balloon direction="right">
        そう言えば、ピア・ツー・ピアのメリットって何ですか。
      </Balloon>

      <Balloon direction="left">
        それは、<strong>コンピューターへの負荷が分散する</strong>という点だ。
      </Balloon>

      <Balloon direction="left">下の図を見てみよう。</Balloon>

      <Image
        src={`${process.env.PUBLIC_URL}/imgs/クライアント・サーバー・システム（障害）.jpeg`}
      />

      <Balloon direction="right">うわぁ、サーバー燃えとる...。</Balloon>

      <Balloon direction="left">
        これはサーバーに障害が出ていることを表している。この図から分かる通り、サーバーが正常に動作していないと、全てのクライアントはデータを入手することができない。従って、サーバーの障害はシステム全体に影響を及ぼすことになる。。
      </Balloon>

      <Balloon direction="left">
        クライアント・サーバー・システムは
        <strong>サーバーに依存したシステム</strong>、ということですね。
      </Balloon>

      <Balloon direction="right">
        じゃあ、ピア・ツー・ピアの方はどうなんですか？
      </Balloon>

      <Balloon direction="left">これを見てみろ。</Balloon>

      <Image
        src={`${process.env.PUBLIC_URL}/imgs/ピア・ツー・ピア（障害）.jpg`}
      ></Image>

      <Balloon direction="right">
        一部のコンピューターに障害が発生しているようですね。
      </Balloon>

      <Balloon direction="right">
        あっ、でも他のコンピューターは通信できてる！
      </Balloon>

      <Balloon direction="left">
        その通り。ピア・ツー・ピアなら一部のコンピューターに障害が発生しても、他のコンピューターが動き続けているかぎり、システムは正常に機能するのだ。
      </Balloon>

      <MiniSectionTitle>ハッシュ関数</MiniSectionTitle>
      <p>
        ハッシュ関数は別名 <Important>要約関数</Important>
        とも呼ばれ、入力した値をもとにランダムに見える値を出力します。
        <br />
        また、ハッシュ関数には以下のような特徴があります。
      </p>
      <Sum>
        <li>
          入力した値の長さに関わらず、
          <Important>常に同じ長さの値を出力する</Important>。
        </li>
        <li>
          同じ値を入力すれば、
          <Important>常に同じ値が出力される</Important>。
        </li>
        <li>
          ハッシュ値から、<Important>元の値を復元することはできない</Important>
          。
        </li>
        なお、ハッシュ関数に値を入力することを<strong>ハッシュ化</strong>
        、ハッシュ関数によって出力された値のことを<strong>ハッシュ値</strong>
        と言います。
      </Sum>

      <Image src={process.env.PUBLIC_URL + "/imgs/ハッシュ関数.jpg"}></Image>

      <Balloon direction="left">
        ハッシュ関数のサンプルも作っておきました。これで1と2の特徴を確かめることができます。
      </Balloon>

      <OptionalHash />

      <Balloon direction="right">
        それにしても、ハッシュ関数って一体なんの役に立つんですか？
      </Balloon>

      <Balloon direction="left">
        うむ。いい質問だ。実は、<strong>改ざん検知</strong>や
        <strong>認証システム</strong>に活用されているのだよ。今回は、
        <strong>改ざん検知</strong>に焦点を当てるぞ。
      </Balloon>
      <Balloon direction="left">
        まずは下の図を見てみよう。これはデータ送信の流れを簡略化した図だ。何の変哲もない図だが、ここには一つ問題がある。
      </Balloon>
      <Image src={process.env.PUBLIC_URL + "/imgs/データ送信.jpg"}></Image>

      <MiniSectionTitle>公開鍵暗号方式</MiniSectionTitle>

      <p>
        <Important>公開鍵暗号方式</Important>は、
        <Important>暗号技術</Important>の一種です。
        <br />
        ※
        暗号技術・・・PDF等のデータを他人に盗み見られることなく、他の人と安全にデータをやり取りする技術。
        <br />
        <br />
        用語がやや難しく聞こえるので、ここで少し勉強していきましょう。
        <br />
        まずは、<Important>公開鍵</Important>。 公開鍵とは、
        <Important>データを暗号化するときに使われる</Important>鍵です。
        その名の通り、誰でも使えるように外部に
        <Important>公開</Important>されています。
        <Important>秘密鍵</Important>から作られています。
        <br />
        <br />
        次に<Important>秘密鍵</Important>。<br />
        これは、公開鍵で暗号化したデータを
        <Important>復号するための鍵</Important>です。
        そして、この鍵を所持するのは鍵を作成した人のみ。
        <Important>他の人に公開することはありません</Important>。
      </p>
      <Balloon direction="right">
        公開鍵暗号方式…。なんだか難しいそうな響きですね。
      </Balloon>
      <Balloon direction="left">
        安心しろ。決して仕組みは難しくない。<strong>秘密鍵</strong>
        で暗号化し、<strong>公開鍵</strong>で復号する仕組みだ。
      </Balloon>
      <Balloon direction="left">
        ナカモト君、下の図を見てみろ。これは、公開鍵暗号方式の仕組みを簡単にあらわしたものだ。
      </Balloon>
      <Balloon direction="right">
        まずは受信者が<strong>秘密鍵</strong>と<strong>公開鍵</strong>
        を作るんですね。
      </Balloon>

      <Image src={`${process.env.PUBLIC_URL}/imgs/スライド3.jpeg`} />

      <MiniSectionTitle>署名</MiniSectionTitle>
      <Balloon direction="right">デジタル署名って何ができるんですか？</Balloon>
      <Balloon direction="left">
        改ざんの検出、そして<strong>否認の防止</strong>だ。
      </Balloon>

      <Balloon direction="left">
        公開鍵で複合できるようにすることで、誰もが複合できるようにしている。
      </Balloon>
      <Balloon direction="right">
        それじゃあ暗号化の意味ないじゃないですか！
      </Balloon>
      <Balloon direction="left">
        そこが重要なのだよ。誰もが複合できるようにすることで、誰もが署名（データ送信者の照合）を確認することができるのだ。
      </Balloon>

      <MiniSectionTitle>まとめ</MiniSectionTitle>
      <Balloon direction="right">
        これらの技術がブロックチェーンの土台だ。かなり難しかっただろう。よく頑張った。次のページではブロックチェーンの長所や使い道について説明するぞ。
      </Balloon>

      <QuizGame quizzes={quizzes}></QuizGame>

      <Pager
        direction="back"
        text="第二節"
        link="/content.html?chapter=1&section=2"
      />
      <Pager
        direction="forward"
        text="第二章"
        link="/content.html?chapter=2&section=0"
      />
    </Main>
  );
};

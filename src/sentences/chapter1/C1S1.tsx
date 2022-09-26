import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Separator } from "../../components/Separator";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Quotation } from "../../components/Quotation";
import { Important } from "../../components/Important";
import { OptionalHash } from "../../sample/hash/OptionalHash";
import { Image } from "../../components/Image";

export const C1S1 = () => {
  return (
    <>
      <Main>
        <SectionTitle>一節　ブロックチェーンの概要</SectionTitle>

        <Separator />

        <MiniSectionTitle>ブロックチェーンとは</MiniSectionTitle>

        <Balloon direction="right">
          ノード先生、ブロックチェーンってなんですか？
        </Balloon>

        <Balloon direction="left">
          それは難しい質問だな。一口にブロックチェーンと言っても、さまざまな種類があり、さまざまな仕組みを採用している。
        </Balloon>

        <Balloon direction="left">
          少々難しいが、日本ブロックチェーン協会の定義を見てみよう。
        </Balloon>

        <Quotation url="https://jba-web.jp/news/642">
          「電子署名とハッシュポインタを使用し改竄検出が容易なデータ構造を持ち、且つ、当該データをネットワーク上に分散する多数のノードに保持させることで、高可用性及びデータ同一性等を実現する技術を広義のブロックチェーンと呼ぶ。」
        </Quotation>

        <Balloon direction="right">
          う〜ん、なんのことだかよくわからないですね...
        </Balloon>

        <Balloon direction="left">
          最初はそんなものだ。これからの説明を通じて、少しずつ理解していこう。この定義は最後にまた確認するから、安心して勉強してくれ。
        </Balloon>

        <Balloon direction="right">はい、頑張ります！</Balloon>

        <Balloon direction="left">
          よし、それではまず、ブロックチェーンに活用されている、主な仕組みを見ていこう。
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
          ピア・ツー・ピアにクライアント・サーバー・システム？聞きなれない言葉ばっかり...
        </Balloon>

        <Balloon direction="left">
          では、我々の生活に馴染み深いクライアント・サーバー・システムから解説しよう。
        </Balloon>

        <p>
          クライアント・サーバー・システムは、コンピューターを
          <strong>クライアント</strong>と<strong>サーバー</strong>
          に役割分担して、情報をやり取りする仕組みです。
          <br />
          クライアントは、サーバーに<Important>情報を要求し</Important>
          、それを受け取るコンピューター、
          <br />
          サーバーは、クライアントからの要求に応じて、
          <Important>情報を提供する</Important>コンピューターです。
        </p>

        <Balloon direction="left">
          サーバーは、多くのコンピューターに情報を提供する、えら〜いコンピューターなのだ。
        </Balloon>

        <Balloon direction="left">
          イザワ君、ピア・ツー・ピアとクライアント・サーバー・システムの図を用意してくれ。
        </Balloon>
        <Balloon direction="left">かしこまりました。</Balloon>

        <Image src={`${process.env.PUBLIC_URL}/imgs/スライド4.jpeg`} />

        <Balloon direction="left">
          これがクライアント・サーバー・システムを表した図だ。真ん中のものがサーバー、その他のものがクライアントだ。
        </Balloon>

        <Balloon direction="right">
          クライアント側にスマートフォンやパソコンがありますね！
        </Balloon>

        <Balloon direction="left">
          そうだ。我々はYouTubeを見るとき、ブラウザなどでyoutube.comと入力してアクセスするだろう？これは、我々のスマートフォンやパソコンがクライアントとして、YouTubeのサーバーにウェブサイトの情報などを要求しているのだ。
        </Balloon>

        <Balloon direction="right">なるほど〜。</Balloon>

        <Balloon direction="left">
          それでは、次にピア・ツー・ピアを見ていこう。
        </Balloon>

        <Balloon direction="left">
          ピア・ツー・ピアはよく下ような図で表される。
        </Balloon>

        <Image src={`${process.env.PUBLIC_URL}/imgs/スライド6.jpeg`} />

        <Balloon direction="right">
          あれ？サーバーが見当たらないですね...。
        </Balloon>

        <Balloon direction="left">
          いいところに気がついたな。そう、ピア・ツー・ピアにはクライアント、サーバーという役割分担が存在しないのだ。
        </Balloon>

        <Balloon direction="right">
          じゃあどうやって情報をやり取りしているんですか？
        </Balloon>

        <Balloon direction="left">
          それは実に簡単だ。各コンピューターが対等な立場で、他のコンピューターに情報を要求すると同時に、情報を提供しているのだ。
        </Balloon>

        <Balloon direction="left">
          つまり、それぞれのコンピューターがクライアントとサーバー、両方の役割を担っているとも言えますね。
        </Balloon>

        <Balloon direction="left">その通りだ！さすがイザワ君。</Balloon>

        <Balloon direction="left">
          そう言えば、ピア・ツー・ピアにはクライアント・サーバー・システムにはないメリットがあると言ったな。
        </Balloon>

        <Balloon direction="right">
          少数のコンピューターに負荷がかからない、とかですか？
        </Balloon>

        <Balloon direction="left">
          なんだ、初めての講義にしては冴えているじゃないか！
        </Balloon>

        <Balloon direction="right">
          オンラインゲームとかやってると、たまにアクセス過多で一定時間プレイできなくなることがあるんですよね...。
        </Balloon>

        <Balloon direction="left">うむ。では下の図を見てみよう。</Balloon>

        <Image src={`${process.env.PUBLIC_URL}/imgs/スライド5.jpeg`} />

        <Balloon direction="right">うわぁ、サーバー燃えとる...。</Balloon>

        <MiniSectionTitle>ハッシュ関数</MiniSectionTitle>
        <p>
          ハッシュ関数は別名 <Important>要約関数</Important>
          とも呼ばれ、入力した値をもとにランダムに見える値を出力する。
          <br />
          また、ハッシュ関数には以下のような特徴がある。
        </p>
        <ol className="list-decimal list-inside p-5 my-10 bg-slate-300">
          <li>
            入力した値の長さに関わらず、
            <Important>常に同じ長さの値を出力する</Important>。
          </li>
          <li>
            同じ値を入力すれば、
            <Important>常に同じ値が出力される</Important>。
          </li>
          <li>
            ハッシュ値から、<Important>元の値を復元できない</Important>。
          </li>
        </ol>

        <Balloon direction="left">（イザワ君の図解）</Balloon>
        <Balloon direction="left">
          ハッシュ関数で遊べるようにしておいたぞ。1と2の特徴を確かめてみるのだ。
        </Balloon>

        <OptionalHash />

        <Balloon direction="right">
          それにしても、ハッシュ関数って一体なんの役に立つんですか？
        </Balloon>

        <Balloon direction="left">
          うむ。いい質問だ。実は、<strong>改ざん検知</strong>や
          <strong>認証システム</strong>に活用されているのだよ。
        </Balloon>

        <Balloon direction="right">
          <li>同じ値を入力すると、同じ値が出力される。</li>
          <li>入力値が少し違うだけで、結果が大きく異なる。</li>
          この二つの特徴を利用しているのですね。
        </Balloon>
        <p>(改ざん検知の仕組みの説明)</p>
        <Balloon direction="left">いかにも。</Balloon>

        <p>(認証システムでの活用の説明)</p>
        <Balloon direction="right">
          出力値からは入力値を推測できないという性質が役立っていますね！
        </Balloon>

        <MiniSectionTitle>公開鍵暗号方式</MiniSectionTitle>
        <p>
          公開鍵で暗号化、秘密鍵で復号する暗号方式です。
          <br />
          公開鍵は、秘密鍵をもとに複数作成することが可能です。
        </p>
        <p>
          参考文献：https://udemy.benesse.co.jp/development/blockchain/public-key-cryptography.html
        </p>

        <MiniSectionTitle>署名</MiniSectionTitle>
        <p>秘密鍵で暗号化、公開鍵で復号しています。</p>

        <MiniSectionTitle>まとめ</MiniSectionTitle>
        <Balloon direction="right">
          これらの技術がブロックチェーンの土台だ。今後の説明で頻出だから、よく覚えておくように。
        </Balloon>

        <Pager
          direction="back"
          text="第一節"
          link="/content.html?chapter=1&section=1"
        />
        <Pager
          direction="forward"
          text="第二節"
          link="/content.html?chapter=1&section=2"
        />
      </Main>
    </>
  );
};

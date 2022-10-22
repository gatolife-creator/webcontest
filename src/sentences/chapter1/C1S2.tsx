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

export const C1S2 = () => {
  return (
    <Main>
      <SectionTitle>第四節　ブロックチェーンの基礎となる技術</SectionTitle>
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

      <Balloon direction="left">これはサーバーに障害が出ている図だ。</Balloon>

      <p>なんかの説明</p>

      <Balloon direction="right">
        じゃあ、ピア・ツー・ピアの方はどうなんですか？
      </Balloon>

      <Balloon direction="left">これを見てみろ。</Balloon>

      <Image src={`${process.env.PUBLIC_URL}/imgs/スライド7.jpeg`}></Image>

      <Balloon direction="right">
        一部のコンピューターに障害が発生しているようですね。
      </Balloon>

      <Balloon direction="right">
        あっ、でも他のコンピューターは通信できてる！
      </Balloon>

      <Balloon direction="left">
        その通りだ。ピア・ツー・ピアは一部のコンピューターに障害が発生しても、システム全体は機能するのだ。
      </Balloon>

      <MiniSectionTitle>ハッシュ関数</MiniSectionTitle>
      <p>
        ハッシュ関数は別名 <Important>要約関数</Important>
        とも呼ばれ、入力した値をもとにランダムに見える値を出力する。
        <br />
        また、ハッシュ関数には以下のような特徴がある。
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
          ハッシュ値から、<Important>元の値を復元できない</Important>。
        </li>
      </Sum>

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
      <p>
        参考文献：https://udemy.benesse.co.jp/development/blockchain/public-key-cryptography.html
      </p>

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

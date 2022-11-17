import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";

export const C2S1 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>Peer to Peer（P2P）</MiniSectionTitle>
        <Balloon char="satoshi">ぺ、ぺあとーぺあ？</Balloon>

        <Balloon char="node">
          <Important>ピア・ツー・ピア</Important>
          だ。これはブロックチェーンにおいて、最も重要であると言っても過言ではない。
        </Balloon>

        <Balloon char="node">
          一般的に用いられる、<Important>クライアント・サーバー・システム</Important>
          にはないメリットがある。
        </Balloon>

        <Balloon char="satoshi">
          ピア・ツー・ピアにクライアント・サーバー・システム？聞きなれない言葉ばっかり...。
        </Balloon>

        <Balloon char="node">
          では、我々の生活に馴染み深いクライアント・サーバー・システムから解説しよう。
        </Balloon>

        <p>
          クライアント・サーバー・システムは、コンピューターを
          <Important>クライアント</Important>と<Important>サーバー</Important>
          に役割分担して、情報をやり取りする仕組みです。
          <br />
          クライアントは、サーバーに<Important>データを要求し</Important>
          、それを受け取るコンピューター、
          <br />
          サーバーは、クライアントからの要求に応じて、
          <Important>データを提供する</Important>コンピューターです。
        </p>

        <Balloon char="node">
          つまり、サーバーはたくさんのコンピューターにデータを提供する、偉〜いコンピューターなのだ。
        </Balloon>

        <Balloon char="node">
          イザワ君、ピア・ツー・ピアとクライアント・サーバー・システムの図を用意してくれ。
        </Balloon>
        <Balloon char="node">かしこまりました。</Balloon>

        <Image
          src={`${process.env.PUBLIC_URL}/imgs/client-server-system.png`}
        />

        <Balloon char="node">
          これがクライアント・サーバー・システムを表した図だ。真ん中のものがサーバー、その他のものがクライアントだ。クライアントはサーバーにデータの要求を行い、サーバーはその要求に応じて、データをクライアントに提供する。
        </Balloon>

        <Balloon char="satoshi">
          クライアント側にスマートフォンやパソコンがありますね！
        </Balloon>

        <Balloon char="node">
          そうだ。例えば我々はYouTubeを見る時、スマホを使うだろう？つまり、我々のスマホが
          <Important>クライアント</Important>
          としてYouTubeの<Important>サーバー</Important>
          に動画のデータを要求しているというわけだ。
        </Balloon>

        <Balloon char="satoshi">なるほど〜。</Balloon>

        <Balloon char="node">
          それでは、次にピア・ツー・ピアを見ていこう。
        </Balloon>

        <Balloon char="node">
          ピア・ツー・ピアは直訳すると「<Important>対等なもの</Important>から
          <Important>対等なもの</Important>へ」だな。
        </Balloon>

        <Balloon char="node">
          ピア・ツー・ピアはよく下のような図で表される。
        </Balloon>

        <Image src={`${process.env.PUBLIC_URL}/imgs/p2p.png`} />

        <Balloon char="satoshi">
          あれ？サーバーが見当たらないですね...。
        </Balloon>

        <Balloon char="node">
          いいところに気がついたな。そう、ピア・ツー・ピアにはクライアント、サーバーという役割分担が存在しないのだ。
        </Balloon>

        <Balloon char="satoshi">
          じゃあどうやってデータをやりとりしているんですか？
        </Balloon>

        <Balloon char="node">
          それは実にシンプルだ。各コンピューターが対等な立場で、他のコンピューターにデータを要求すると同時に、データを提供しているのだ。
        </Balloon>

        <Balloon char="node">
          それぞれのコンピューターがクライアントとサーバー、両方の役割を担っているとも言えますね。
        </Balloon>

        <Balloon char="node">
          その通りだ。さすがイザワ君。全てのコンピューターが同じ役割を持っているから、
          <Important>「対等なもの」</Important>というわけだな。
        </Balloon>

        <Balloon char="satoshi">
          そう言えば、ピア・ツー・ピアのメリットって何ですか。
        </Balloon>

        <Balloon char="node">
          それは、<Important>コンピューターへの負荷が分散する</Important>という点だ。
        </Balloon>

        <Balloon char="node">下の図を見てみよう。</Balloon>

        <Image
          src={`${process.env.PUBLIC_URL}/imgs/client-server-system-with-problem.png`}
        />

        <Balloon char="satoshi">うわぁ、サーバー燃えとる...。</Balloon>

        <Balloon char="node">
          それはサーバーが正常に動作していないことを表している。この図から分かる通り、サーバーが正常に動作していないと、全てのクライアントはデータを入手することができない。従って、サーバーの障害はシステム全体に影響を及ぼすことになる。
        </Balloon>

        <Balloon char="node">
          クライアント・サーバー・システムは
          <Important>サーバーに依存したシステム</Important>、ということですね。
        </Balloon>

        <Balloon char="satoshi">
          じゃあ、ピア・ツー・ピアの方はどうなんですか？
        </Balloon>

        <Balloon char="node">これを見てみろ。</Balloon>

        <Image
          src={`${process.env.PUBLIC_URL}/imgs/p2p-with-problem.png`}
        ></Image>

        <Balloon char="satoshi">
          一部のコンピューターが壊れているみたいですね。
        </Balloon>

        <Balloon char="satoshi">
          あっ、でも他のコンピューターは通信できてる！
        </Balloon>

        <Balloon char="node">
          その通り。ピア・ツー・ピアなら一部のコンピューターに障害が発生しても、他のコンピューターが動き続けているかぎり、システムは正常に機能するのだ。
        </Balloon>

        <Pager
          direction="back"
        />
        <Pager
          direction="forward"
        />
      </Main>
    </>
  );
};

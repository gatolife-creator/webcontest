import React from "react";

import { Main } from "../../components/Main";
import { Balloon } from "../../components/Balloon";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { BookInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C2S1 = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Main duration="long">
        <Crumb chapter={2} section={1} />
        <MiniSectionTitle>Peer to Peer（P2P）</MiniSectionTitle>
        <Balloon char="nakamoto">
          {lang === "ja" && "ぺ、ぺあとーぺあ？"}
          {lang === "en" && "P...Peer to Peer?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              <Important>ピア・ツー・ピア</Important>
              だ。これはブロックチェーンにおいて、最も重要であると言っても過言ではない。
            </>
          )}
          {lang === "en" && (
            <>
              <Important>Peer to Peer</Important>. This is the most important
              aspect of blockchain.
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              一般的に用いられる、
              <Important>クライアント・サーバー・システム</Important>
              にはないメリットがある。
            </>
          )}
          {lang === "en" && (
            <>
              It has some advantages that{" "}
              <Important>client server system</Important> don’t have.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "ピア・ツー・ピアにクライアント・サーバー・システム？聞きなれない言葉ばっかり...。"}
          {lang === "en" &&
            "Peer-to-peer and client server system? These are all unfamiliar words..."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "では、我々の生活に馴染み深いクライアント・サーバー・システムから解説しよう。"}
          {lang === "en" &&
            "Let's start with the client-server system, which is familiar to us in our daily lives."}
        </Balloon>
        <SubSectionTitle>
          {lang === "ja" && "クライアント・サーバー・システム"}
          {lang === "en" && "Client Server System"}
        </SubSectionTitle>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              クライアント・サーバー・システムは、コンピューターを
              <Important>クライアント</Important>と
              <Important>サーバー</Important>
              に役割分担して、情報をやり取りする仕組みだ。
            </>
          )}
          {lang === "en" && (
            <>
              In a client-server system, computers are divided into{" "}
              <Important>client</Important> and
              <Important>server</Important> roles to exchange information.
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              クライアントは、サーバーに<Important>データを要求し</Important>
              、それを受け取るコンピューター。
            </>
          )}
          {lang === "en" && (
            <>
              The client is a computer that{" "}
              <Important>requests data </Important>from the server and receives
              it.
            </>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              サーバーは、クライアントからの要求に応じて、
              <Important>データを提供する</Important>コンピューターだ。
            </>
          )}
          {lang === "en" && (
            <>
              The server is the computer that{" "}
              <Important>provides data</Important> in response to requests from
              the client.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "ふむふむ。"}
          {lang === "en" && "Hmmm..."}
        </Balloon>

        <Balloon char="node">
          {lang === "ja" &&
            "イザワ君、ピア・ツー・ピアとクライアント・サーバー・システムの図を用意してくれ。"}
          {lang === "en" &&
            "Mr. Izawa, please prepare a diagram of a peer-to-peer and client-server system."}
        </Balloon>
        <Balloon char="ether">
          {lang === "ja" && "かしこまりました。"}
          {lang === "en" && "Yes, sir."}
        </Balloon>
        <Image
          src={`${process.env.PUBLIC_URL}/imgs/client-server-system.png`}
          caption={
            lang === "ja"
              ? "クライアント・サーバー・システム"
              : lang === "en"
              ? "Client Server System"
              : ""
          }
        />
        <Balloon char="node">
          {lang === "ja" &&
            "これはクライアント・サーバー・システムを表した図だ。"}
          {lang === "en" && "This is a diagram of client server system."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "真ん中のものがサーバー、その他のものがクライアントだ。"}
          {lang === "en" &&
            "The middle one is the server and the others are clients."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "クライアント側にスマートフォンやパソコンがありますね！"}
          {lang === "en" &&
            "On the client side, there are smartphones and computers, right?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "そうだ。例えば我々はYouTubeを見る時、スマホを使うだろう？"}
          {lang === "en" &&
            "That's right. For example, when we watch YouTube, we use our smartphones, right?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              つまり、我々のスマホが
              <Important>クライアント</Important>
              としてYouTubeの<Important>サーバー</Important>
              に動画のデータを要求しているというわけだ。
            </>
          )}
          {lang === "en" && (
            <>
              In other words, our smartphones are requesting video data from
              YouTube's <Important>servers</Important> as{" "}
              <Important>clients</Important>.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "なるほど〜。"}
          {lang === "en" && "I see."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "それでは、次にピア・ツー・ピアを見ていこう。"}
          {lang === "en" && "Now let's look at peer-to-peer."}
        </Balloon>

        <SubSectionTitle>
          {lang === "ja" && "ピア・ツー・ピア"}
          {lang === "en" && "Peer to Peer"}
        </SubSectionTitle>
        {lang === "ja" && (
          <Balloon char="node">
            <>
              ピア・ツー・ピアは直訳すると「<Important>対等なもの</Important>
              から
              <Important>対等なもの</Important>へ」だな。
            </>
          </Balloon>
        )}
        <Balloon char="node">
          {lang === "ja" && "ピア・ツー・ピアはよく下のような図で表される。"}
          {lang === "en" &&
            "Peer to Peer is often represented by the diagram below."}
        </Balloon>
        <Image
          src={`${process.env.PUBLIC_URL}/imgs/p2p.png`}
          caption={
            lang === "ja"
              ? "ピア・ツー・ピア"
              : lang === "en"
              ? "Peer to Peer"
              : ""
          }
        />
        <Balloon char="nakamoto">
          {lang === "ja" && "あれ？サーバーが見当たらないですね...。"}
          {lang === "en" && "Huh? I can't see a server..."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "いいところに気がついたな。そう、ピア・ツー・ピアにはクライアント、サーバーという役割分担が存在しないのだ。"}
          {lang === "en" &&
            "You've found a good point. Yes, in Peer to Peer, there is no division of roles between clients and servers."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "じゃあどうやってデータをやりとりしているんですか？"}
          {lang === "en" && "Then how do they exchange data?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              それは実にシンプルだ。<Important>ノード</Important>
              と呼ばれるコンピューターが、対等な立場で他のノードにデータを要求すると同時に、データを提供しているのだ。
            </>
          )}
          {lang === "en" && (
            <>
              It is quite simple. Computers, called <Important>nodes</Important>
              , request data from other nodes on an equal footing, and at the
              same time, provide data to other nodes.
            </>
          )}
        </Balloon>
        <Balloon char="ether">
          {lang === "ja" &&
            "それぞれのコンピューターがクライアントとサーバー、両方の役割を担っているとも言えますね。"}
          {lang === "en" &&
            "You could say that each computer acts as both a client and a server."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              その通りだ。さすがイザワ君。全てのコンピューターが同じ役割を持っているから、
              <Important>「対等なもの」</Important>というわけだな。
            </>
          )}
          {lang === "en" && (
            <>
              That's right. Mr. Izawa. Since all computers have the same role,
              they are 'peers'.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" &&
            "そう言えば、ピア・ツー・ピアのメリットって何ですか。"}
          {lang === "en" &&
            "Speaking of which, what is the advantage of Peer to Peer?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && (
            <>
              それは、<Important>コンピューターへの負荷が分散する</Important>
              という点だ。
            </>
          )}
          {lang === "en" && (
            <>It is that the load on the computers is distributed.</>
          )}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "下の図を見てみよう。"}
          {lang === "en" && "Let's look at the diagram below."}
        </Balloon>
        <Image
          src={`${process.env.PUBLIC_URL}/imgs/client-server-system-with-problem.png`}
          caption={
            lang === "ja"
              ? "クライアント・サーバー・システム"
              : lang === "en"
              ? "Client Server System"
              : ""
          }
        />
        <Balloon char="nakamoto">
          {lang === "ja" && "うわぁ、サーバー燃えとる...。"}
          {lang === "en" && "Wow, a server is burning up..."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "それはサーバーが正常に動作していないことを表している。"}
          {lang === "en" &&
            "It indicates that the server is not working properly."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "この図から分かる通り、サーバーが正常に動作していないと、全てのクライアントはデータを入手することができない。"}
          {lang === "en" &&
            "As you can see from the diagram, if the server is not working properly, all clients will not be able to get their data."}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "従って、サーバーの障害はシステム全体に影響を及ぼすことになる。"}
          {lang === "en" && "A server failure will affect the entire system."}
        </Balloon>
        <Balloon char="ether">
          {lang === "ja" && (
            <>
              クライアント・サーバー・システムは
              <Important>サーバーに依存したシステム</Important>
              、ということですね。
            </>
          )}
          {lang === "en" && (
            <>
              So client server system is{" "}
              <Important>a server-dependent system</Important>.
            </>
          )}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "じゃあ、ピア・ツー・ピアの方はどうなんですか？"}
          {lang === "en" && "How about Peer to Peer?"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" && "これを見てみろ。"}
          {lang === "en" && "Look at this."}
        </Balloon>
        <Image
          src={`${process.env.PUBLIC_URL}/imgs/p2p-with-problem.png`}
          caption={
            lang === "ja"
              ? "ピア・ツー・ピア"
              : lang === "en"
              ? "Peer to Peer"
              : ""
          }
        />
        <Balloon char="nakamoto">
          {lang === "ja" && "一部のコンピューターが壊れているみたいですね。"}
          {lang === "en" && "It looks like some computers are broken."}
        </Balloon>
        <Balloon char="nakamoto">
          {lang === "ja" && "あっ、でも他のコンピューターは通信できてる！"}
          {lang === "en" && "Oh, but the other computers are communicating!"}
        </Balloon>
        <Balloon char="node">
          {lang === "ja" &&
            "その通り。ピア・ツー・ピアなら一部のコンピューターに障害が発生しても、他のコンピューターが動き続けているかぎり、システムは正常に機能するのだ。"}
          {lang === "en" &&
            "That's right. With Peer to Peer, even if some computers fail, as long as the other computers keep working, the system will continue to function normally."}
        </Balloon>
        <Pager direction="back" />
        <Pager direction="forward" />
        <MiniSectionTitle>References</MiniSectionTitle>
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
      </Main>
    </>
  );
};

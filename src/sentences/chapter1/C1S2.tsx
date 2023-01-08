import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

import { Important } from "../../components/Important";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Image } from "../../components/Image";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C1S2 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <Crumb chapter={1} section={2} />
      <MiniSectionTitle>
        {lang === "ja" && "ブロックチェーンの歴史"}
        {lang === "en" && "The history of blockchain"}
      </MiniSectionTitle>
      <SubSectionTitle>
        {lang === "ja" && "デジタル文書とタイムスタンプ"}
        {lang === "en" && "Digital Documents and Time Stamps"}
      </SubSectionTitle>
      <Balloon char="node">
        {lang === "ja" &&
          "ブロックチェーンの前身となったアイデアは、1991年にまでさかのぼる。"}
        {lang === "en" &&
          "The idea was the forerunner of blockchain, dates back to 1991."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "かなり昔までさかのぼりますね。"}
        {lang === "en" && "That's quite a long way back."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            デジタル文書に<Important>タイムスタンプ</Important>
            をつけることで、文書の改ざんを防ぐというものだ。スチュアート・ヘイバー氏とスコット・ストルネッタ氏によって発表された。
          </>
        )}
        {lang === "en" && (
          <>
            The idea was to put <Important>a time stamp</Important> on digital
            documents to prevent them from being tampered with. It was presented
            by Stuart Haver and Scott Stornetta.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "タイムスタンプって何ですか？"}
        {lang === "en" && "What is the time stamp?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            {" "}
            簡単にいうと、データが<Important>作成された日時</Important>
            、それと<Important>改ざんされていない</Important>
            ことを証明する技術だ。
          </>
        )}
        {lang === "en" && (
          <>
            In brief, it is a technology that proves{" "}
            <Important>the date created</Important>, and{" "}
            <Important>no tampering</Important>.
          </>
        )}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "すごく便利じゃないですか！"}
        {lang === "en" && "It sounds great?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "あぁ、しかし残念なことに、ビットコインが誕生する4年まえに特許が切れてしまったのだ。"}
        {lang === "en" &&
          "Ah, but, unfortunately the patent expired four years before Bitcoin was born.Reference:'How to Time-Stamp a Digital Document.'"}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "ビットコイン誕生"}
        {lang === "en" && "The Emergence of Bitcoin "}
      </SubSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/Bitcoin-logo.svg"}
        caption={
          (lang === "ja" ? "引用元" : lang === "en" ? "Reference Source" : "") +
          ": Bitcoin Forum"
        }
        style={{}}
      ></Image>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            {" "}
            2008年、サトシ・ナカモトを語る人物が、
            <Important>ビットコイン</Important>
            （Bitcoin） と呼ばれる電子決済システムについての論文を発表した。
          </>
        )}

        {lang === "en" && (
          <>
            In 2008, a person called Satoshi Nakamoto published a paper on an
            electronic payment system <Important>“Bitcoin”</Important>.
          </>
        )}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "そして、2009年に運用開始。遂に世界初の仮想通貨、ビットコインの誕生だ！"}
        {lang === "en" &&
          "And it became operational in 2009. At last, the world's first cryptol currency, bitcoin was born!"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "どんどんパフパフ～！"}
        {lang === "en" && "Woohoo!"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            そして、そのビットコインと呼ばれる電子決済システムに使われた技術が、後に
            <Important>ブロックチェーン</Important>として名をはせることになる。
          </>
        )}
        {lang === "en" && (
          <>
            And the technology used in the electronic payment system called
            bitcoin would later make a name for itself as{" "}
            <Important>blockchain</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "遂にブロックチェーン技術が誕生しましたね！"}
        {lang === "en" && "At last, blockchain technology was born!"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            その後、ビットコインの課題を解決すべく、たくさんの
            <Important>アルトコイン</Important>
            （ビットコインをもとにした仮想通貨）が誕生した。
          </>
        )}

        {lang === "en" && (
          <>
            Then, many <Important>altcoins</Important> (virtual currencies based
            on bitcoin) were created to solve the problems of bitcoin.
          </>
        )}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && "その中でも革命的なものを次に見ていこう。"}
        {lang === "en" && "Let's look at the most revolutionary of them next."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "ブロックチェーンの汎用化"}
        {lang === "en" && "Generalization of blockchain"}
      </SubSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/ethereum-logo-landscape-black.png"}
        caption={
          (lang === "ja" ? "引用元" : lang === "en" ? "Reference Source" : "") +
          ": ethereum.org assets"
        }
        style={{}}
        disableSwitching={true}
      />
      <Balloon char="nakamoto">
        {lang === "ja" &&
          " 先生、革命的なアルトコインって何ですか？早く教えてくださいよ！"}
        {lang === "en" &&
          "Professor, what is a revolutionary altcoin? Tell us quickly!"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "まぁまぁ、落ち着け。実は仮想通貨よりもスケールの大きい物なのだよ。"}
        {lang === "en" &&
          "Well, well, well, calm down. It's actually something on a larger scale than cryptocurrency."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "なおさら気になりますよ！"}
        {lang === "en" && "I'm even more curious!"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            その名も<Important>イーサリアム</Important>（ethereum）。
            何とブロックチェーン上で
            <Important>プログラムの記録、実行</Important>
            ができてしまうのだ。
          </>
        )}

        {lang === "en" && (
          <>
            Its name is <Important>ethereum</Important>. What's more, you can{" "}
            <Important>record and execute</Important> programs on the
            blockchain.
          </>
        )}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "それのどこが画期的なんですか？"}
        {lang === "en" && "What's so revolutionary about that?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && "バカヤロウ！"}
        {lang === "en" && "You idiot!"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "いてっ。"}
        {lang === "en" && "Ouch."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            {" "}
            今までブロックチェーンに記録されていたのは、仮想通貨の
            <Important>取引履歴</Important>
            だけだった。
          </>
        )}
        {lang === "en" && (
          <>
            Until now, the only thing recorded on the blockchain was{" "}
            <Important>the transaction history</Important> of cryptocurrency.
          </>
        )}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            しかし、プログラムを記録できるようになったことで、仮想通貨だけでなく
            <Important>様々な分野に応用</Important>できるようになったのだ。
          </>
        )}
        {lang === "en" && (
          <>
            But now, programs can be recorded so it can be applied{" "}
            <Important>
              not only cryptocurrencies but also various other fields
            </Important>
            .
          </>
        )}
      </Balloon>

      <Balloon char="ether">
        {lang === "ja" && "ブロックチェーンの汎用化、というわけですね。"}
        {lang === "en" && "So, the generalization of the blockchain."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "イーサリアムを皮切りに、金融、IoT、ゲーム、教育などへの活用に向けて開発が活発化することになったのだ。"}
        {lang === "en" &&
          "Starting with Ethereum, development has been intensified in finance, IoT, gaming, education, and more."}
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
        title="ブロックチェーンの歴史"
        author="Binance Academy"
        url="https://academy.binance.com/ja/articles/history-of-blockchain"
        date="12/22"
      />
      <SiteInfo
        title="タイムスタンプとは？"
        author="総務省"
        url="https://www.soumu.go.jp/main_sosiki/joho_tsusin/security/basic/structure/05.html"
        date="12/26"
      />
      <SiteInfo
        title="アルトコイン｜証券用語解説集｜野村證券"
        author="野村證券"
        url="https://www.nomura.co.jp/terms/japan/a/A03151.html"
        date="12/22"
      />
    </Main>
  );
};

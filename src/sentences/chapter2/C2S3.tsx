import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const C2S3 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "公開鍵暗号方式"}
        {lang === "en" && "Public Key Cryptography"}
      </MiniSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" && "公開鍵暗号方式…。なんだか難しいそうな響きですね。"}
        {lang === "en" &&
          "Public key cryptography... It sounds rather difficult, doesn't it?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            安心しろ。決して仕組みは難しくない。<Important>秘密鍵</Important>
            で暗号化し、<Important>公開鍵</Important>で復号する仕組みだ。
          </>
        )}
        {lang === "en" && (
          <>
            Don't worry. The mechanism is not difficult at all. It is a
            mechanism that encrypts with <Important>a private key </Important>
            and decrypts with <Important>a public key</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "はぁ...。"}
        {lang === "en" && "Huh..."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "ナカモト君、下の図を見てみろ。これは、公開鍵暗号方式の仕組みを簡単にあらわしたものだ。"}
        {lang === "en" &&
          "Mr. Nakamoto, look at the figure below. This is a simple illustration of the mechanism of public key cryptography."}
      </Balloon>
      <Image
        src={`${process.env.PUBLIC_URL}/imgs/public-key-crypto-system.png`}
        caption={
          lang === "ja"
            ? "公開鍵暗号方式"
            : lang === "en"
            ? "Public Key Cryptography"
            : ""
        }
      />
      <Balloon char="nakamoto">
        {lang === "ja" && (
          <>
            まずは受信者が<Important>秘密鍵</Important>と
            <Important>公開鍵</Important>
            を作るんですね。
          </>
        )}
        {lang === "en" && (
          <>
            First, the receiver creates a private key and a public key, doesn't
            it?
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            送信者が鍵を受け取ったら、<Important>公開鍵</Important>
            でデータを暗号化したのちに送信する。
          </>
        )}
        {lang === "en" && (
          <>
            When the sender receives the key, he/she encrypts the data with{" "}
            <Important>the public key</Important> before sending it.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            そして、受信者側では受け取ったデータを
            <Important>秘密鍵</Important>で復号する。
          </>
        )}
        {lang === "en" && (
          <>
            Then, the receiver decrypts the received data with{" "}
            <Important>the private key</Important>.
          </>
        )}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "これでめでたくデータを送信することができた。"}
        {lang === "en" && "Now we have successfully sent the data."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "仕組みはわかったんですが、何で鍵を複数作る必要があるんですか？"}
        {lang === "en" &&
          "I understand how it works, but why do I need to create multiple keys?"}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "ふつう、玄関の鍵を閉めるのにも開けるのにも、同じ鍵を使いますよね？"}
        {lang === "en" &&
          "Normally, you use the same key to lock and unlock the front door, right?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            当然の疑問だな。もちろん、暗号化と復号に同じ鍵を用いる
            <Important>共通鍵暗号方式</Important>というものもある。
          </>
        )}
        {lang === "en" && (
          <>
            That's a natural question. Of course, there is a common key
            cryptography that uses the same key for encryption and decryption.
          </>
        )}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/common-key-crypto-system-1.png"}
        caption={
          lang === "ja"
            ? "共通鍵暗号方式"
            : lang === "en"
            ? "Common Key Cryptography"
            : ""
        }
      ></Image>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            しかし、これには
            <Important>「鍵配送問題」</Important>
            といって、鍵の送信中に攻撃者に鍵を盗まれた場合、送信したデータを盗聴されてしまう恐れがあるのだ。
          </>
        )}
        {lang === "en" && (
          <>
            However, this has{" "}
            <Important>'The Key Distribution Problem'</Important>, which means
            if the key is stolen by an attacker during key transmission, the
            transmitted data may be intercepted.
          </>
        )}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/common-key-crypto-system-2.png"}
        caption={
          lang === "ja"
            ? "共通鍵暗号方式"
            : lang === "en"
            ? "Common Key Cryptography"
            : ""
        }
      ></Image>
      <Balloon char="node">
        {lang === "ja" && (
          <>
            一方で、公開鍵暗号方式ならば公開鍵が盗まれても、復号に使うのは
            <Important>秘密鍵</Important>だから問題ないというわけだ。
          </>
        )}
        {lang === "en" && (
          <>
            Even if the public key is stolen, there is no problem with public
            key cryptography, because <Important>the private key</Important> is
            used for decryption.
          </>
        )}
      </Balloon>
      <Pager direction="back" />
      <Pager direction="forward" />

      <MiniSectionTitle>
        {lang === "ja" && "参考文献"}
        {lang === "en" && "Reference"}
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
        title="公開鍵暗号方式とは？初心者でもわかる公開鍵暗号方式の基礎"
        author="Udemy"
        url="https://udemy.benesse.co.jp/development/blockchain/public-key-cryptography.html"
        date="12/22"
      />
    </Main>
  );
};

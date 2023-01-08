import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { Image } from "../../components/Image";
import { BookInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C2S4 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <Crumb chapter={2} section={4} />
      <MiniSectionTitle>
        {lang === "ja" && "デジタル署名"}
        {lang === "en" && "Digital Signature"}
      </MiniSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" && "デジタル署名って何ができるんですか？"}
        {lang === "en" && "What can a digital signature do?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            "改ざんの検出、そして<Important>否認の防止</Important>だ。
          </>
        )}
        {lang === "en" && (
          <>
            It can tamper detection and <Important>non-repudiation</Important>.
          </>
        )}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "否認？"}
        {lang === "en" && "Non-repudiation?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            インターネット上では、通常誰がデータを作成し、送信したのかを
            <Important>特定するのは困難</Important>だ。
          </>
        )}
        {lang === "en" && (
          <>
            On the Internet, it is usually{" "}
            <Important>difficult to identify</Important> who created and
            transmitted data.
          </>
        )}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "この特徴を利用して、データを送信した後に「自分は送信していない」などと否認することができてしまう。"}
        {lang === "en" &&
          "Using this feature, it is possible to repudiate data after it has been sent. And someone would say 'I didn't send it.'"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "なるほど...。"}
        {lang === "en" && "I see...."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            そこで、<Important>デジタル署名</Important>の出番だ。
          </>
        )}
        {lang === "en" && (
          <>
            This is where <Important>digital signature</Important> come in.
          </>
        )}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "デジタル署名では、公開鍵暗号方式と同じく、公開鍵と秘密鍵を利用した仕組みだ。"}
        {lang === "en" &&
          "Digital signatures, like public key cryptography, use a public key and a private key."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "公開鍵暗号方式とデジタル署名では、鍵の使い方が違うんですか？"}
        {lang === "en" &&
          "Do public-key cryptography and digital signature use different keys?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && (
          <>
            {" "}
            そう。公開鍵暗号方式では、暗号化に公開鍵を利用していたが、デジタル署名では
            <Important>秘密鍵</Important>を利用する。
          </>
        )}
        {lang === "en" && (
          <>
            Yes. Public key cryptography uses a public key for encryption, but
            digital signature use a private key.
          </>
        )}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && " なんで秘密鍵で暗号化するんですか？"}
        {lang === "en" && "Why do you encrypt with a private key?"}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          " じゃあ、もしも秘密鍵で暗号化されたデータを、公開鍵で復号できた場合どんなことがわかるかな？"}
        {lang === "en" &&
          "Well, what would we know if we could decrypt data encrypted with a private key with a public key?"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          " その公開鍵は、データを暗号化した秘密鍵と対応していることがわかりますね。"}
        {lang === "en" &&
          "You know that public key corresponds to the private key that encrypted the data."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "じゃあその秘密鍵の所持者は？"}
        {lang === "en" && "Then who is the holder of that private key?"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "あぁ、なるほど！データの送信者しかいない。だからデータの送信者を特定できるんだ。"}
        {lang === "en" &&
          "Ah, I see! There is only the sender of the data. So we can identify the sender of the data."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "さて、下の図を見てみよう。まずは、送信者は送信したいデータのハッシュ値を求める。"}
        {lang === "en" &&
          "Now, let's look at the diagram below. First, the sender asks for a hash value of the data he/she wants to send."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/digital-certificate.png"}
        caption={
          lang === "ja"
            ? "デジタル署名"
            : lang === "en"
            ? "Digital Signature"
            : ""
        }
      />
      <Balloon char="node">
        {lang === "ja" &&
          "それから、そのハッシュ値を秘密鍵を使って暗号化することで、署名の完成。目的のデータと一緒に送信する。"}
        {lang === "en" &&
          "Then, the signature is completed by encrypting that hash value with a private key.The data is sent along with the desired data."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "なんでこんなところにもハッシュ関数が？"}
        {lang === "en" && "Why is there a hash function?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "理論上はデータを暗号化したものを署名として使用できる。"}
        {lang === "en" &&
          "Theoretically, the data can be encrypted and used as a signature."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "しかし、暗号化には時間がかかってしまうため、ハッシュ値にしてデータ量を減らしてから暗号化しているのだ。"}
        {lang === "en" &&
          "However, encryption takes time, the amount of data is reduced to a hash value and then encrypted."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "なるほど〜。"}
        {lang === "en" && "I see."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" && "さて、今度は受信者側の手順を紹介するぞ。"}
        {lang === "en" &&
          "Now, let me introduce the procedure on the receiver's side."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "目的のデータと署名を受け取ったら、まずはデータをハッシュ化する。"}
        {lang === "en" &&
          "After receiving the data and the signature, the data is first hashed."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "次に、事前に受け取っていた公開鍵で署名を復号する。すると、ハッシュ値が出てくるよな？"}
        {lang === "en" &&
          "Next, the signature is decrypted with the public key received in advance.Then, the hash value comes out, right?"}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "あとはデータのハッシュ値と復号で得られたハッシュ値と照らし合わせるんですね！"}
        {lang === "en" &&
          "And then you compare the hash value of the data with the hash value obtained from decryption!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "その通りだ。ナカモト君、ハッシュ値のことになると急に頭が冴えるな。"}
        {lang === "en" &&
          "That's right. Mr.Nakamoto, you become very bright suddenly when it comes to hash values."}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" && "いやぁそれほどでも///"}
        {lang === "en" && "Yes, I think so."}
      </Balloon>
      <Balloon char="ether">
        {lang === "ja" && "（これって褒められてるのか...？）"}
        {lang === "en" &&
          "(Don't take it seriously, he is just flattering you..."}
      </Balloon>

      <Balloon char="node">
        {lang === "ja" &&
          "と言うことはさておき、ここでハッシュ値が一致すれば、有効な署名、一致していなければ無効ということになる。"}
        {lang === "en" &&
          "But, putting that aside, if the hash values here match, it is a valid signature, and if they do not, it is invalid."}
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
    </Main>
  );
};

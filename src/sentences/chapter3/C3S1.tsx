import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { BookInfo, SiteInfo } from "../../pages/Reference";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const C3S1 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "基本構造"}
        {lang === "en" && "Basic Structure"}
      </MiniSectionTitle>
      <Balloon char="node">
        {lang === "ja" && "ブロックチェーンはざっくりこのような構造をしている。"}
        {lang === "en" && "Blockchain has roughly this structure."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/blockchain.png"}
        caption="ブロックチェーン"
      />
      <Balloon char="node">
        {lang === "ja" && "トランザクションをまとめるブロックがあり、そのブロックが連なっているのがブロックチェーン、と言った感じだ。"}
        {lang === "en" && "There are blocks that organize transactions, and  blockchain is a series of those blocks."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "ブロックが何かしらで繋がっているからブロックチェーンなんですね！"}
        {lang === "en" && "So it's a blockchain because the blocks are somehow connected!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "おや？今日は勘がいいな。"}
        {lang === "en" && "Hmm? You have a good intuition today."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "ちなみに、ブロックチェーンの最初のブロックを特別に<Important>ジェネシス・ブロック（Genesis Block）</Important>と呼ぶことを覚えておこう。"}
        {lang === "en" && "By the way, let's keep it mind that the first block in a blockchain is specially called the Genesis Block."}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "トランザクション"}
        {lang === "en" && "Transaction"}
      </SubSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/transaction.png"}
        caption="トランザクション"
      />
      <Balloon char="nakamoto">
        {lang === "ja" && "トランザクション、ですか。あまり聞き馴染みがありませんね。"}
        {lang === "en" && "Transaction, right? It doesn't sound very familiar."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && <>日本語では、「取引」「取引履歴」などとと訳す。ブロックチェーンにおいては、<Important>資産や所有権</Important>の移動を記録する役割がある。</>}
        {lang === "en" && <>In Japanese, it translates as "transaction" or "transaction history. In blockchain, it serves to record the movement of <Important>assets and ownership.</Important></>}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "トランザクションには、「送信元アドレス」「送信先アドレス」「取引量」「日時」などのデータが記録されている。"}
        {lang === "en" && "Transactions record data such as \"source address,\" \"destination address,\" \"transaction amount,\" and \"date and time.\""}
      </Balloon>

      <SubSectionTitle>
        {lang === "ja" && "ブロック"}
        {lang === "en" && "Block"}
      </SubSectionTitle>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/block.png"}
        caption="ブロック"
      />
      <Balloon char="node">
        {lang === "ja" && "続いてブロックだ。これは、一定量のトランザクションをまとめる役割がある。"}
        {lang === "en" && "Next is the block. This serves to consolidate a certain amount of transactions."}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "なんで、トランザクションをまとめる必要があるんですか。"}
        {lang === "en" && "Why do we need to consolidate transactions?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && <>いい質問だ。実は、トランザクションの<Important>改ざん</Important>を防ぐのに一役買っている。</>}
        {lang === "en" && <>Good question. Actually, it helps prevent transactions from <Important>being tampered with.</Important></>}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "へ〜。"}
        {lang === "en" && "Heh."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && <>さて、続いてはブロック内にある<Important>ブロックヘッダー</Important>について教えよう。</>}
        {lang === "en" && <>Now, let me tell you about the <Important>block header</Important> in a block.</>}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/block-header.png"}
        caption="ブロックヘッダ"
      />
      <Balloon char="node">
        {lang === "ja" && <>ブロックヘッダー内には、<Important>メタデータ</Important>が格納されている。</>}
        {lang === "en" && <>Inside the block header, <Important>metadata</Important> is stored.</>}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && "うん？メタデータ？"}
        {lang === "en" && "Hmmm? Metadata?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && <>メタデータとは、<Important>データについてのデータ</Important>のことだ。</>}
        {lang === "en" && <>Metadata is <Important>data about data.</Important></>}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && <>PDFを例にとると、PDF上の文字データ以外のデータ、例えば<Important>作成日</Important>や<Important>作成者</Important>がメタデータにあたる。</>}
        {lang === "en" && <>Taking PDF as an example, metadata is data other than text data on the PDF, such as creation date and creator.</>}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/metadata.png"}
        caption="メタデータ"
      ></Image>
      <Balloon char="nakamoto">
        {lang === "ja" && "なるほど、メインのデータに付随しているのがメタデータなんですね！"}
        {lang === "en" && "I see, so metadata is what accompanies the main data!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "今回の場合だと、そのブロックの直前のハッシュ値、日時、ナンス値などがメタデータだ。"}
        {lang === "en" && "In this case, the metadata is the hash value, date and time, nance value, etc. immediately before the block."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && <>特に、<Important>直前のハッシュ値</Important>と<Important>ナンス値</Important>は改ざんを防ぐための鍵となるから、しっかりと覚えておこう。</>}
        {lang === "en" && <>In particular, <Important>the hash value</Important> and <Important>nonce value</Important> are key to prevent tampering, so be sure to keep them in mind.</>}
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
        title="メタデータ（メタ情報）とは - 意味をわかりやすく - IT用語辞典
  e-Words"
        author="e-Words"
        url="https://e-words.jp/w/%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF.html"
        date="12/22"
      />
    </Main>
  );
};

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

export const C3S3 = () => {
  const lang = useRecoilValue(langState);
  return (
    <Main duration="long">
      <MiniSectionTitle>
        {lang === "ja" && "改ざん検知"}
        {lang === "en" && "Tamper Detection"}
      </MiniSectionTitle>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "ノード先生、改ざんはやっぱりハッシュ関数を活用して検知するんですか？"}
        {lang === "en" &&
          "Prof. Node, do you still utilize hash functions to detect tampering?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "うむ。その通り、少しずつ成長しているみたいだな。"}
        {lang === "en" &&
          "That's right. Mm-hmm… you seem to be wiser little by little."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "仕組みを簡略化すると、こんな図になる。"}
        {lang === "en" &&
          "If we simplify the mechanism, the diagram looks like this."}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/block-tamper-detection1.png"}
        caption={
          lang === "ja" ? "改ざん検知" : lang === "en" ? "Tamper Detection" : ""
        }
        style={{
          boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, .5)",
        }}
      />
      <Balloon char="nakamoto">
        {lang === "ja" && "なるほど！ブロックはハッシュ値で繋がっていたのか！"}
        {lang === "en" && "I see! Blocks are connected by hash values!"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "そのと〜り！ブロックチェーンの「チェーン」の正体は「ハッシュ値」だったわけだ。"}
        {lang === "en" &&
          'Exactly! The "chain" of blockchain is really a "hash value."'}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" &&
          "それで、どんなふうにして改ざんを検知しているんですか？"}
        {lang === "en" && "So, how does is detect tampering?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" && "具体例で見てみよう。"}
        {lang === "en" && "Let's look at a concrete example."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "もしも真ん中のブロックのトランザクションを改ざんされるとどうなるかな？"}
        {lang === "en" &&
          "What would happen if the transaction in the middle block is tampered with?"}
      </Balloon>
      <Balloon char="nakamoto">
        {lang === "ja" && (
          <>
            はっ！ブロックの中身が変われば、ブロックのハッシュ値も代わる。だから、
            <Important>
              直後のブロックに保存されてるハッシュ値と合わなくなる
            </Important>
            のか！
          </>
        )}
        {lang === "en" &&
          "Ha! If the contents of the block change, the hash value of the block also changes. "}
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/block-tamper-detection2.png"}
        caption={
          lang === "ja" ? "改ざん検知" : lang === "en" ? "Tamper Detection" : ""
        }
      />
      <Balloon char="node">
        {lang === "ja" && "大正解！"}
        {lang === "en" && "Great answer!"}
      </Balloon>

      <Balloon char="nakamoto">
        {lang === "ja" &&
          "でも先生、もしも後続のブロックも改ざんしてしまえば、整合性がとれますよね。"}
        {lang === "en" &&
          "But sir, if we tamper with the subsequent block, it will be consistent, right?"}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "いいところに気がついた！それを防ぐのには、更なる仕組みが必要だ。"}
        {lang === "en" &&
          "Good point! We need a further mechanism to prevent that."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "今回は一つのノードだけでの改ざん対策であったが、実際は他のノードとデータを共有しながら運用される。"}
        {lang === "en" &&
          "In this case, the tampering countermeasure was only for one node, but in reality, the system will be operated while sharing data with other nodes."}
      </Balloon>
      <Balloon char="node">
        {lang === "ja" &&
          "他のノードにも正しいブロックだと認めてもらう作業、承認が必要だ。"}
        {lang === "en" &&
          "It is necessary for other nodes to work for recognition and approbation. "}
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

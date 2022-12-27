import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";
import { Image } from "../../components/Image";
import { BookInfo } from "../../pages/Reference";

export const C3S3 = () => {
  return (
    <Main duration="long">
      <MiniSectionTitle>改ざん検知</MiniSectionTitle>
      <Balloon char="nakamoto">
        ノード先生、改ざんはやっぱりハッシュ関数を活用して検知するんですか？
      </Balloon>
      <Balloon char="node">
        うむ。その通り、少しずつ成長しているみたいだな。
      </Balloon>
      <Balloon char="node">仕組みを簡略化すると、こんな図になる。</Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/block-tamper-detection1.png"}
        caption="改ざん検知"
        style={{
          boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, .5)",
        }}
      />
      <Balloon char="nakamoto">
        なるほど！ブロックはハッシュ値で繋がっていたのか！
      </Balloon>
      <Balloon char="node">
        そのと〜り！ブロックチェーンの「チェーン」の正体は「ハッシュ値」だったわけだ。
      </Balloon>
      <Balloon char="nakamoto">
        それで、どんなふうにして改ざんを検知しているんですか？
      </Balloon>
      <Balloon char="node">具体例で見てみよう。</Balloon>
      <Balloon char="node">
        もしも真ん中のブロックのトランザクションを改ざんされるとどうなるかな？
      </Balloon>
      <Balloon char="nakamoto">
        はっ！ブロックの中身が変われば、ブロックのハッシュ値も代わる。だから、
        <Important>
          直後のブロックに保存されてるハッシュ値と合わなくなる
        </Important>
        のか！
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/block-tamper-detection2.png"}
        caption="改ざん検知"
      ></Image>
      <Balloon char="node">大正解！</Balloon>

      <Balloon char="nakamoto">
        でも先生、もしも後続のブロックも改ざんしてしまえば、整合性がとれますよね。
      </Balloon>
      <Balloon char="node">
        いいところに気がついた！それを防ぐのには、更なる仕組みが必要だ。
      </Balloon>
      <Balloon char="node">
        今回は一つのノードだけでの改ざん対策であったが、実際は他のノードとデータを共有しながら運用される。
      </Balloon>
      <Balloon char="node">
        他のノードにも正しいブロックだと認めてもらう作業、承認が必要だ。
      </Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />

      <MiniSectionTitle>参考文献</MiniSectionTitle>
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

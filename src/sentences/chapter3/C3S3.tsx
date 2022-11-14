import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Balloon } from "../../components/Balloon";

export const C3S3 = () => {
  return (
    <Main>
      <MiniSectionTitle>改ざん検知</MiniSectionTitle>
      <Balloon char="satoshi">ノード先生、改ざんはやっぱりハッシュ関数を活用して防ぐのですか？</Balloon>
      <Balloon char="node">うむ。その通り、少しずつ成長しているみたいだな。</Balloon>
      <Balloon char="node">仕組みはこんな感じだ。</Balloon>


      <Balloon char="satoshi">なるほど！ブロックはハッシュ値で繋がっていたのか！</Balloon>
      <Balloon char="node">そのと〜り！ブロックチェーンの「チェーン」の正体は「ハッシュ値」だったわけだ。</Balloon>

      <Balloon char="satoshi">でも先生、もしも後に続くブロックも改ざんして仕舞えば、整合性がとれますよね。</Balloon>
      <Balloon char="node">いいところに気がついた！それを防ぐのには、更なる仕組みが必要だ。</Balloon>
      <Balloon char="node">今回は一つのノードだけでの改ざん対策であったが、実際は他のノードとデータを共有しながら運用される。</Balloon>
      <Balloon char="node">他のノードにも正しいブロックチェーンだと認めてもらう作業、承認が必要だ。</Balloon>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

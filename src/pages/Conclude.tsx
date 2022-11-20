import React from "react";
import { Drawer } from "../components/Drawer";
import { Important } from "../components/Important";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Pager } from "../components/Pager";

export const Conclude = () => {
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>最後に</MiniSectionTitle>
          「ブロックチェーン入門〜ノード先生、ブロックチェーンってなんですか？〜」をお楽しみいただけたでしょうか。
          <br />
          <br />
          チームリーダーを筆頭に、ブロックチェーンの魅力を伝えるべく、コンテンツ作成に邁進してきました。しかしながら、本編では伝えきれなかった魅力があります。
          <br />
          それはAIとは真逆である
          <Important>中央機関を廃して分権を実現する</Important>と言うものです。
          <br />
          <br />
          近年、AIが人間の仕事、例えば自動車運転や受付業務などを自動化し、仕事を奪ってしまうことが懸念されています。ただでさえ、会社や国に取り分を持って行かれているのに、仕事を奪われてしまうようでは泣きっ面に蜂です。
          <br />
          <br />
          一方で、ブロックチェーンが自動化するのは
          <Important>中央機関</Important>の業務です。
          <br />
          つまり、ブロックチェーンは私たちの仕事を奪うどころか、中間搾取を防止することで労働者に生き生きと働ける環境を提供してくれます。
          経済格差を是正し、個人がよりよく生きてゆく助けになりえるブロックチェーン。
          <br />
          <br />
          なんだか、正義のヒーローに思えてきませんか。
          このコンテンツでブロックチェーンに興味を持っていただけたのなら、私たちにとってこれほど嬉しいことはありません。
          <br />
          <br />
          <p className="text-right">制作者一同</p>
          <Pager
            direction="back"
            text="総まとめ"
            link="/content.html?chapter=6&section=0"
          ></Pager>
          <Pager
            direction="forward"
            text="サイト情報"
            link="/info.html"
          ></Pager>
        </Main>
      </Drawer>
    </>
  );
};

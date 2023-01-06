import React from "react";
import { Drawer } from "../components/Drawer";
import { Important } from "../components/Important";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Pager } from "../components/Pager";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Conclude = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>
            {lang === "ja" && "最後に"}
            {lang === "en" && "Epilogue"}
          </MiniSectionTitle>
          {lang === "ja" &&
            "「ブロックチェーン入門〜ノード先生、ブロックチェーンってなんですか？〜」をお楽しみいただけたでしょうか。"}
          {lang === "en" &&
            "We hope you enjoyed 'Blockchain World for beginners'."}
          <br />
          <br />
          {lang === "ja" &&
            "チームリーダーを筆頭に、ブロックチェーンの魅力を伝えるべく、コンテンツ作成に邁進してきました。しかしながら、本編では伝えきれなかった魅力があります。"}
          {lang === "en" &&
            "This project Led by the team leader, GatoLife. We have worked hard to create contents to convey the appeal of blockchain. However, there is one attraction that we could not convey in this edition."}
          <br />
          {lang === "ja" && (
            <>
              それはAIとは真逆である
              <Important>中央機関を廃して分権を実現する</Important>
              と言うものです。
            </>
          )}
          {lang === "en" && (
            <>
              It is exactly opposite of AI,{" "}
              <Important>
                it abolishes central institutions and realize decentralization
              </Important>
              .
            </>
          )}
          <br />
          <br />
          {lang === "ja" &&
            "近年、AIが人間の仕事、例えば自動車運転や受付業務などを自動化し、仕事を奪ってしまうことが懸念されています。ただでさえ、会社や国に取り分を持って行かれているのに、仕事を奪われてしまうようでは泣きっ面に蜂です。"}
          {lang === "en" &&
            "In recent years, there is concern that AI will automate and take away human jobs, such as driving cars and receptionist jobs. In the first place, the companies or the government exploit workers and it would be shame if workers lost their jobs."}
          <br />
          <br />
          {lang === "ja" && (
            <>
              一方で、ブロックチェーンが自動化するのは
              <Important>中央機関</Important>の業務です。
            </>
          )}
          {lang === "en" && (
            <>
              On the other hand, blockchain automates the operations of{" "}
              <Important>central institutions</Important>.
            </>
          )}
          <br />
          {lang === "ja" &&
            "つまり、ブロックチェーンは私たちの仕事を奪うどころか、中間搾取を防止することで労働者に生き生きと働ける環境を提供してくれます。経済格差を是正し、個人がよりよく生きてゆく助けになりえるブロックチェーン。"}
          {lang === "en" &&
            "In other words, rather than taking away our jobs, blockchain provides workers with an environment in which they can thrive by preventing intermediate exploitation. Blockchain can correct economic disparities and help individual lives."}
          <br />
          <br />
          {lang === "ja" &&
            "なんだか、正義のヒーローに思えてきませんか。このコンテンツでブロックチェーンに興味を持っていただけたのなら、私たちにとってこれほど嬉しいことはありません。"}
          {lang === "en" &&
            "Doesn't it seem like a hero of justice? We would be happy if you are interested in blockchain through these contents."}

          <br />
          <br />
          <p className="text-right">
            {lang === "ja" && "制作者一同"}
            {lang === "en" && "From all the creators"}
          </p>
          <Pager
            direction="back"
            text={lang === "ja" ? "総まとめ" : lang === "en" ? "Conclusion" : ""}
            link="/content.html?chapter=6&section=0"
          ></Pager>
          <Pager
            direction="forward"
            text={lang === "ja" ? "サイト情報" : lang === "en" ? "Site Info" : ""}
            link="/info.html"
          ></Pager>
        </Main>
      </Drawer>
    </>
  );
};

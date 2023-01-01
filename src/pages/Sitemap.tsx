import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Sitemap = () => {
  const lang = useRecoilValue(langState);
  const Element = (props: {
    title: string;
    link: string;
    children?: JSX.Element;
  }) => (
    <div className="mx-auto w-4/5 sm:w-[400px] lg:w-[350px]">
      <div className="my-7 bg-primary px-3 py-2 text-lg font-bold">
        <Link to={props.link}>{props.title}</Link>
      </div>
      {props.children}
    </div>
  );

  const List = (props: { link: string; children: string }) => (
    <li className="list-inside list-disc indent-4">
      <Link className="link-hover" to={props.link}>
        {props.children}
      </Link>
    </li>
  );

  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>サイトマップ</MiniSectionTitle>
          <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Element
              link="/content.html?chapter=1&section=0"
              title="ブロックチェーンとは"
            >
              <>
                <List link="/content.html?chapter=1&section=1">
                  ブロックチェーンってなに？
                </List>
                <List link="/content.html?chapter=1&section=2">歴史</List>
                <List link="/content.html?chapter=1&section=3">
                  ブロックチェーンの長所
                </List>
                <List link="/content.html?chapter=1&section=4">
                  {lang === "ja"
                    ? "サトシ・ナカモトの正体"
                    : lang === "en"
                    ? "Who is Satoshi Nakamoto?"
                    : ""}
                </List>
                <List link="/content.html?chapter=1&section=4">まとめ</List>
              </>
            </Element>
            <Element link="/content.html?chapter=2&section=0" title="基礎技術">
              <>
                <List link="/content.html?chapter=2&section=1">
                  Peer to Peer（P2P）
                </List>
                <List link="/content.html?chapter=2&section=2">
                  ハッシュ関数
                </List>
                <List link="/content.html?chapter=2&section=3">
                  公開鍵暗号方式
                </List>
                <List link="/content.html?chapter=2&section=4">
                  デジタル署名
                </List>
                <List link="/content.html?chapter=2&section=5">まとめ</List>
              </>
            </Element>
            <Element link="/content.html?chapter=3&section=0" title="仕組み">
              <>
                <List link="/content.html?chapter=3&section=1">
                  ブロックチェーンの基本構造
                </List>
                <List link="/content.html?chapter=3&section=2">処理の流れ</List>
                <List link="/content.html?chapter=3&section=3">改ざん検知</List>
                <List link="/content.html?chapter=3&section=4">
                  コンセンサス・アルゴリズム（1）
                </List>
                <List link="/content.html?chapter=3&section=5">
                  コンセンサス・アルゴリズム（2）
                </List>
                <List link="#">まとめ</List>
              </>
            </Element>
            <Element link="/content.html?chapter=4&section=0" title="活用例">
              <>
                <List link="/content.html?chapter=4&section=1">仮想通貨</List>
                <List link="/content.html?chapter=4&section=2">
                  スマートコントラクト
                </List>
                <List link="/content.html?chapter=4&section=3">NFT</List>
                <List link="/content.html?chapter=4&section=4">メタバース</List>
                <List link="/content.html?chapter=4&section=5">まとめ</List>
              </>
            </Element>
            <Element
              link="/content.html?chapter=5&section=0"
              title="企業の取り組み"
            >
              <>
                <List link="/content.html?chapter=5&section=1">ゲーム</List>
                <List link="/content.html?chapter=5&section=2">環境保護</List>
                <List link="/content.html?chapter=5&section=3">
                  サプライチェーン
                </List>
                <List link="/content.html?chapter=5&section=4">
                  番外編：高校生web3質問会
                </List>
                <List link="/content.html?chapter=5&section=5">まとめ</List>
              </>
            </Element>

            <Element link="#" title="その他">
              <>
                <List link="/blockchain-sample.html">
                  ブロックチェーンサンプル
                </List>
                <List link="/content.html?chapter=6&section=0">総まとめ</List>
                <List link="/conclude.html">最後に</List>
              </>
            </Element>

            <Element link="/info.html" title="サイト情報">
              <>
                <List link="/creators.html">制作者紹介</List>
                <List link="/reference.html">参考文献</List>
                <List link="/activity.html">活動情報</List>
                <List link="#">サイトマップ</List>
              </>
            </Element>
          </div>
        </Main>
      </Drawer>
    </>
  );
};

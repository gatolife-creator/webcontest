import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";

export const Sitemap = () => {
  const Element = (props: { title: string; children?: JSX.Element }) => (
    <div className="mx-auto w-4/5 sm:w-[400px] lg:w-[300px]">
      <div className="my-7 bg-primary px-3 py-2 text-lg font-bold">
        {props.title}
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
          <SectionTitle>サイトマップ</SectionTitle>
          <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
            <Element title="ブロックチェーンとは">
              <>
                <List link="#">ブロックチェーンって何？</List>
                <List link="#">歴史</List>
                <List link="#">まとめ</List>
              </>
            </Element>
            <Element title="基礎技術">
              <>
                <List link="#">Peer to Peer（P2P）</List>
                <List link="#">ハッシュ関数</List>
                <List link="#">公開鍵暗号方式</List>
                <List link="#">デジタル署名</List>
                <List link="#">まとめ</List>
              </>
            </Element>
            <Element title="仕組み">
              <>
                <List link="#">基本構造</List>
                <List link="#">まとめ</List>
              </>
            </Element>
            <Element title="活用例">
              <>
                <List link="#">仮想通貨</List>
                <List link="#">スマートコントラクト</List>
                <List link="#">まとめ</List>
              </>
            </Element>
            <Element title="ブロックチェーンの今後">
              <>
                <List link="#">金融</List>
                <List link="#">IoT</List>
                <List link="#">教育</List>
                <List link="#">ゲーム</List>
                <List link="#">環境保護</List>
                <List link="#">まとめ</List>
              </>
            </Element>

            <Element title="その他">
              <>
                <List link="#">スペシャルサンクス</List>
                <List link="#">参考文献</List>
                <List link="#">制作者紹介</List>
                <List link="#">サイトマップ</List>
              </>
            </Element>
          </div>
        </Main>
      </Drawer>
    </>
  );
};

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
                <List link="/content.html?chapter=1&section=1">
                  ブロックチェーンって何？
                </List>
                <List link="/content.html?chapter=1&section=2">歴史</List>
                <List link="/content.html?chapter=1&section=3">
                  ブロックチェーンの長所
                </List>
                <List link="/content.html?chapter=1&section=3">まとめ</List>
              </>
            </Element>
            <Element title="基礎技術">
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
            <Element title="仕組み">
              <>
                <List link="/content.html?chapter=3&section=1">
                  ブロックチェーンの基本構造
                </List>
                <List link="/content.html?chapter=3&section=2">処理の流れ</List>
                <List link="/content.html?chapter=3&section=3">改ざん検知</List>
                <List link="/content.html?chapter=3&section=4">
                  コンセンサスアルゴリズム
                </List>
                <List link="#">まとめ</List>
              </>
            </Element>
            <Element title="活用例">
              <>
                <List link="/content.html?chapter=4&section=1">仮想通貨</List>
                <List link="/content.html?chapter=4&section=2">
                  スマートコントラクト
                </List>
                <List link="/content.html?chapter=4&section=3">まとめ</List>
              </>
            </Element>
            <Element title="ブロックチェーンの今後">
              <>
                <List link="/content.html?chapter=5&section=1">金融</List>
                <List link="/content.html?chapter=5&section=2">IoT</List>
                <List link="/content.html?chapter=5&section=3">教育</List>
                <List link="/content.html?chapter=5&section=4">ゲーム</List>
                <List link="/content.html?chapter=5&section=5">環境保護</List>
                <List link="/content.html?chapter=5&section=6">まとめ</List>
              </>
            </Element>

            <Element title="その他">
              <>
                <List link="#">スペシャルサンクス</List>
                <List link="/reference.html">参考文献</List>
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

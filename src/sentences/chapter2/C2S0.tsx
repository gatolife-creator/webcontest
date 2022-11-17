import React from "react";
import { Link } from "react-router-dom";

import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";

export const C2S0 = () => {
  const List = (props: { link: string; children: string }) => (
    <li className="list-inside list-disc indent-4">
      <Link className="link-hover" to={props.link}>
        {props.children}
      </Link>
    </li>
  );

  return (
    <Main duration="long">
      <MiniSectionTitle>基礎技術</MiniSectionTitle>
      <>
        <List link="/content.html?chapter=2&section=1">
          Peer to Peer（P2P）
        </List>
        <List link="/content.html?chapter=2&section=2">ハッシュ関数</List>
        <List link="/content.html?chapter=2&section=3">公開鍵暗号方式</List>
        <List link="/content.html?chapter=2&section=4">デジタル署名</List>
        <List link="/content.html?chapter=2&section=5">まとめ</List>
      </>

      <Pager
        direction="back"
      />
      <Pager
        direction="forward"
      />
    </Main>
  );
};

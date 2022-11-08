import React from "react";
import { Link } from "react-router-dom";

import { SectionTitle } from "../../components/SectionTitle";
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
    <Main>
      <SectionTitle>目次</SectionTitle>
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
        text="第三節"
        link="/content.html?chapter=1&section=3"
      />
      <Pager
        direction="forward"
        text="第一節"
        link="/content.html?chapter=2&section=1"
      />
    </Main>
  );
};

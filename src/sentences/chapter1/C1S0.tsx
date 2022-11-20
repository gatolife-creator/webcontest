import React from "react";
import { Link } from "react-router-dom";

import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C1S0 = () => {
  const List = (props: { link: string; children: string }) => (
    <li className="list-inside list-disc indent-4">
      <Link className="link-hover" to={props.link}>
        {props.children}
      </Link>
    </li>
  );

  return (
    <Main duration="long">
      <MiniSectionTitle>ブロックチェーンとは</MiniSectionTitle>
      <>
        <List link="/content.html?chapter=1&section=1">
          ブロックチェーンってなに？
        </List>
        <List link="/content.html?chapter=1&section=2">歴史</List>
        <List link="/content.html?chapter=1&section=3">
          ブロックチェーンの長所
        </List>
        <List link="/content.html?chapter=1&section=4">まとめ</List>
      </>

      <Pager direction="back" link="/" />
      <Pager direction="forward" link="/content.html?chapter=1&section=1" />
    </Main>
  );
};

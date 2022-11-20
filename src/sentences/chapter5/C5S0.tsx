import React from "react";
import { Link } from "react-router-dom";

import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";

export const C5S0 = () => {
  const List = (props: { link: string; children: string }) => (
    <li className="list-inside list-disc indent-4">
      <Link className="link-hover" to={props.link}>
        {props.children}
      </Link>
    </li>
  );

  return (
    <Main duration="long">
      <MiniSectionTitle>企業の取り組み</MiniSectionTitle>
      <>
        <List link="/content.html?chapter=5&section=1">ゲーム</List>
        <List link="/content.html?chapter=5&section=2">環境対策</List>
        <List link="/content.html?chapter=5&section=3">サプライチェーン</List>
        <List link="/content.html?chapter=5&section=4">まとめ</List>
      </>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

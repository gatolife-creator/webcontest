import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C3S0 = () => {
  const List = (props: { link: string; children: string }) => (
    <li className="list-inside list-disc indent-4">
      <Link className="link-hover" to={props.link}>
        {props.children}
      </Link>
    </li>
  );
  return (
    <Main duration="long">
      <MiniSectionTitle>仕組み</MiniSectionTitle>
      <>
        <List link="/content.html?chapter=3&section=1">
          ブロックチェーンの構造
        </List>
        <List link="/content.html?chapter=3&section=2">処理の流れ</List>
        <List link="/content.html?chapter=3&section=3">改ざん検知</List>
        <List link="/content.html?chapter=3&section=4">
          コンセンサス・アルゴリズム（1）
        </List>
        <List link="/content.html?chapter=3&section=5">
          コンセンサス・アルゴリズム（2）
        </List>
        <List link="/content.html?chapter=3&section=6">
          まとめ
        </List>
      </>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

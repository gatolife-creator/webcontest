import React from "react";
import { Link } from "react-router-dom";

import { SectionTitle } from "../../components/SectionTitle";
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
    <Main>
      <SectionTitle>目次</SectionTitle>
      <>
        <List link="/content.html?chapter=5&section=1">金融</List>
        <List link="/content.html?chapter=5&section=2">環境対策</List>
        <List link="/content.html?chapter=5&section=3">教育</List>
        <List link="/content.html?chapter=5&section=4">ゲーム</List>
        <List link="/content.html?chapter=5&section=5">IoT</List>
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

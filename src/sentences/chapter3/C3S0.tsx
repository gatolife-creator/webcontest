import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";

export const C3S0 = () => {
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
        <List link="/content.html?chapter=3&section=1">
          ブロックチェーンの構造
        </List>
        {/* <List link="/content.html?chapter=3&section=2"></List>
        <List link="/content.html?chapter=3&section=3"></List> */}
      </>
      <Pager direction="back" text="はじめに" link="/" />
      <Pager
        direction="forward"
        text="第三節"
        link="/content.html?chapter=3&section=1"
      />
    </Main>
  );
};

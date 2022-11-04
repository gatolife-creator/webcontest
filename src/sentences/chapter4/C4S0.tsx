import React from "react";
import { Link } from "react-router-dom";

import { SectionTitle } from "../../components/SectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";

export const C4S0 = () => {
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
        <List link="/content.html?chapter=4&section=1">仮想通貨</List>
        <List link="/content.html?chapter=4&section=2">
          スマートコントラクト
        </List>
      </>

      <Pager
        direction="back"
        text="第三節"
        link="/content.html?chapter=3&section=1"
      />
      <Pager
        direction="forward"
        text="第一節"
        link="/content.html?chapter=4&section=1"
      />
    </Main>
  );
};

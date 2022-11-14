import React from "react";
import { Link } from "react-router-dom";

import { MiniSectionTitle } from "../../components/MiniSectionTitle";
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
      <MiniSectionTitle>活用例</MiniSectionTitle>
      <>
        <List link="/content.html?chapter=4&section=1">仮想通貨</List>
        <List link="/content.html?chapter=4&section=2">
          スマートコントラクト
        </List>
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

import React from "react";
import { Link } from "react-router-dom";

import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Balloon } from "../../components/Balloon";

export const C4S0 = () => {
  const List = (props: { link: string; children: string }) => (
    <li className="list-inside list-disc indent-4">
      <Link className="link-hover" to={props.link}>
        {props.children}
      </Link>
    </li>
  );

  return (
    <Main duration="long">
      <MiniSectionTitle>活用例</MiniSectionTitle>
      <Balloon char="node">
        今回は、ブロックチェーンがどのような技術に使われているかを見ていこう。
      </Balloon>
      <>
        <List link="/content.html?chapter=4&section=1">仮想通貨</List>
        <List link="/content.html?chapter=4&section=2">
          スマート・コントラクト
        </List>
        <List link="/content.html?chapter=4&section=3">NFT</List>
        <List link="/content.html?chapter=4&section=4">メタバース</List>
      </>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

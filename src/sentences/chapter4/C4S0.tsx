import React from "react";
import { Link } from "react-router-dom";

import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Balloon } from "../../components/Balloon";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C4S0 = () => {
  const lang = useRecoilValue(langState);
  const List = (props: { link: string; children: string }) => (
    <li className="list-inside list-disc indent-4">
      <Link className="link-hover" to={props.link}>
        {props.children}
      </Link>
    </li>
  );

  return (
    <Main duration="long">
      <Crumb chapter={4} section={0} />
      <MiniSectionTitle>
        {lang === "ja" && "活用例"}
        {lang === "en" && "Usage"}
      </MiniSectionTitle>
      <Balloon char="node">
        {lang === "ja" &&
          "今回は、ブロックチェーンがどのような技術に使われているかを見ていこう。"}
        {lang === "en" &&
          "In this lecture, we will look at how blockchain is used in technology."}
      </Balloon>
      <>
        <List link="/content.html?chapter=4&section=1">
          {lang === "ja" ? "仮想通貨" : lang === "en" ? "Cryptocurrency" : ""}
        </List>
        <List link="/content.html?chapter=4&section=2">
          {lang === "ja"
            ? "スマート・コントラクト"
            : lang === "en"
            ? "Smart Contract"
            : ""}
        </List>
        <List link="/content.html?chapter=4&section=3">NFT</List>
        <List link="/content.html?chapter=4&section=4">
          {lang === "ja" ? "メタバース" : lang === "en" ? "Metaverse" : ""}
        </List>
        <List link="/content.html?chapter=4&section=5">
          {lang === "ja" ? "まとめ" : lang === "en" ? "Summary" : ""}
        </List>
      </>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

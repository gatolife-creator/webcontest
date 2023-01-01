import React from "react";
import { Link } from "react-router-dom";

import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const C1S0 = () => {
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
      <MiniSectionTitle>
        {lang === "ja" && "ブロックチェーンとは"}
        {lang === "en" && "What is Blockchain?"}
      </MiniSectionTitle>
      <>
        <List link="/content.html?chapter=1&section=1">
          {lang === "ja"
            ? "ブロックチェーンってなに？"
            : lang === "en"
            ? "What is Blockchain?"
            : ""}
        </List>
        <List link="/content.html?chapter=1&section=2">
          {lang === "ja" ? "歴史" : lang === "en" ? "History" : ""}
        </List>
        <List link="/content.html?chapter=1&section=3">
          {lang === "ja"
            ? "ブロックチェーンの長所"
            : lang === "en"
            ? "Advantages of Blockchain"
            : ""}
        </List>
        <List link="/content.html?chapter=1&section=4">
          {lang === "ja"
            ? "サトシ・ナカモトの正体"
            : lang === "en"
            ? "Who is Satoshi Nakamoto?"
            : ""}
        </List>
        <List link="/content.html?chapter=1&section=5">
          {lang === "ja" ? "まとめ" : lang === "en" ? "Summary" : ""}
        </List>
      </>

      <Pager direction="back" link="/" />
      <Pager direction="forward" link="/content.html?chapter=1&section=1" />
    </Main>
  );
};

import React from "react";
import { Link } from "react-router-dom";

import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C5S0 = () => {
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
      <Crumb chapter={5} section={0} />
      <MiniSectionTitle>
        {lang === "ja" && "企業の取り組み"}
        {lang === "en" && "Companies"}
      </MiniSectionTitle>
      <>
        <List link="/content.html?chapter=5&section=1">
          {lang === "ja" ? "ゲーム" : lang === "en" ? "Game" : ""}
        </List>
        <List link="/content.html?chapter=5&section=2">
          {lang === "ja"
            ? "環境対策"
            : lang === "en"
            ? "Environmental measures"
            : ""}
        </List>
        <List link="/content.html?chapter=5&section=3">
          {lang === "ja"
            ? "サプライチェーン"
            : lang === "en"
            ? "Supply chain"
            : ""}
        </List>
        <List link="/content.html?chapter=5&section=4">
          {lang === "ja"
            ? "番外編：高校生web3質問会"
            : lang === "en"
            ? "Spin-off: High School Student Web3 Question-and-answer Session"
            : ""}
        </List>
        <List link="/content.html?chapter=5&section=5">
          {lang === "ja" ? "まとめ" : lang === "en" ? "Summary" : ""}
        </List>
      </>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

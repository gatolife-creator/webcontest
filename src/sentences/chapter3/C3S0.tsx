import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";
import { Crumb } from "../../components/Crumb";

export const C3S0 = () => {
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
      <Crumb chapter={3} section={0} />
      <MiniSectionTitle>
        {lang === "ja" ? "仕組み" : lang === "en" ? "Mechanism" : ""}
      </MiniSectionTitle>
      <>
        <List link="/content.html?chapter=3&section=1">
          {lang === "ja" ? "基本構造" : lang === "en" ? "Basic Structure" : ""}
        </List>
        <List link="/content.html?chapter=3&section=2">
          {lang === "ja" ? "処理の流れ" : lang === "en" ? "Process Flow" : ""}
        </List>
        <List link="/content.html?chapter=3&section=3">
          {lang === "ja"
            ? "改ざん検知"
            : lang === "en"
            ? "Tamper Detection"
            : ""}
        </List>
        <List link="/content.html?chapter=3&section=4">
          {lang === "ja"
            ? "コンセンサス・アルゴリズム（1）"
            : lang === "en"
            ? "Consensus Algorithm (1)"
            : ""}
        </List>
        <List link="/content.html?chapter=3&section=5">
          {lang === "ja"
            ? "コンセンサス・アルゴリズム（2）"
            : lang === "en"
            ? "Consensus Algorithm (2)"
            : ""}
        </List>
        <List link="/content.html?chapter=3&section=6">
          {lang === "ja" ? "まとめ" : lang === "en" ? "Summary" : ""}
        </List>
      </>
      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

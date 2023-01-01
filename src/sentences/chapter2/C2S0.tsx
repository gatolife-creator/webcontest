import React from "react";
import { Link } from "react-router-dom";

import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const C2S0 = () => {
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
        {lang === "ja" && "基礎技術"}
        {lang === "en" && "Basic Technologies"}
      </MiniSectionTitle>
      <>
        <List link="/content.html?chapter=2&section=1">
          Peer to Peer（P2P）
        </List>
        <List link="/content.html?chapter=2&section=2">
          {lang === "ja"
            ? "ハッシュ関数"
            : lang === "en"
            ? "Hash Functions"
            : ""}
        </List>
        <List link="/content.html?chapter=2&section=3">
          {lang === "ja"
            ? "公開鍵暗号方式"
            : lang === "en"
            ? "Public Key Cryptography"
            : ""}
        </List>
        <List link="/content.html?chapter=2&section=4">
          {lang === "ja"
            ? "デジタル署名"
            : lang === "en"
            ? "Digital Signature"
            : ""}
        </List>
        <List link="/content.html?chapter=2&section=5">
          {lang === "ja" ? "まとめ" : lang === "en" ? "Summary" : ""}
        </List>
      </>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

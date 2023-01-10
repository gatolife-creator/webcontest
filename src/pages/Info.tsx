import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Pager } from "../components/Pager";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Info = () => {
  const lang = useRecoilValue(langState);
  if (lang === "ja") {
    document.title = "サイト情報|ブロックチェーン入門";
  } else if (lang === "en") {
    document.title = "Info|Blockchain World";
  }
  const List = (props: { link: string; children: string }) => (
    <li className="list-inside list-disc indent-4">
      <Link className="link-hover" to={props.link}>
        {props.children}
      </Link>
    </li>
  );
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>
            {lang === "ja" && "サイト情報"}
            {lang === "en" && "Info"}
          </MiniSectionTitle>
          <List link="/creators.html">
            {lang === "ja" ? "制作者紹介" : "Creators introduction"}
          </List>
          <List link="/reference.html">
            {lang === "ja" ? "参考文献" : "References"}
          </List>
          <List link="/activity.html">
            {lang === "ja" ? "活動内容" : "Activities"}
          </List>
          <List link="/sitemap.html">
            {lang === "ja" ? "サイトマップ" : "Site Map"}
          </List>
          <Pager
            direction="back"
            link="/conclude.html"
            text={lang === "ja" ? "最後に" : "Epilogue"}
          />
          <Pager
            direction="forward"
            link="/creators.html"
            text={lang === "ja" ? "制作者紹介" : "Creators"}
          />
        </Main>
      </Drawer>
    </>
  );
};

import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Sum } from "../components/Sum";
import { Pager } from "../components/Pager";

export const Info = () => {
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
          <MiniSectionTitle>サイト情報</MiniSectionTitle>
          <List link="/creators.html">制作者紹介</List>
          <List link="/reference.html">参考文献</List>
          <List link="/activity.html">活動内容</List>
          <List link="/sitemap.html">サイトマップ</List>

          <Pager direction="back" link="/conclude.html" text="最後に" />
          <Pager direction="forward" link="/creators.html" text="制作者紹介" />
        </Main>
      </Drawer>
    </>
  );
};

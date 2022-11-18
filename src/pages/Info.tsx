import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Sum } from "../components/Sum";

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
          <List link="/reference.html">参考文献</List>
          <List link="/creators.html">制作者紹介</List>
          <List link="/sitemap.html">サイトマップ</List>
        </Main>
      </Drawer>
    </>
  );
};

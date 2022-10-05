import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";

export const C3S0 = () => {
  return (
    <Main>
      <SectionTitle>目次</SectionTitle>
      <ul>
        <li>
          <Link to="/content.html?chapter=3&section=1" className="underline">
            第一節　金融
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=3&section=2" className="underline">
            第二節　NFT
          </Link>
        </li>
        <li>
          <Link to="/content.html?chapter=3&section=3" className="underline">
            第三節　組織運営
          </Link>
        </li>
      </ul>
      <Pager direction="back" text="はじめに" link="/" />
      <Pager
        direction="forward"
        text="第三節"
        link="/content.html?chapter=3&section=1"
      />
    </Main>
  );
};

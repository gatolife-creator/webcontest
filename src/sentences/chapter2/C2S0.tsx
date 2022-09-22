import React from "react";
import { Link } from "react-router-dom";

import { SectionTitle } from "../../components/SectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";

export const C2S0 = () => {
  return (
    <Main>
      <SectionTitle>目次</SectionTitle>
      <ul>
        <li>
          <Link to="/content.html?chapter=2&section=1" className="underline">
            第一節　仮想通貨の概要
          </Link>
        </li>
      </ul>
      <Pager
        direction="back"
        text="第三節"
        link="/content.html?chapter=1&section=3"
      />
      <Pager
        direction="forward"
        text="第一節"
        link="/content.html?chapter=2&section=1"
      />
    </Main>
  );
};

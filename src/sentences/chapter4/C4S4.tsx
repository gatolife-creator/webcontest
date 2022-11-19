import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Balloon } from "../../components/Balloon";
import { Link } from "react-router-dom";
import { Important } from "../../components/Important";

export const C4S4 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>メタバース</MiniSectionTitle>

        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

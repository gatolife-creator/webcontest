import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C3S3 = () => {
  return (
    <Main>
      <MiniSectionTitle>改ざん検知</MiniSectionTitle>

      <Pager direction="back" />
      <Pager direction="forward" />
    </Main>
  );
};

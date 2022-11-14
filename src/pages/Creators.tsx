import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";

export const Creators = () => {
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>制作者紹介</MiniSectionTitle>
          <h2 className="mb-3 text-2xl">がとらいふ（リーダー）</h2>
          <p className="mb-10">
            猫好きだが猫アレルギー。ブロックチェーンに関心があり、皆に魅力を知ってもらいたいと思っている。
            <br />
            コーディングや文章原案を担当。
          </p>

          <h2 className="mb-3 text-2xl">メルクル（作図・添削）</h2>
          <p>
            最近自転車にはまってます。
            <br />
            図の作成、文章の添削を担当。
          </p>
        </Main>
      </Drawer>
    </>
  );
};

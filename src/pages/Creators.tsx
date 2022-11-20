import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { Link } from "react-router-dom";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Pager } from '../components/Pager';

export const Creators = () => {
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>制作者紹介</MiniSectionTitle>
          <h2 className="mb-3 text-2xl">がとらいふ（リーダー）</h2>
          <p className="mb-10">
            猫好きだが猫アレルギー。猫にならび、ブロックチェーンが大好き。
            <br />
            コーディングや文章原案を担当。
          </p>

          <h2 className="mb-3 text-2xl">メルクル</h2>
          <p className="mb-10">
            最近自転車にはまってます。
            <br />
            図の作成、文章の添削を担当。
          </p>

          <h2 className="mb-3 text-2xl">宇宙外生命体</h2>
          <p className="mb-10">
            宇宙外からきたので人間とはあまり馴染めない。
            <br />
            最近は小さな箱型の機械にハマっている。
            <br />
            声量が大きいので近づくことなかれ。
            <br />
            キャラクターデザインを担当。
          </p>

          <h2 className="mb-3 text-2xl">ふぉくしー</h2>
          <p className="mb-10">
            早く友達と旅行行きたいです。
            <br />
            サイトデザインの監督を担当。
          </p>
          <Pager direction="back" link="/info.html" text="サイト情報" />
          <Pager direction="forward" link="/reference.html" text="参考文献" />
        </Main>
      </Drawer>
    </>
  );
};

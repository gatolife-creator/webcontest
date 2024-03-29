import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Drawer } from "../components/Drawer";

import { C1S0 } from "../sentences/chapter1/C1S0";
import { C1S1 } from "../sentences/chapter1/C1S1";
import { C1S2 } from "../sentences/chapter1/C1S2";
import { C1S3 } from "../sentences/chapter1/C1S3";
import { C1S4 } from "../sentences/chapter1/C1S4";

import { C2S0 } from "../sentences/chapter2/C2S0";
import { C2S1 } from "../sentences/chapter2/C2S1";
import { C2S2 } from "../sentences/chapter2/C2S2";
import { C2S3 } from "../sentences/chapter2/C2S3";
import { C2S4 } from "../sentences/chapter2/C2S4";
import { C2S5 } from "../sentences/chapter2/C2S5";

import { C3S0 } from "../sentences/chapter3/C3S0";
import { C3S1 } from "../sentences/chapter3/C3S1";
import { C3S2 } from "../sentences/chapter3/C3S2";
import { C3S3 } from "../sentences/chapter3/C3S3";
import { C3S4 } from "../sentences/chapter3/C3S4";
import { C3S5 } from "../sentences/chapter3/C3S5";
import { C3S6 } from "../sentences/chapter3/C3S6";

import { C4S0 } from "../sentences/chapter4/C4S0";
import { C4S1 } from "../sentences/chapter4/C4S1";
import { C4S2 } from "../sentences/chapter4/C4S2";
import { C4S3 } from "../sentences/chapter4/C4S3";
import { C4S4 } from "../sentences/chapter4/C4S4";
import { C4S5 } from "../sentences/chapter4/C4S5";

import { C5S0 } from "../sentences/chapter5/C5S0";
import { C5S1 } from "../sentences/chapter5/C5S1";
import { C5S2 } from "../sentences/chapter5/C5S2";
import { C5S3 } from "../sentences/chapter5/C5S3";
import { C5S4 } from "../sentences/chapter5/C5S4";
import { C5S5 } from "../sentences/chapter5/C5S5";

import { C6S0 } from "../sentences/chapter6/C6S0";

import { Main } from "../components/Main";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const pages: React.ReactElement[][] = [
  [],
  [<C1S0 />, <C1S1 />, <C1S2 />, <C1S3 />, <C1S4 />],
  [<C2S0 />, <C2S1 />, <C2S2 />, <C2S3 />, <C2S4 />, <C2S5 />],
  [<C3S0 />, <C3S1 />, <C3S2 />, <C3S3 />, <C3S4 />, <C3S5 />, <C3S6 />],
  [<C4S0 />, <C4S1 />, <C4S2 />, <C4S3 />, <C4S4 />, <C4S5 />],
  [<C5S0 />, <C5S1 />, <C5S2 />, <C5S3 />, <C5S4 />, <C5S5 />],
  [<C6S0 />],
];

export const Content = () => {
  const lang = useRecoilValue(langState);
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const chapter = Number(query.get("chapter"));
  const section = Number(query.get("section"));

  if (lang === "ja") {
    document.title = `講義|ブロックチェーン入門`;
  } else if (lang === "en") {
    document.title = `Lecture|Blockchain World`;
  }

  return (
    <Drawer>
      {pages[chapter][section] ? (
        pages[chapter][section]
      ) : (
          <Main>
            <div className="bg-primary p-5">
              <h1 className="text-center text-5xl">Not Found</h1>
              <p className="mt-4 text-center text-sm underline">
                ページが見つかりませんでした。
            </p>
            </div>
          </Main>
        )}
    </Drawer>
  );
};

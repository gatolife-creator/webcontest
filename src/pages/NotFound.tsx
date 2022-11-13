import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";

export const NotFound = () => {
  return (
    <Drawer>
      <Main>
        <div className="bg-primary p-5">
          <h1 className="text-center text-5xl">Not Found</h1>
          <p className="mt-4 text-center text-sm underline">
            ページが見つかりませんでした。
          </p>
        </div>
      </Main>
    </Drawer>
  );
};

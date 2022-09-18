import React from "react";
import { Link } from "react-router-dom";
import { Drawer } from "../components/Drawer";

export const Home = () => {
  return (
    <>
      <Drawer>
        <main>
          <button type="button" className="btn btn-primary btn-outline">
            ボタン
          </button>
          <Link to="/content?chapter=2&section=1">C2S1</Link>
          <Link to="/test">test</Link>
        </main>
      </Drawer>
    </>
  );
};

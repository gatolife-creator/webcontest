import React from "react";
import { Drawer } from "../components/Drawer";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Drawer />
      <main>
        <button type="button" className="btn btn-primary btn-outline">
          ボタン
        </button>
      </main>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary p-10 text-primary-content">
      <div>
        <p className="font-bold">
          ブロックチェーン入門
          <small>〜ノード先生、ブロックチェーンってなんですか？〜</small>
          <br />
        </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4"></div>
      </div>
    </footer>
  );
};

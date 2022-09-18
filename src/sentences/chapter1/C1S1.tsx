import React from "react";
import { motion } from "framer-motion";

export const C1S1 = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="text-3xl font-bold underline">
          一節　ブロックチェーンの概要
        </h2>
        <ul>
          <li>ブロックチェーンの定義を一言でまとめる</li>
          <li>
            「ブロックチェーンにはさまざまな種類があるが、あえて言うなら」と前置きを入れる
          </li>
          <li>
            過去に行われたすべての取引データが、ブロックごとにまとめられて、各ブロックが一本の鎖のようにつながった分散型のデータベースである（言葉を変えないとパクリになる。イラストを使う。）
          </li>
          <li>上のイメージ画像を作成する</li>
          <li>「データベース」、「分散型」について述べる</li>
          <li>
            ＊データベース：情報（データ）を整理し、欲しいデータに簡単にアクセスできるようにした物。
          </li>
        </ul>
      </motion.main>
    </>
  );
};

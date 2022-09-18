import React from "react";
import { Balloon } from "../../components/Balloon";

export const C1S2 = () => {
  return (
    <>
      <h2 className="text-3xl font-bold underline">
        二節　ブロックチェーンの用途・長所
      </h2>
      <h3>管理者となる中央機関が存在しない</h3>
      <p>
        これまでのお金の取引は、政府や中央銀行、民間の銀行などの中央管理者（信頼できる管理者）によって不正がないことが保証されていました。
        <br />
        一方で、ブロックチェーンを使用することで、そのような中央管理者無くして、ブロックチェーンの参加者のみで不正がないことを確かめることができるようになったのです。
      </p>
      <Balloon direction="left">
        つまり、ブロックチェーンが国の「信用力（貨幣の価値の強制力的な）」と金融機関の「仲介業務」を担ってくれているんですね！　（ブロックチェーン×エネルギービジネスから引用）
      </Balloon>
      <Balloon direction="right">いい例えだ</Balloon>
    </>
  );
};

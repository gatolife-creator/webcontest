import React, { useState } from "react";
import { SHA256 } from "crypto-js";

export const OptionalHash = () => {
  const [hash, setHash] = useState("");
  const handleChange = (e: any) => {
    setHash(SHA256((e.target as HTMLInputElement).value).toString());
  };
  return (
    <>
      <input
        type="text"
        placeholder="好きな文字列を入力してください。"
        className="input input-bordered input-primary w-full max-w-xs mb-5"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <output>ハッシュ値：{hash}</output>
      <br />
      <output>文字数：{hash.length}</output>
    </>
  );
};

import React, { useState } from "react";
import { SHA1 } from "crypto-js";

export const OptionalHash = () => {
  const [hash, setHash] = useState("");
  const handleChange = (e: any) => {
    setHash(SHA1((e.target as HTMLInputElement).value).toString());
  };
  return (
    <div className="border-2 border-dashed border-black p-5">
      <input
        type="text"
        placeholder="好きな文字列を入力してください。"
        className="input input-bordered input-primary w-full max-w-xs mb-5"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <div className="badge badge-lg badge-primary mr-3">ハッシュ値</div>
      <p className="truncate">{hash}</p>
      <br />
      <div className="badge badge-lg badge-primary mr-3">文字数</div>
      <p className="truncate">{hash.length}</p>
    </div>
  );
};

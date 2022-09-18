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
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => handleChange(e)}
      />
      <output>{hash}</output>
    </>
  );
};

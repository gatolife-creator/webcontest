import React, { useState, useEffect } from "react";
import { SHA1 } from "crypto-js";
import { useRecoilValue } from "recoil";
import { langState } from "../../atom";

export const OptionalHash = () => {
  const lang = useRecoilValue(langState);
  const [hash, setHash] = useState("");
  const handleChange = (e: any) => {
    setHash(SHA1((e.target as HTMLInputElement).value).toString());
  };

  useEffect(() => {
    setHash(SHA1("").toString());
  }, []);

  return (
    <div className="border-2 border-dashed border-black p-5">
      <input
        type="text"
        placeholder={
          lang === "ja"
            ? "好きな文字列を入力してください。"
            : lang === "en"
            ? "Enter any string you like."
            : ""
        }
        className="input-bordered input-primary input mb-5 w-full max-w-xs"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <div className="badge-primary badge badge-lg mr-3">
        {lang === "ja" && "ハッシュ値"}
        {lang === "en" && "Hash value"}
      </div>
      <p className="truncate">{hash}</p>
      <br />
      <div className="badge-primary badge badge-lg mr-3">
        {lang === "ja" && "文字数"}
        {lang === "en" && "Number of characters"}
      </div>
      <p className="truncate">{hash.length}</p>
    </div>
  );
};

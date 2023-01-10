import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const titles = [
  [],
  [
    "ブロックチェーンとは",
    "ブロックチェーンってなに？",
    "ブロックチェーンの歴史",
    "ブロックチェーンの長所",
    "まとめ",
  ],
  [
    "基礎技術",
    "Peer to Peer（P2P）",
    "ハッシュ関数",
    "公開鍵暗号方式",
    "デジタル署名",
    "まとめ",
  ],
  [
    "仕組み",
    "基本構造",
    "処理の流れ",
    "改ざん検知",
    "コンセンサス・アルゴリズム（1）",
    "コンセンサス・アルゴリズム（2）",
    "まとめ",
  ],
  [
    "活用例",
    "仮想通貨",
    "スマート・コントラクト",
    "NFT",
    "メタバース",
    "まとめ",
  ],
  [
    "企業の取り組み",
    "ゲーム",
    "環境対策",
    "サプライチェーン",
    "番外編：高校生web3質問会",
    "まとめ",
  ],
  ["総まとめ"],
];

export const titlesEN = [
  [],
  [
    "About Blockchain",
    "What is Blockchain?",
    "The history of blockchain",
    "Advantages of Blockchain",
    "Summary",
  ],
  [
    "Basic Technologies",
    "Peer to Peer（P2P）",
    "Hash Functions",
    "Public Key Cryptography",
    "Digital Signature",
    "Summary",
  ],
  [
    "Mechanism",
    "Basic Structure",
    "Process Flow",
    "Tamper Detection",
    "Consensus Algorithm (1)",
    "Consensus Algorithm (2)",
    "Summary",
  ],
  ["Usage", "Cryptocurrency", "Smart Contract", "NFT", "Metaverse", "Summary"],
  [
    "Companies",
    "Game",
    "Environmental Measures",
    "Supply Chain",
    "Spin-off",
    "Summary",
  ],
  ["Conclusion"],
];

export const Crumb = ({
  chapter,
  section,
}: {
  chapter: number;
  section: number;
}) => {
  const lang = useRecoilValue(langState);
  return (
    <div className="w-full border-b-2 text-sm md:text-lg">
      {lang === "ja" && (
        <>
          <Link to="/" className="link-primary">
            ホーム
          </Link>
          {" > "}
          {section === 0 ? (
            <>
              <>{titles[chapter][section]}</>
            </>
          ) : (
              <>
                <Link
                  to={`/content.html?chapter=${chapter}&section=0`}
                  className="link-primary"
                >
                  {titles[chapter][0]}
                </Link>
                {" > "}
                <>{titles[chapter][section]}</>
              </>
            )}
        </>
      )}
      {lang === "en" && (
        <>
          <>
            <Link to="/" className="link-primary">
              Home
            </Link>
            {" > "}
            {section === 0 ? (
              <>
                <>{titlesEN[chapter][section]}</>
              </>
            ) : (
                <>
                  <Link
                    to={`/content.html?chapter=${chapter}&section=0`}
                    className="link-primary"
                  >
                    {titlesEN[chapter][0]}
                  </Link>
                  {" > "}
                  <>{titlesEN[chapter][section]}</>
                </>
              )}
          </>
        </>
      )}
    </div>
  );
};

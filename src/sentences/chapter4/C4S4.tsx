import React from "react";

import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";
import { Balloon } from "../../components/Balloon";
import { Important } from "../../components/Important";

export const C4S4 = () => {
  return (
    <>
      <Main duration="long">
        <MiniSectionTitle>メタバース</MiniSectionTitle>
        <Balloon char="nakamoto">
          メタバース？なんか聞いたことがあるような...。
        </Balloon>
        <Balloon char="node">
          うむ。確かに、ブロックチェーンに並んで話題となっているな。
        </Balloon>
        <Balloon char="nakamoto">
          メタバース。名前はかっこいいんですけど、どんなものかはよく知らないんですよね...。
        </Balloon>
        <Balloon char="node">
          一言でいえば、<Important>インターネット上の3D仮想空間</Important>。
        </Balloon>
        <Balloon char="node">
          仮想空間で他の人とコミュニケーションが取れるといった特徴がある。
        </Balloon>
        <Balloon char="nakamoto">
          それがブロックチェーンとどんな関係があるんですか？
        </Balloon>
        <Balloon char="node">ふっふっふ、それが最も面白いところ。</Balloon>
        <Balloon char="node">
          メターバースにNFTを活用するとどうなるか...。
        </Balloon>
        <Balloon char="nakamoto">
          NFTはデジタルデータを代替不可能なものにするから...。
        </Balloon>
        <Balloon char="nakamoto">
          まるで現実世界と同じように、数の限られているモノを売り買いできるようになるのか！
        </Balloon>
        <Balloon char="node">その通りだ。</Balloon>
        <Balloon char="node">
          この<Important>メタバース×ブロックチェーン</Important>
          の組み合わせは、様々な企業から注目を浴びている。
        </Balloon>

        <Balloon char="node">
          実際、Nikeが2022年4月、RTFKTと共同でNFTのスニーカーを作成、販売した。
        </Balloon>
        <Balloon char="nakamoto">あの有名スポーツブランドまでも！？</Balloon>
        <Balloon char="node">
          NFTマーケットプレイス<Important>OpenSea</Important>
          から、スニーカーのデザインやその他の情報がみれる。
        </Balloon>
        <Balloon char="node">
          興味があったら、下記リンクから見てみよう。
        </Balloon>
        <div className="text-right">
          <a
            href="https://opensea.io/collection/rtfkt-nike-cryptokicks"
            className="link-primary link"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://opensea.io/collection/rtfkt-nike-cryptokicks
          </a>
        </div>

        <Pager direction="back" />
        <Pager direction="forward" />
      </Main>
    </>
  );
};

import React from "react";
import { Balloon } from "../../components/Balloon";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Image } from "../../components/Image";
import { Important } from "../../components/Important";
import { Sum } from "../../components/Sum";
import { OptionalHash } from "../../sample/hash/OptionalHash";

export const C2S2 = () => {
  return (
    <Main>
      <MiniSectionTitle>ハッシュ関数</MiniSectionTitle>
      <p>
        ハッシュ関数は別名 <Important>要約関数</Important>
        とも呼ばれ、入力した値をもとにランダムに見える値を出力します。
        <br />
        また、ハッシュ関数には以下のような特徴があります。
      </p>
      <Sum>
        <li>
          入力した値の長さに関わらず、
          <Important>常に同じ長さの値を出力する</Important>。
        </li>
        <li>
          同じ値を入力すれば、
          <Important>常に同じ値が出力される</Important>。
        </li>
        <li>
          ハッシュ値から、<Important>元の値を復元することはできない</Important>
          。
        </li>
        なお、ハッシュ関数に値を入力することを<Important>ハッシュ化</Important>
        、ハッシュ関数によって出力された値のことを<Important>ハッシュ値</Important>
        と言います。
      </Sum>

      <Image src={process.env.PUBLIC_URL + "/imgs/hash-function.png"}></Image>

      <Balloon char="node">
        ハッシュ関数のサンプルも作っておきました。これで1と2の特徴を確かめることができます。
      </Balloon>

      <OptionalHash />

      <Balloon char="satoshi">
        それにしても、ハッシュ関数って一体なんの役に立つんですか？
      </Balloon>

      <Balloon char="node">
        うむ。いい質問だ。実は、<Important>改ざん検知</Important>や
        <Important>認証システム</Important>に活用されているのだよ。今回は、
        <Important>改ざん検知</Important>に焦点を当てるぞ。
      </Balloon>
      <Balloon char="node">
        まずは下の図を見てみよう。これはデータ送信の流れを簡略化した図だ。何の変哲もない図だが、ここには一つ問題がある。
      </Balloon>
      <Image src={process.env.PUBLIC_URL + "/imgs/data-sending.png"}></Image>
      <Balloon char="node">
        何も対策をしていなければ、データが改ざんされても、それを知る術はないのだ。
      </Balloon>
      <Image
        src={process.env.PUBLIC_URL + "/imgs/data-sending-with-tamper.png"}
      ></Image>
      <Balloon char="satoshi">
        もしも機密情報だったりしたら、大変ですね。
      </Balloon>

      <Balloon char="node">
        そこで、ハッシュ関数が役立つのだよ。まず、送信したいデータのハッシュ値をあらかじめ受信者に送信しておく。それからデータを送るのだ。その後、受信者側でそのデータのハッシュ値を求めたのちに、送信者から受け取っていたハッシュ値と照合することでデータが改ざんされているか否か、判断することができる。
      </Balloon>
      <Image
        src={
          process.env.PUBLIC_URL +
          "/imgs/data-sending-with-tamper-detection1.png"
        }
      ></Image>

      <Balloon char="node">
        では、このような対策をしている状態で、データの送信の際に改ざんされたらどうなるだろうか？
      </Balloon>

      <Balloon char="satoshi">
        データが改ざんされるとハッシュ値が変わるから、あらかじめ受け取ったハッシュ値と一致しない！だから改ざんされていることがわかるのか！
      </Balloon>

      <Balloon char="node">その通り！</Balloon>
      <Image
        src={
          process.env.PUBLIC_URL +
          "/imgs/data-sending-with-tamper-detection2.png"
        }
      ></Image>

      <Balloon char="node">まとめると、</Balloon>
      <Sum>
        <li>同じ値を入力すると、同じ値が出力される</li>
        <li>入力値が少し違うだけで、結果が大きく異なる。</li>
      </Sum>
      <Balloon char="node">
        この二つの特徴を利用して改ざんを検知しているのだ。
      </Balloon>
      <Pager
        direction="back"
      />
      <Pager
        direction="forward"
      />
    </Main>
  );
};

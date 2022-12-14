import React, { useState } from "react";
import Sketch from "react-p5";
import P5 from "p5";

import { Image } from "../components/Image";
import { SHA1 } from "crypto-js";
import { FaDownload } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";

export const Certificate = () => {
  const lang = useRecoilValue(langState);
  const [canvas, setCanvas] = useState<P5.Element>();
  const [url, setURL] = useState("");
  const [name, setName] = useState("");
  const [img, setImage] = useState<any>();

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    const { handleName } = e.target;
    setName(handleName.value);
    setTimeout(() => {
      if (canvas) {
        const canvasElem = canvas.elt as HTMLCanvasElement;
        setURL(canvasElem.toDataURL("image/png", 1));
      }
    }, 500);
  };

  const preload = (p5: P5) => {
    const img = p5.loadImage(
      (process.env.PUBLIC_URL + "imgs/certificate-image.png").replace(
        ".imgs",
        "imgs"
      )
    );
    setImage(img);
  };

  const setup = (p5: P5, canvasParentRef: Element) => {
    setCanvas(p5.createCanvas(1200, 900).parent(canvasParentRef));
    const children = canvasParentRef.children;
    if (children.length > 1) {
      for (let i = 1; i < children.length; i++) {
        children[i].remove();
      }
    }
    p5.frameRate(100);
  };

  const draw = (p5: P5) => {
    const now = new Date();

    p5.image(img, 0, 0);
    p5.textAlign(p5.CENTER);
    p5.textSize(60);
    p5.textStyle(p5.BOLD);
    p5.fill("black");
    p5.text(name + " 殿", p5.width / 2, p5.height * 0.45);

    p5.textSize(20);
    p5.text(
      "ニックネームのハッシュ値は： " + SHA1(name),
      p5.width / 2,
      p5.height * 0.5 + 25
    );

    p5.textSize(30);
    p5.text(
      `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`,
      p5.width * 0.2,
      p5.height * 0.85 - 10
    );
  };

  return (
    <>
      <Sketch
        className="certificate"
        // @ts-ignore
        preload={preload}
        // @ts-ignore
        setup={setup}
        // @ts-ignore
        draw={draw}
      />
      {name ? <Image src={url} style={{ width: "80%" }} /> : <></>}

      <div className="mx-auto my-5">
        <form className="input-group" onSubmit={(e) => onHandleSubmit(e)}>
          <input
            type="text"
            name="handleName"
            className="input-primary input block"
            placeholder={
              lang === "ja" ? "ニックネームを入力" : "Input your name"
            }
          />
          <button className="btn-primary btn">
            {lang === "ja" ? "決定" : "Confirm"}
          </button>
        </form>
        {name ? (
          <a
            href={url}
            className="btn-success btn mt-5 ml-auto text-right"
            download="認定証.png"
          >
            {lang === "ja" && "ダウンロード"}
            {lang === "en" && "Download"}
            <FaDownload fontSize={"large"} style={{ marginLeft: "0.5em" }} />
          </a>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

import React, { useState } from "react";
import Sketch from "react-p5";
import P5 from "p5";

import { Image } from "../components/Image";

export const Certificate = () => {
    const [canvas, setCanvas] = useState<P5.Element>();
    const [url, setURL] = useState("");
    const [name, setName] = useState("");

    const onHandleSubmit = (e: any) => {
        e.preventDefault();
        const { handleName } = e.target;
        setName(handleName.value);
    }
    //See annotations in JS for more information
    const setup = (p5: P5, canvasParentRef: Element) => {
        setCanvas(p5.createCanvas(600, 400).parent(canvasParentRef));
        const children = canvasParentRef.children;
        if (children.length > 1) {
            for (let i = 1; i < children.length; i++) {
                children[i].remove();
            }
        }
    };

    const draw = (p5: P5) => {
        if (canvas) {
            const canvasElem = canvas.elt as HTMLCanvasElement;
            setURL(canvasElem.toDataURL("image/png", 1));
        }
        p5.textAlign(p5.CENTER);
        p5.background(0);
        p5.fill("white");
        p5.textSize(25);
        p5.text(name, p5.width / 2, p5.height / 2);
    }

    return <>
        <Sketch className="certificate" setup={setup} draw={draw} />
        <Image src={url} style={{ width: "90%" }}></Image>
        <div className="mx-auto">
            <form className="input-group" onSubmit={(e) => onHandleSubmit(e)}>
                <input type="text" name="handleName" className="block input input-primary" placeholder="ニックネームを入力" />
                <button className="btn btn-square btn-primary">
                    決定
                </button>
            </form>
        </div>
    </>;
};
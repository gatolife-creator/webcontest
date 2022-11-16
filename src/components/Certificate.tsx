import React, { useState } from "react";
import Sketch from "react-p5";
import P5 from "p5"; //Import this for typechecking and intellisense

import { Image } from "../components/Image";

interface ComponentProps {
    //Your component props
}

let canvas;

export const Certificate: React.FC<ComponentProps> = (props: ComponentProps) => {
    const [url, setURL] = useState("");
    //See annotations in JS for more information
    const setup = (p5: P5, canvasParentRef: Element) => {
        canvas = p5.createCanvas(600, 400).parent(canvasParentRef);
        canvas.hide();
        const children = canvasParentRef.children;
        if (children.length > 1) {
            for (let i = 1; i < children.length; i++) {
                children[i].remove();
            }
        }
        p5.textAlign(p5.CENTER);
        p5.background(0);
        p5.fill("white");
        p5.textSize(25);
        p5.text("全クリ、おめ！", p5.width / 2, p5.height / 2);

        const canvasElem = canvas.elt as HTMLCanvasElement;

        setURL(canvasElem.toDataURL("image/png", 1));
        console.log(canvas.elt.toDataURL());
    };

    return <>
        <Sketch className="certificate" setup={setup} />
        <Image src={url}></Image>
    </>;
};
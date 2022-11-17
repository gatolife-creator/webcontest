import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Quiz, QuizGame } from "../../components/QuizGame";
import { Balloon } from "../../components/Balloon";
import { Sum } from "../../components/Sum";
import { Important } from "../../components/Important";

export const C3S6 = () => {
    const quizzes: Quiz[] = [
        {
            question: "ブロックの役割は？",
            options: ["トランザクションをまとめる", "個人情報を保護する", "特にない"],
            answer: "トランザクションをまとめる",
        },
        {
            question: "取引を承認するための仕組みのことをなんというか",
            options: [
                "コンセンサス・アルゴリズム",
                "ハッシュ関数",
                "デジタル署名",
                "P2P",
            ],
            answer: "コンセンサス・アルゴリズム",
        },
        {
            question: "PoWの問題点は？",
            options: ["電力を大量消費する", "カッコ悪い", "報酬が少ない"],
            answer: "電力を大量消費する",
        },
    ];
    return (
        <Main duration="long">
            <MiniSectionTitle>まとめ</MiniSectionTitle>
            <Balloon char="satoshi">
                う〜ん...。たくさん勉強しすぎて頭がクラクラしてきました...。
            </Balloon>
            <Balloon char="node">
                ブロックチェーンはたくさんの技術の結晶だ。無理もない。
            </Balloon>
            <Balloon char="node">最低限以下のことが抑えられて入ればOKだ。</Balloon>
            <Sum>
                <li>
                    改ざんは、<Important>前後のハッシュ値</Important>
                    の整合性が取れているかで検知できる。
                </li>
                <li>
                    ブロックを承認する仕組みのことを
                    <Important>コンセンサス・アルゴリズム</Important>という。
                </li>
                <li>
                    PoWにおいて、<Important>コンピューターの性能が高い</Important>
                    ほど、承認に成功する確率が高くなる。
                </li>
                <li>
                    PoSにおいて、<Important>通貨をたくさん保持している</Important>
                    ほど、承認に成功する確率が高くなる。
                </li>
            </Sum>
            <Balloon char="node">それでは、確認クイズに取り組んでくれ。</Balloon>
            <QuizGame quizzes={quizzes} chapter={3}></QuizGame>
            <Pager direction="back" />
            <Pager direction="forward" />
        </Main>
    );
};

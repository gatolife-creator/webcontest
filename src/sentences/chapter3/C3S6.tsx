import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { SubSectionTitle } from "../../components/SubSectionTitle";
import { Quiz, QuizGame } from "../../components/QuizGame";

export const C3S6 = () => {

    const quizzes: Quiz[] = [
        {
            question: "PoWとは？",
            options: ["コンピューター同士が競争する"],
            answer: "コンピューター同士が競争する",
        }
    ]
    return (
        <Main>
            <MiniSectionTitle>まとめ</MiniSectionTitle>
            <QuizGame quizzes={quizzes} chapter={3}></QuizGame>
            <Pager direction="back" />
            <Pager direction="forward" />
        </Main>
    );
};

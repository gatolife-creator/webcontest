const quizProgressFromStorage = localStorage.getItem("quiz-progress") as string;
export const quizProgress: boolean[] = JSON.parse(quizProgressFromStorage) || [false, false, false, false, false];

export const setQuizProgress = (chapter: number) => {
    quizProgress[chapter - 1] = true;
    localStorage.setItem("quiz-progress", JSON.stringify(quizProgress));
    console.log(quizProgress);
}
// const pageProgressFromStorage = localStorage.getItem("page-progress") as string;
// export const pageProgress: boolean[] = JSON.parse(pageProgressFromStorage) || [false, false, false,
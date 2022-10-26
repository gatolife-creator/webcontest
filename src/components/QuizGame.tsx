import React, { useState } from "react";

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

const shuffle = ([...array]) => {
  const start = performance.now();
  const n = array.length - 1;
  for (var i = n; i >= 0; i = i - 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  const end = performance.now();
  console.log(`${end - start} ms`);
  return array;
};

export const QuizGame = (props: { quizzes: Quiz[] }) => {
  const questionCount = props.quizzes.length;
  const quizzes = shuffle(props.quizzes);
  const [questionNumber, setQuestionNumber] = useState(1);
  const quiz = quizzes[questionNumber - 1];

  const onHandleClick = (option: string) => {
    if (option === quiz.answer) {
      if (questionNumber === questionCount) {
        console.log("最後の問題");
      } else {
        setQuestionNumber(questionNumber + 1);
      }
      console.log("正解");
    } else {
      console.log("不正解");
    }
  };

  return (
    <div className="mx-auto">
      <div className="h-[60px] w-full bg-primary text-center text-2xl font-bold leading-[60px]">{`${questionNumber}/${questionCount}`}</div>
      <div className="mb-[10px] w-full border-[1px] border-gray-300 bg-white py-[20px] text-center">
        {quiz.question}
      </div>
      <div className="h-[200px] w-full bg-white">
        {quiz.options.map((option: string, index: number) => (
          <button
            className="mx-auto my-[1px] block h-1/4 w-full border-[1px] border-gray-300 bg-white hover:bg-gray-300 active:bg-secondary"
            key={index}
            onClick={() => onHandleClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

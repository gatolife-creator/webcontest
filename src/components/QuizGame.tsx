// TODO 後にサイト全体の学習結果を記録できるようにすること。localStorageかindexedDBを使って管理する。
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Notification } from "./Notification";

import { setQuizProgress, quizProgress } from "../common";

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

const shuffle = ([...array]) => {
  const n = array.length - 1;
  for (var i = n; i >= 0; i = i - 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const QuizGame = (props: { quizzes: Quiz[]; chapter: number }) => {
  const questionCount = props.quizzes.length;
  const { quizzes, chapter } = props;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [notifications, setNotifications] = useState<JSX.Element[]>([]);

  const quiz = quizzes[questionNumber - 1];

  const onHandleClick = (option: string) => {
    if (option === quiz.answer) {
      setResults([...results, true]);
      setNotifications([
        ...notifications,
        <Notification
          className="bg-success text-black"
          text="正解！"
          time={1000}
        />,
      ]);
    } else {
      setResults([...results, false]);
      setNotifications([
        ...notifications,
        <Notification
          className="bg-error text-black"
          text="不正解"
          time={1000}
        />,
      ]);
    }
    setQuestionNumber(questionNumber + 1);
    if (questionNumber === questionCount) {
      if (results.every((value) => value === true)) {
        setQuizProgress(chapter);
      }
      setIsDone(true);
    }
  };

  const retry = () => {
    setQuestionNumber(1);
    setIsDone(false);
    setResults([]);
  };

  return (
    <>
      {notifications.map((notification, index) => (
        <React.Fragment key={index}>{notification}</React.Fragment>
      ))}
      {isDone ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mx-auto"
        >
          <div className="h-[60px] w-full bg-primary text-center text-2xl font-bold leading-[60px]">
            終了！
          </div>

          <div className="mb-[10px] w-full border-[1px] border-gray-300 bg-white py-[20px] text-center">
            {quizzes.map((quiz, index) => (
              <div className="my-5 mx-5 text-left" key={index}>
                <h3 className="mt-7 mb-2 box-border border-b-2 border-primary text-xl font-bold">
                  第{index + 1}問：{quiz.question}
                </h3>
                <p className="indent-3">答え：{quiz.answer}</p>
                <p className="indent-3">
                  結果：
                  {results[index] ? (
                    <span className="inline-block text-success">正解</span>
                  ) : (
                    <span className="inline-block text-error">不正解</span>
                  )}
                </p>
              </div>
            ))}
            <button
              className="btn-primary btn float-right mx-5 text-lg"
              onClick={() => retry()}
            >
              再挑戦！
            </button>
            <div className="clear-right"></div>
          </div>
        </motion.div>
      ) : (
        <motion.div className="mx-auto border-[1px] border-gray-300">
          <div className="h-[60px] w-full bg-primary text-center text-2xl font-bold leading-[60px]">
            {`${questionNumber} / ${questionCount}`}
            {quizProgress[chapter - 1] ? (
              <span className="badge-success badge badge-lg ml-2">
                正解済み
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-[10px] w-full border-[1px] border-gray-300 bg-white py-[20px] text-center">
            {quiz.question}
          </div>
          {shuffle(quiz.options).map((option: string, index: number) => (
            <button
              className="mx-auto my-[1px] block h-1/4 min-h-[50px] w-full border-[1px] border-gray-300 bg-white hover:bg-gray-300 active:bg-secondary"
              key={index}
              onClick={() => onHandleClick(option)}
            >
              {option}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
};

import React, { useEffect, useState } from "react";

export const Notification = (props: {
  text: string;
  time: number;
  className?: string;
}) => {
  const [isWithinTime, setIsWithinTime] = useState(true);
  const { text, time, className } = props;

  useEffect(() => {
    setTimeout(() => {
      setIsWithinTime(false);
    }, time);
  });

  return isWithinTime ? (
    <div
      className={
        "fixed top-1/2 left-1/2 z-50 mx-auto translate-x-[-50%] translate-y-[-50%] rounded-xl bg-slate-800 p-10 text-xl text-white opacity-80 " +
        className
      }
    >
      {text}
    </div>
  ) : (
    <></>
  );
};

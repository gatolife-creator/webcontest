import React from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollButton = () => {
  const clickHandler = () => {
    document
      .querySelector("#scroll-target")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <button
        className="btn-warning btn-circle btn fixed bottom-[20px] right-[20px] z-50 sm:right-[40px] sm:bottom-[40px] sm:btn-lg"
        onClick={() => clickHandler()}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

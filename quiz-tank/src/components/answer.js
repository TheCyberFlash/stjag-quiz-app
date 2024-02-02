import React from "react";

const Answer = ({ text, onSelect, isCorrect }) => {
  return (
    <div
      className={`answer ${isCorrect ? "correct" : "incorrect"}`}
      onClick={() => onSelect(isCorrect)}
    >
      <p>{text}</p>
    </div>
  );
};

export default Answer;

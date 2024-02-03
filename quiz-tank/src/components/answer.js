import React, { useState, useEffect } from "react";

const Answer = ({ text, onSelect, isCorrect, showCorrectAnswer }) => {
  const [selected, setSelected] = useState(false);
  const [clickedNextQuestion, setClickedNextQuestion] = useState(false);

  const handleClick = () => {
    if (!selected) {
      setSelected(true);
      onSelect(isCorrect);
    }
  };

  useEffect(() => {
    if (clickedNextQuestion && showCorrectAnswer) {
      setSelected(false);
      setClickedNextQuestion(false);
    }
  }, [clickedNextQuestion, showCorrectAnswer]);

  return (
    <div
      className={`answer ${selected ? (isCorrect ? "correct" : "incorrect") : ""}`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Answer;
import React, { useState, useEffect } from "react";

const Answer = ({ text, onSelect, isCorrect, showCorrectAnswer }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (!showCorrectAnswer) {
      setSelected(false);
    }
  }, [showCorrectAnswer]);

  const handleClick = () => {
    if (!selected) {
      setSelected(true);
      onSelect(isCorrect);
    }
  };

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
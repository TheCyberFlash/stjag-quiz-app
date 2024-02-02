import React, { useState } from "react";

const Answer = ({ text, onSelect, isCorrect }) => {
  const [selected, setSelected] = useState(false);

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
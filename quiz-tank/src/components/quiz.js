import React, { useState, useEffect } from "react";
import Question from "./question";
import Answer from "./answer";
import data from "../data/questions.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz finished! Your score is: " + score);
    }
  };

  useEffect(() => {
    setCurrentQuestion(0);
    setScore(0);
  }, []);

  return (
    <div className="quiz">
      <Question text={data[currentQuestion].question} />
      <div className="answers">
        {data[currentQuestion].options.map((option, index) => (
          <Answer
            key={index}
            text={option.text}
            isCorrect={option.isCorrect}
            onSelect={handleAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
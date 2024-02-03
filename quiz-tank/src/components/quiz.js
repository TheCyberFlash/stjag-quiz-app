import React, { useState, useEffect } from "react";
import Question from "./question";
import Answer from "./answer";
import data from "../data/questions.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswer = (isCorrect) => {
    setScore((prevScore) => {
      const updatedScore = isCorrect ? prevScore + 1 : prevScore;
      console.log(updatedScore);
      setShowCorrectAnswer(true);

      return updatedScore;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCorrectAnswer(false);
      nextQuestion();
    }, 600);

    return () => clearTimeout(timer);
  }, [score]);

  const nextQuestion = () => {
    setShowCorrectAnswer(false);
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz finished! Your score is: " + score);
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  useEffect(() => {
    resetQuiz();
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
            showCorrectAnswer={showCorrectAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;

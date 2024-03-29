import React, { useState, useEffect } from "react";
import Question from "./question";
import Answer from "./answer";
import data from "../data/questions.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  let updatedScore = score;

  const handleAnswer = (isCorrect) => {
    updatedScore = isCorrect ? score + 1 : score;
    setScore(updatedScore);
    console.log(updatedScore);
    setShowCorrectAnswer(true);
  
    setTimeout(() => {
      setShowCorrectAnswer(false);
      nextQuestion();
    }, 600);
  };  

  const nextQuestion = () => {
    setShowCorrectAnswer(false);
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz finished! Your score is: " + updatedScore);
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

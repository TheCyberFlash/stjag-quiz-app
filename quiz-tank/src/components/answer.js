import React from 'react';

const Answer = ({ answer, onSelect, isCorrect }) => {
    return (
        <div className={`answer ${isCorrect ? 'correct' : 'incorrect'}`} onClick={() => onSelect(isCorrect)}>
        <p>{answer}</p>
      </div>
    );
};

export default Answer;
import React from 'react';

const Answer = ({ answer, onSelect, isCorrect }) => {
    return (
        <div onClick={() => onSelect(isCorrect)}>
            <p>{answer}</p>
        </div>
    );
};

export default Answer;
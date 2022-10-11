import React from 'react';

const Question = ({ option }) => {
    const { question } = option
    return (
        <div>
            <h1>{question}</h1>
        </div>
    );
};

export default Question;
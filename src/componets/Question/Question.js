import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const Question = ({ option }) => {
    const { question, options, correctAnswer } = option

    return (
        <div className='container shadow border rounded mb-4 p-4'>
            {<div>
                <h4 className='text-primary'>{question}</h4>
            </div>}
            < div className='row' >
                {
                    options.map((quizOption, index) => <QuizOption key={index} quizOption={quizOption} correctAnswer={correctAnswer}></QuizOption>)
                }
            </div >
        </div >
    );
};

export default Question;
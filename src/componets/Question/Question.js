import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ option }) => {
    const { question, options, correctAnswer } = option

    return (
        <div className='container shadow border rounded mb-4 p-4'>
            {<div className='d-flex justify-content-between'>
                <h4 className='text-primary'>{question}</h4>
                <div>
                    <EyeIcon style={{ width: '20px', height: '20px' }} />
                </div>
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
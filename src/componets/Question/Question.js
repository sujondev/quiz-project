import React from 'react';
import './Question.css'

const Question = ({ option }) => {
    const { question, options } = option
    return (
        <div className='container shadow border rounded mb-4 p-4'>
            <div>
                <h4 className='text-primary'>{question}</h4>
            </div>
            <div className='row'>
                {
                    options.map(quizOption => <div className='option quiz-hover grid-col-6 fw-bold border p-3 rounded mt-2'>{quizOption}</div>)
                }
            </div>
        </div>
    );
};

export default Question;
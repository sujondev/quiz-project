import React from 'react';
import './QuizOption.css'

const QuizOption = ({ quizOption, correctAnswer }) => {
    const handleQuiz = () => {
        if (quizOption === correctAnswer) {

        }
    }

    return (
        <div onClick={handleQuiz} className='option quiz-hover col-6 fw-bold border p-3 rounded mt-2'>
            {quizOption}
        </div>
    );
};

export default QuizOption;
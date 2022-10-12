import React from 'react';
import './QuizOption.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({ quizOption, correctAnswer }) => {
    const handleQuiz = () => {
        if (quizOption === correctAnswer) {
            toast.success("Answer is right!", {
                position: "top-center",
                autoClose: 1000,
                theme: "colored"
            });
        }
        else {
            toast.error("Answer is wrong!", {
                position: "top-center",
                autoClose: 1000,
                theme: "colored"
            });
        }
    }

    return (
        <div onClick={handleQuiz} className='option quiz-hover col-6 fw-bold border p-3 rounded mt-2'>
            {quizOption}
            <ToastContainer />
        </div>

    );
};

export default QuizOption;
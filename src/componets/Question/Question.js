import QuizOption from '../QuizOption/QuizOption';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';

const Question = ({ option }) => {
    const { question, options, correctAnswer } = option
    const handleEyeIcon = () => {
        toast.success(correctAnswer, {
            position: "top-center",
            autoClose: 1000,
            theme: "colored"
        })
    }

    return (
        <div className='container shadow border rounded mb-4 p-4'>
            {<div className='d-flex justify-content-between'>
                <h4 className='text-primary'>{question}</h4>
                <div>
                    <EyeIcon onClick={handleEyeIcon} style={{ width: '20px', height: '20px' }} />
                </div>
            </div>}
            < div className='row' >
                {
                    options.map((quizOption, index) => <QuizOption key={index} quizOption={quizOption} correctAnswer={correctAnswer}></QuizOption>)
                }
            </div >
            <ToastContainer />
        </div >
    );
};

export default Question;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizTopic = () => {
    const data = useLoaderData()
    const name = data.data
    const Options = data.data.questions
    console.log(name)
    return (
        <div>
            <h3 className='text-center mt-5 mb-4 fw-bold text-primary'>Quiz of {name.name}</h3>
            {
                Options.map(option => <Question key={option.id} option={option}></Question>)
            }
        </div>
    );
};

export default QuizTopic;
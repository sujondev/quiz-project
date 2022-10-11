import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizTopic = () => {
    const data = useLoaderData()
    const Options = data.data.questions
    console.log(Options)
    return (
        <div>
            <h3>this quiz topic compoents</h3>
            {
                Options.map(option => <Question key={option.id} option={option}></Question>)
            }
        </div>
    );
};

export default QuizTopic;
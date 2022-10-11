import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const data = useLoaderData()
    const quizes = data.data;
    // console.log(quizes);
    return (
        <div className='container'>
            <div>
                this is banner
            </div>
            <div className='row'>
                {
                    quizes.map(quiz => <Quiz quiz={quiz} key={quiz.id}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;
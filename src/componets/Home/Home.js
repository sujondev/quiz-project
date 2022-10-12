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
            <div className='bg-dark d-lg-flex mt-5'>
                <img className='img-fluid' src="https://images.unsplash.com/photo-1664575601711-67110e027b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div>
                    <h1 className='text-light ms-3 mt-3'>Welcome to our mega Quiz Website</h1>
                    <p className='text-light ms-3 mt-3'>our site we quiz qestion see and and you anwer see we show the html css js and git quiz qestion see that and you have navigate.This is navigate using react route and you see statiscs page</p>
                </div>
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
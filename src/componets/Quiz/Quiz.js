import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { name, logo, total, id } = quiz
    const navigate = useNavigate()
    const quizTopichandle = () => {
        navigate(`/quiz/${id}`)
    }
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 gy-4'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" className='bg-dark' src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className='fw-bold text-primary'>Toatal:</span> <span className='fw-bold text-info'>{total}</span>
                    </Card.Text>
                    <Button onClick={quizTopichandle} variant="primary fw-semibold">Start Topic</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Quiz;
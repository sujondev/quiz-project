import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Navbars = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='fw-bold text-white ms-4'>Mega Quiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-decoration-none me-4 fw-bold text-white' to='/'>Home</Link>
                            <Link className='text-decoration-none me-4 fw-bold text-white' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none me-4 fw-bold text-white' to='/statistics'>Statistics</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;
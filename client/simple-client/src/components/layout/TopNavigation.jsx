import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {NavLink} from 'react-router-dom';




const NavigationBar = () => {
    

    return(
        <>
        <Navbar sticky="top" bg="light" variant="light" className="mb-4">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Vaish Tech</Navbar.Brand>
                <Nav className='flex-grow-1 justify-content-end'>
                    <Nav.Link as={NavLink} to='/create' className="fw-bold">Create User</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavigationBar;
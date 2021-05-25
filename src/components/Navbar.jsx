import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function AppNavbar(){
return(
    <Navbar sticky="top" bg="dark" variant='dark' expand="lg">
        <Navbar.Brand href="/">GetFitTogether</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/mainpage">Main Page</Nav.Link>
                <Nav.Link href="/training">Training</Nav.Link>
                <Nav.Link href="/nutrition">Nutrition</Nav.Link>
                <Nav.Link href="/supplements">Supplements</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}
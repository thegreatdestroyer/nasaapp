import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from './NASA_Worm_logo.svg';

function Header() {
    return (
        <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="100"
                    height="38"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Main</Nav.Link>
                    <Nav.Link href="#link">Mars Rover Photos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</>
    );
}

export { Header };
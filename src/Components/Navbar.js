import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../img/logo.png';


export default function NavBar() {
    return (
        <>
            <Navbar bg="light"  expand="lg" >
                <Navbar.Brand href="">
                    <img src={logo}
                        width="auto"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Treinta"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="#">Nuestros Servicios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

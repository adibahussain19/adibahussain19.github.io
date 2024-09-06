import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar expand="lg" fixed="top" id="navbar-edit">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home </Nav.Link>
            <Nav.Link href="#about"> About </Nav.Link>
            <Nav.Link href="#projects"> Projects </Nav.Link>
            <Nav.Link href="#writing"> Writing </Nav.Link>
            <Nav.Link href="#contact"> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

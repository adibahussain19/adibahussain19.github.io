import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar expand="lg" fixed="top" id="navbar-edit">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="top"smooth={true} duration={200}> Home </Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={200}> About </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={200}> Projects </Nav.Link>
            <Nav.Link as={Link} to="writing" smooth={true} duration={200}> Writing </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={200}> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

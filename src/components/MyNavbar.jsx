import React from 'react';
import { useState, useEffect} from 'react';
import "./MyNavbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    }

    else{
      setScrolled(false);
    }
  };

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? 'navbar-scrolled' : ''} id="navbar-edit">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#top"> Home </Nav.Link>
            <Nav.Link className="nav-link" href="#about"> About </Nav.Link>
            <Nav.Link className="nav-link" href="#projects"> Projects </Nav.Link>
            <Nav.Link className="nav-link" href="#writing"> Writing </Nav.Link>
            <Nav.Link className="nav-link" href="#contact"> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

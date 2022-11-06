import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Svgs } from "../../Assets";

const Header = () => {
  return (
    <>
      <Navbar bg-light text-dark md={{ span: 2, offset: 5 }} className="header">
        <Container >
          <Navbar.Brand>
            <Svgs.LogoIcon />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" className="nalLink">Home</Nav.Link>
            <Nav.Link href="#about us" className="nalLink">About Us</Nav.Link>
            <Nav.Link href="#services" className="nalLink">Services</Nav.Link>
            <Nav.Link href="#Blog" className="nalLink">Blog</Nav.Link>
            <Nav.Link href="#Contact" className="nalLink">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { Svgs } from "../../Assets";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerhead">
        <div className="footDescription">
          <p className="desc">
            Get in touch with us <br /> for your service
          </p>
          <div className="socialIcons pt-5">
            <BsFacebook size={24} />
            <BsTwitter size={24} />
            <BsInstagram size={24} />
            <ImLinkedin size={24} />
          </div>
        </div>
        <div className="contact">
          <div className="helpline pb-3">
            <span className="contactHeading">Help line Number</span>
            <p className="contactDesc">1800 265 24 52</p>
          </div>
          <div className="Address pb-3">
            <span className="contactHeading">Address</span>
            <p className="contactDesc">
              NH 234 Public Square San Francisco 65368
            </p>
          </div>
          <div className="opening">
            <span className="contactHeading">We are open</span>
            <p className="contactDesc">Monday to Friday 9:00 AM to 10:00 AM</p>
          </div>
        </div>
      </div>
      <div className="footerLinks">
        <Navbar md={{ span: 2, offset: 5 }} className="footerNav">
          <Container>
            <Navbar.Brand>
              <Svgs.LogoIcon />
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#home" className="nalLink">
                Home
              </Nav.Link>
              <Nav.Link href="#about us" className="nalLink">
                About Us
              </Nav.Link>
              <Nav.Link href="#services" className="nalLink">
                Services
              </Nav.Link>
              <Nav.Link href="#Blog" className="nalLink">
                Blog
              </Nav.Link>
              <Nav.Link href="#Contact" className="nalLink">
                Contact
              </Nav.Link>
            </Nav>
            <div>
              <span className="copyright">@ Copyright Finsweet 2021</span>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Footer;

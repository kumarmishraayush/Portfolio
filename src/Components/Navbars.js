import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

 

const Navbars = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>

      <LinkContainer to="/">
            <Navbar.Brand>Ayush Mishra</Navbar.Brand>
          </LinkContainer>


     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="Technical">
            <Navbar.Brand>Technical Skill</Navbar.Brand>
          </LinkContainer>

          <LinkContainer to="Projects">
            <Navbar.Brand>Projects</Navbar.Brand>
          </LinkContainer>


            
            
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/kumarmishraayush">GitHub</Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UC4A5Ut25hTV-qy6GbgMSqRQ">Youtube</Nav.Link>

            <Nav.Link eventKey={2} href="https://www.linkedin.com/in/ayush-mishra-624781218">
              Linkedin
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://leetcode.com/AyushMishra1208/">
              Leetcode
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars
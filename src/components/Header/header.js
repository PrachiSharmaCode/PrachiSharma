import React, { Component, useState } from "react";
import "./header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import resume from "../../doc/SharmaPrachiResume.pdf";

export default function Header({ scrollToSection }){

  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  };

  return (<>
    <Navbar
      collapseOnSelect
      expanded={expanded}
      onToggle={setExpanded}
      className="sticky-top navbar navbar-light bg-dark"
      bg="dark"
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link onClick={() => {scrollToSection('projects'); handleSelect(); }}>PROJECTS</Nav.Link>
          <Nav.Link onClick={() => { scrollToSection('skills'); handleSelect(); }}>SKILLS</Nav.Link>
          <Nav.Link onClick={() => {scrollToSection('timeline'); handleSelect(); }}>TIMELINE</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="social-icon">
        {/* <a
          className="mailto fa-ater-name"
          href="mailto:prachisharma.edu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope about-page-icon" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/prachi-sharma-b12147133"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin about-page-icon"></i>
        </a>
        <a href="https://github.com/PrachiSharmaCode" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github about-page-icon"></i>
        </a>
        <a href="https://www.facebook.com/prachi.sharma.122/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook about-page-icon" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/prachieq/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram about-page-icon" aria-hidden="true"></i>
        </a> */}
        <Button href={resume} target="_blank" className="resume-button">
          Resume
        </Button>
      </div>
    </Navbar>
  </>
  );
}


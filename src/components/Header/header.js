import React, { Component, useEffect, useState } from "react";
import "./header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import resume from "../../doc/ResumePrachiSharma.pdf";

export default function Header({ scrollToSection, activeSection }) {

  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  };

  return (<>
    

    <Navbar
      collapseOnSelect
      expanded={expanded}
      onToggle={setExpanded}
      className=" navbar navbar-light bg-dark"
      bg="dark"
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className={activeSection === 'about' ? 'active' : ''} onClick={() => { scrollToSection('about'); handleSelect(); }}>About</Nav.Link>
          <Nav.Link className={activeSection === 'skills' ? 'active' : ''} onClick={() => { scrollToSection('skills'); handleSelect(); }}>Skills</Nav.Link>
          <Nav.Link className={activeSection === 'projects' ? 'active' : ''} onClick={() => {scrollToSection('projects'); handleSelect(); }}>Projects</Nav.Link>
          <Nav.Link  className={activeSection === 'timeline' ? 'active' : ''} onClick={() => {scrollToSection('timeline'); handleSelect(); }}>Timeline</Nav.Link>
          <Nav.Link className={activeSection === 'contact' ? 'active' : ''} onClick={() => {scrollToSection('contact'); handleSelect(); }}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div>
          <Button href={resume} target="_blank" className="resume-button">Resume</Button>
        </div>
    </Navbar>
  </>
  );
}


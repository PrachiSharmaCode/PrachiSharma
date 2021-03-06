import React, { Component } from "react";
import "./header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import resume from "../../doc/PrachiResume.pdf";

export default class header extends Component {
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        className="sticky-top navbar navbar-dark bg-dark"
        bg="dark"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#aboutLink">ABOUT</Nav.Link>
            <Nav.Link href="#projectsLink">PROJECTS</Nav.Link>
            <Nav.Link href="#skillsLink">SKILLS</Nav.Link>
            <Nav.Link href="#timelineLink">TIMELINE</Nav.Link>
            <Nav.Link href="#contactLink">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button href={resume} target="_blank" className="resume-button">
          Resume
        </Button>
      </Navbar>
    );
  }
}

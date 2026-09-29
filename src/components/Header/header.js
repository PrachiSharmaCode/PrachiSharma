import React, { useState } from "react";
import "./header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { trackEvent } from "../../utils/analytics";

export default function Header({ scrollToSection, activeSection }) {

  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  };

  const handleNavigation = (event, destination) => {
    event.preventDefault();
    trackEvent("navigation_click", { destination });
    scrollToSection(destination);
    handleSelect();
  };

  return (<>
    

    <Navbar
      collapseOnSelect
      expanded={expanded}
      onToggle={setExpanded}
      className="navbar navbar-light bg-dark"
      bg="dark"
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="navbar-links"
          activeKey={activeSection ? `#${activeSection}` : null}
        >
          <Nav.Link href="#about" eventKey="#about" onClick={(event) => handleNavigation(event, 'about')}>About</Nav.Link>
          <Nav.Link href="#skills" eventKey="#skills" onClick={(event) => handleNavigation(event, 'skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" eventKey="#projects" onClick={(event) => handleNavigation(event, 'projects')}>Featured Work</Nav.Link>
          <Nav.Link href="#timeline" eventKey="#timeline" onClick={(event) => handleNavigation(event, 'timeline')}>Timeline</Nav.Link>
          <Nav.Link href="#contact" eventKey="#contact" onClick={(event) => handleNavigation(event, 'contact')}>Contact</Nav.Link>
          <Button
            href={`${process.env.PUBLIC_URL}/PrachiSharmaResume2026.pdf`}
            target="_blank"
            className="resume-button"
            onClick={() => trackEvent("resume_click", { location: "navbar", action: "open" })}
          >
            Resume
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  );
}

import React, { Component, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./App.css";

import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/aboutme";
import Skills from "./components/Skills/skills";
import Projects from "./components/projects/projects";
import Timeline from "./components/TimeLine/timeline";
import Contact from "./components/contact/contact";

export default function App() {

  useEffect(() => {
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
}, []);

  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const timelineRef = useRef(null);

  const calculateOffset = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 800) {
      return 120; 
    } else  {
      return 350;
    }
  };

  const scrollToSection = (section) => {
    const offset = calculateOffset();

    if (section === 'skills') {
      window.scrollTo({
        top: skillRef.current.offsetTop - offset,
        behavior: 'smooth',
      });
    } else if (section === 'projects') {
      window.scrollTo({
        top: projectRef.current.offsetTop - offset,
        behavior: 'smooth',
      });
    } else if (section === 'timeline') {
      window.scrollTo({
        top: timelineRef.current.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  }

  return (<>
    <div className="app-back" id="about">
      <Header scrollToSection={scrollToSection}></Header>
      <AboutMe></AboutMe>
      <Skills ref={skillRef} ></Skills>
      <Projects ref={projectRef} ></Projects>
      <Timeline ref={timelineRef} ></Timeline>
      <Contact></Contact>
    </div>
  </>);
}

import React, { useRef, useEffect, useState } from "react";
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

  const [activeSection, setActiveSection] = useState('');

  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const timelineRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    
    fadex();
    fadey();

    if (
      aboutRef.current &&
      skillRef.current &&
      projectRef.current &&
      timelineRef.current &&
      contactRef.current
    ) {
      checkFun();
    }
  }, []);

  const fadey = () => {
    const elements = document.querySelectorAll(".fade-in-y");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }

  const fadex = () => {

    const elements1 = document.querySelectorAll(".fade-in-x");

    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements1.forEach((el) => observer1.observe(el));

    return () => observer1.disconnect();

  }

  const checkFun = () => {
    const sections = [
      { ref: aboutRef, name: "about" },
      { ref: skillRef, name: "skills" },
      { ref: projectRef, name: "projects" },
      { ref: timelineRef, name: "timeline" },
      { ref: contactRef, name: "contact" },
    ];
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.5 }
    );
  
    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });
  
    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  };
  

  const scrollToSection = (section) => {
    const offset = 150;

    if(section === 'about'){
      window.scrollTo({
        top: aboutRef.current.offsetTop - offset,
        behavior: 'smooth',
      });
    }
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
    if(section === 'contact'){
      window.scrollTo({
        top: contactRef.current.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  }

  return (<>
    <div className="app-back" id="about">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} ></Header>
      <AboutMe ref={aboutRef}></AboutMe>
      <Skills ref={skillRef} ></Skills>
      <Projects ref={projectRef} ></Projects>
      <Timeline ref={timelineRef} ></Timeline>
      <Contact ref={contactRef}></Contact>
      <div className="footer">
        <p><em>Developed and Designed by <a href="#">Prachi Sharma</a>.</em></p>
      </div>
    </div>
  </>);
}

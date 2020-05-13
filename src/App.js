import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/aboutme";
import Skills from "./components/Skills/skills";
import Projects from "./components/projects/projects";
import Timeline from "./components/TimeLine/timeline";
import Contact from "./components/contact/contact";

class App extends Component {
  render() {
    return (
      <div className="app-back">
        <Header></Header>
        <div id="aboutLink">
          {" "}
          <AboutMe></AboutMe>
        </div>
        <Skills></Skills>
        <Projects></Projects>
        <Timeline></Timeline>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;

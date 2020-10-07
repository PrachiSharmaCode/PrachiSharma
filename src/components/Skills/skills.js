import React, { Component } from "react";
import "./skills.css";

export default class skills extends Component {
  render() {
    return (
      <div className="skills" id="skillsLink">
        <div>
          <h1 className="skillHeading div-heading display-4">SKILLS</h1>
        </div>
        <div className="row">
          <div className="col-sm shadow col-sm-skills rounded">
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-head">Languages</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">TypeScript</li>
              <li className="list-group-item">JSX</li>
              <li className="list-group-item">JAVA</li>
              <li className="list-group-item">C++</li>
            </ul>
          </div>
          <div className="col-sm col-sm-skills md-5 shadow rounded">
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-head">Web Technology</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Angular</li>
              <li className="list-group-item">Node</li>
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">SCSS</li>
            </ul>
          </div>
          <div className="col-sm col-sm-skills shadow rounded">
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-head">Database</li>
              <li className="list-group-item">MySQL</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">Hadoop</li>
              <li className="list-group-item">Hibernate</li>
            </ul>
          </div>
          {/* <div className="col-sm col-sm-skills mb-5 col-sm-heading  shadow bg-white rounded">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-head">Languages</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">TypeScript</li>
                <li className="list-group-item">JAVA</li>
                <li className="list-group-item">C++</li>
              </ul>
            </div> */}
          {/* <div className="col-sm col-sm-skills-middle mb-5  col-sm-heading  shadow bg-white rounded">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-head">Web Technology</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Angualar</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">SCSS</li>
              </ul>
            </div> */}
          {/* <div className="col-sm col-sm-skills  mb-5  col-sm-heading shadow bg-white rounded">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-head">Database</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Hadoop</li>
                <li className="list-group-item">Hibernate</li>
              </ul>
            </div> */}
        </div>
      </div>
    );
  }
}

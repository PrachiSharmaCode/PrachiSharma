import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./skills.css";
import jsIcon from "../../images/jsLogo.png";
import tyIcon from "../../images/tyLogo.png";
import reactIcon from "../../images/reactLogo.png";

import angularLogo from "../../images/angularLogo.png";
import nodeLogo from "../../images/nodeLogo.png";
import cypressLogo from "../../images/cypressLogo.png";
import cucumberLogo from "../../images/cucumberLogo.png";
import jestLogo from "../../images/jestLogo.png";
import htmlLogo from "../../images/htmlLogo.png";
import cssLogo from "../../images/cssLogo.png";
import scssLogo from "../../images/scssLogo.png";
import mysqlLogo from "../../images/mysqlLogo.png";
import mongoLogo from "../../images/mongoLogo.png";
import awsLogo from "../../images/awsLogo.png";
import gitLogo from "../../images/gitLogo.png";
import sonarqubeLogo from "../../images/sonarQubeLogo.png";
import graphqlLogo from "../../images/graphQLLogo.png";
import grafanaLogo from "../../images/grafanaLogo.png";
import openaiLogo from "../../images/openAI.jpg";
import langchainLogo from "../../images/langChain.png";
import expressLogo from "../../images/expressjs.jpg";
import tailwindLogo from "../../images/tailwindIcon.jpg";
import materialUILogo from "../../images/materialUiIcon.webp";

const Skills = forwardRef((_, ref) => {
  const skills = [
    //frontend
    { logo: reactIcon, name: "React", type: "Frontend" },
    { logo: jsIcon, name: "JavaScript", type: "Frontend" },
    { logo: tyIcon, name: "TypeScript", type: "Frontend" },
    { logo: angularLogo, name: "Angular", type: "Frontend" },
    { logo: htmlLogo, name: "HTML", type: "Frontend" },
    { logo: cssLogo, name: "CSS", type: "Frontend" },
    { logo: tailwindLogo, name: "Tailwind", type: "Frontend" },
    { logo: materialUILogo, name: "Material UI", type: "Frontend" },
    { logo: scssLogo, name: "SCSS", type: "Frontend" },
    //backend
    { logo: nodeLogo, name: "Node.js", type: "backend" },
    { logo: expressLogo, name: "Express.js", type: "backend" },
    { name: "REST APIs", type: "backend", icon: faServer },
    { logo: graphqlLogo, name: "GraphQL", type: "backend" },
    { logo: mysqlLogo, name: "SQL", type: "backend" },
    { logo: mongoLogo, name: "MongoDB", type: "backend" },
    //testing
    { logo: cypressLogo, name: "Cypress", type: "testing" },
    { logo: jestLogo, name: "Jest", type: "testing" },
    { logo: cucumberLogo, name: "Cucumber", type: "testing" },
    { logo: sonarqubeLogo, name: "SonarQube", type: "testing" },
    //AI
    { logo: openaiLogo, name: "OpenAI API", type: "AI" },
    { logo: langchainLogo, name: "LangChain", type: "AI" },
    { name: "RAG", type: "AI", icon: faBrain },
    { name: "Vector Search", type: "AI", icon: faDatabase },
    //cloud
    { logo: awsLogo, name: "AWS", type: "Cloud" },
    { logo: gitLogo, name: "Git", type: "Cloud" },
    { logo: grafanaLogo, name: "Grafana", type: "Cloud" },
  ];

  const skillGroups = [
    { title: "Frontend", types: ["Frontend"] },
    { title: "Backend & APIs", types: ["backend"] },
    { title: "AI & Integrations", types: ["AI"] },
    { title: "Testing and Quality", types: ["testing"] },
    { title: "Cloud & Tools", types: ["Cloud"] },
  ];

  const renderSkillSection = (group) => {
    const headingId = `skill-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

    return (
      <section className="skill-section" key={group.title} aria-labelledby={headingId}>
        <div className="skill-header fade-in-y">
          <h3 className="skill-section-title" id={headingId}>{group.title}</h3>
          <hr className="skill-divider" />
        </div>
        <div className="skill-container fade-in-y" role="list">
          {skills
            .filter((skill) => group.types.includes(skill.type))
            .map((skill) => (
              <div className="skill-details" key={skill.name} role="listitem">
                {skill.logo ? (
                  <img className="skill-img" src={skill.logo} alt="" aria-hidden="true" />
                ) : (
                  <div className="skill-icon-wrap">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  </div>
                )}
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
        </div>
      </section>
    );
  };

  return (
    <div ref={ref} className="skill-box" id="skills">
      <h2 className="div-heading fade-in-y">SKILLS</h2>
      {skillGroups.map(renderSkillSection)}
    </div>
  );
});

export default Skills;

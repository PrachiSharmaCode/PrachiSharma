import React, { Component, forwardRef } from "react";
import "./skills.css";
import jsIcon from "../../images/jsLogo.png";
import tyIcon from "../../images/tyLogo.png";
import javaIcon from "../../images/javaLogo.png";
import reactIcon from "../../images/reactLogo.png";
import jsxIcon from "../../images/jsxLogo.png";
import cIcon from "../../images/cplusplusLogo.png";
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
import hibernateLogo from "../../images/hibernateLogo.png";
import hadoopLogo from "../../images/hadoopLogo.png";
import awsLogo from "../../images/awsLogo.png";
import gitLogo from "../../images/gitLogo.png";
import sonarqubeLogo from "../../images/sonarQubeLogo.png";
import graphqlLogo from "../../images/graphQLLogo.png";
import grafanaLogo from "../../images/grafanaLogo.png";

const Skills = forwardRef((props, ref) => {


  const skills = [
    { logo: jsIcon, name: "JavaScript" },
    { logo: tyIcon, name: "TypeScript" },
    { logo: javaIcon, name: "JAVA" },
    { logo: cIcon, name: "C++" },
    { logo: jsxIcon, name: "JSX" },
    { logo: reactIcon, name: "React" },
    { logo: nodeLogo, name: "Node" },
    { logo: angularLogo, name: "Angular" },
    { logo: cypressLogo, name: "Cypress" },
    { logo: jestLogo, name: "Jest" },
    { logo: cucumberLogo, name: "Cucumber" },
    { logo: htmlLogo, name: "HTML" },
    { logo: cssLogo, name: "CSS" },
    { logo: scssLogo, name: "SCSS" },
    { logo: mysqlLogo, name: "SQL" },
    { logo: mongoLogo, name: "MongoDB" },
    { logo: hibernateLogo, name: "Hibernate" },
    { logo: hadoopLogo, name: "Hadoop" },
    { logo: awsLogo, name: "AWS" },
    { logo: gitLogo, name: "Git" },
    { logo: grafanaLogo, name: "Grafana" },
    { logo: sonarqubeLogo, name: "SonarQube" },
    { logo: graphqlLogo, name: "GraphQL" },
  ];

  const webSkills = [
    { logo: reactIcon, name: "React" },
    { logo: nodeLogo, name: "Node" },
    { logo: angularLogo, name: "Angular" },
    { logo: cypressLogo, name: "Cypress" },
    { logo: jestLogo, name: "Jest" },
    { logo: cucumberLogo, name: "Cucumber" },
    { logo: htmlLogo, name: "HTML" },
    { logo: cssLogo, name: "CSS" },
    { logo: scssLogo, name: "SCSS" },
  ];

  const dataSkills = [
    { logo: mysqlLogo, name: "SQL" },
    { logo: mongoLogo, name: "MongoDB" },
    { logo: hibernateLogo, name: "Hibernate" },
    { logo: hadoopLogo, name: "Hadoop" },
  ];

  const softwareSkills = [
    { logo: awsLogo, name: "AWS" },
    { logo: gitLogo, name: "Git" },
    { logo: grafanaLogo, name: "Grafana" },
    { logo: sonarqubeLogo, name: "SonarQube" },
    { logo: graphqlLogo, name: "GraphQL" },
  ];


   const renderSkillSection = (skills, title) => (

    <div className="skill-container fade-in-y" >
      {skills.map((skill) => (
        <div className="skill-details fade-in-y" key={skill.name}>
          <img className="skill-img fade-in-y" src={skill.logo} alt={skill.name} />
          <p className="skill-name fade-in-y">{skill.name}</p>
        </div>
      ))}
    </div>

  );


  return (
    <div ref={ref} className="skill-box" id="skills">
      <p className="div-heading fade-in-y">SKILLS</p>
      {renderSkillSection(skills, "Languages")}
      {/* {renderSkillSection(webSkills, "Web Technology")}
      {renderSkillSection(dataSkills, "Database")}
      {renderSkillSection(softwareSkills, "Software")} */}
    </div>);
});

export default Skills;

// export default class Skills extends Component {





//   renderSkillSection = (skills, title) => (

//     <div className="skill-container" >
//       {skills.map((skill) => (
//         <div className="skill-details" key={skill.name}>
//           <img className="skill-img" src={skill.logo} alt={skill.name} />
//           <p className="skill-name"><em>{skill.name}</em></p>
//         </div>
//       ))}
//     </div>

//   );

//   render() {
//     return (
//       <div className="skill-box">
//         <p className="div-heading">SKILLS</p>
//         {this.renderSkillSection(this.skills, "Languages")}
//         {this.renderSkillSection(this.webSkills, "Web Technology")}
//         {this.renderSkillSection(this.dataSkills, "Database")}
//         {this.renderSkillSection(this.softwareSkills, "Software")}
//       </div>
//     );
//   }
// }

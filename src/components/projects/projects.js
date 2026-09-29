import React, { useState, forwardRef } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./projects.css";
import { trackEvent } from "../../utils/analytics";

const Projects = forwardRef((props, ref) => {

  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key, projectName) => {
    trackEvent("project_accordion_toggle", {
      project_name: projectName,
      action: activeKey === key ? "close" : "open",
    });
    setActiveKey(activeKey === key ? null : key);
  };

  const projectData = [
    {
      projectsName: "Quiz-It-All",
      projectDescription: "Quiz It All is an AI-powered application for creating interactive quizzes from topics and uploaded PDFs. It combines document retrieval with generative AI to create questions grounded in the uploaded content, making it easy to turn learning material into an interactive quiz.",
      projectTech: ["OpenAI API", "LangChain", "RAG", "React", "Node.js", ],
      projectLinks: [["https://youtu.be/78U3D3IpB3A?si=J7KjUB_GReYGt6Sw", "View Demo"],["https://github.com/PrachiSharmaCode/Quiz-It-All", "GitHub"]],
    },
    {
      projectsName: "AWS SageMaker - Lifecycle Configuration",
      projectDescription: "Built the frontend experience for SageMaker Studio Lifecycle Configuration, enabling users to attach reusable setup scripts to development environments. Owned technical design, React implementation, backend integration, state and data flow, edge cases, and automated testing.",
      projectTech: ["React", "TypeScript", "GraphQL"],
      projectLinks: [["https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html", "Feature Docs"]],
    },
    {
      projectsName: "Whampy",
      projectDescription: "A WhatsApp marketing platform built on Meta's WhatsApp Business APIs for campaigns, templates, messaging, and customer interactions. Whampy became a Meta Tech Provider, enabling businesses to connect and manage their WhatsApp Business accounts directly through the platform. I designed and built the frontend architecture and reusable workflows as the product evolved.",
      projectTech: ["React", "JavaScript", "Meta API"],
      projectLinks: [["https://www.whampy.com/", "Visit Whampy"]],
    },
    {
      projectsName: "Lion International School Records",
      projectDescription: "A school management application that helps faculty and staff manage student records, accounts and day-to-day administrative workflows in one place. I built the React-based frontend with a focus on making complex record management simpler and easier to use." ,
      projectTech: ["JavaScript", "React", "Node.js"],
      projectLinks: [["https://github.com/PrachiSharmaCode/LionsInternationalSchoolRecords/tree/main", "GitHub"]],
    },
    {
      projectsName: "The Food Truck Web",
      projectDescription: "A web application that helps users discover food trucks by name, city, address, location or cuisine. I built the frontend experience and integrated the Google Maps API to support location-based search and make nearby food trucks easier to find.",
      projectTech: ["JavaScript", "Angular", "Node.js", "Google Maps API"],
      projectLinks: [["https://github.com/PrachiSharmaCode/WebDevelopment/tree/master/project", "GitHub"]],
    },
  ];


  return (<section ref={ref} id="projects" className="project-section">

    <h2 className="div-heading fade-in-y">FEATURED WORK</h2>

    <div className="project-box">
      <div>
        <div className="card-container">
          {projectData.map((project) => (
            <div className="project-card fade-in-y" key={project.projectsName}>
              <div className="project-details">
                <div className="project-copy">
                  <h5 className="project-name fade-in-y">{project.projectsName}</h5>
                  <p className="project-description fade-in-y">{project.projectDescription}</p>
                  {project.projectLinks?.length > 0 && (
                    <div className="project-external-links-container">
                      {project.projectLinks.map(([link, text]) => (
                        <a
                          key={`${text}-${link}`}
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                          onClick={() => trackEvent("project_link_click", {
                            project_name: project.projectsName,
                            link_text: text,
                          })}
                        >
                          {text} <i className="fa fa-external-link-square"></i>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="project-tech">
                {project.projectTech.map((tech) => (
                  <span className="project-tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="small-screen-project">
          {projectData.map((project, index) => {
            const isOpen = activeKey === index.toString();
            return (<div className="" key={project.projectsName}>
              <div className="accordian-container">
                <Accordion className="fade-in-y" activeKey={activeKey} flush>
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header onClick={() => handleToggle(index.toString(), project.projectsName)}>{project.projectsName}<i className={`fa fa-chevron-down project-arrow ${isOpen ? "rotate" : ""}`} aria-hidden="true"></i></Accordion.Header>
                    <Accordion.Body>
                      <p className="accordion-project-description">
                        {project.projectDescription}
                      </p>
                      {project.projectLinks?.length > 0 && (
                        <div className="project-external-links-container">
                          {project.projectLinks.map(([link, text]) => (
                            <a
                              key={`${text}-${link}`}
                              href={link}
                              target="_blank"
                              rel="noreferrer"
                              className="project-link"
                              onClick={() => trackEvent("project_link_click", {
                                project_name: project.projectsName,
                                link_text: text,
                              })}
                            >
                              {text} <i className="fa fa-external-link-square"></i>
                            </a>
                          ))}
                        </div>
                      )}
                      <div className="accordian-project-tech" aria-label="Technologies used">
                        {project.projectTech.map((tech) => (
                          <span className="project-tech-tag" key={tech}>{tech}</span>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="project-tech">
                <p className="tech-name">{project.projectTech.join(", ")}</p>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  </section>);
});

export default Projects;

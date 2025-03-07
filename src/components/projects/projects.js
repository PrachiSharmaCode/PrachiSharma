import React, { useState, forwardRef } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./projects.css";

const Projects = forwardRef((props, ref) => {

  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const projectData = [
    {
      projectsName: "Arvi Technologies and Consultation Website",
      projectDescription: "Designed and developed a modern, fully responsive company website with a focus on performance and seamless user experience. The site features a custom navigation bar, a dynamic client showcase carousel using Intersection Observer, and a sleek glassmorphism UI. Implemented a user-friendly contact form with validation, ensuring smooth interaction.",
      projectTech: ["React", "glassmorphism", "Intersection Observer"],
      gitHubLink: "https://github.com/PrachiSharmaCode/arvi",
      websiteLink: "https://arvitech.in/"
    },
    {
      projectsName: "Lion International School Records",
      projectDescription: "This application empowers school faculty to efficiently manage business operations, track accounts, and organize student records. I had the incredible opportunity to build and design a comprehensive management application using React.js. From crafting intuitive user interfaces to ensuring seamless functionality, every aspect of the frontend was meticulously tailored to meet the school's needs.",
      projectTech: ["JavaScript", "React"],
      gitHubLink: "https://github.com/PrachiSharmaCode/LionsInternationalSchoolRecords/tree/main",
    },
    {
      projectsName: "Allot",
      projectDescription: "Developed an android application to assign tasks and to keep track of work among collogues, mates etc. Implemented functionalities like Geofencing, Hamburger menu, Floating Action Buttons and Notifications.",
      projectTech: ["JavaScript", "Typesacript", "React"],
      gitHubLink: "https://github.com/PrachiSharmaCode/ALLOT",
    },
    {
      projectsName: "StoreMapp",
      projectDescription: "Addressing the need for streamlined product location experiences, I designed an interface ensuring swift access to items within store layouts. This user-friendly design optimizes the shopping journey, allowing customers to navigate through a store's product arrangement with ease. The goal is to enhance user satisfaction by minimizing search time, contributing to a more efficient shopping experience.",
      projectTech: ["MySQL", "Image Mapping", "JSP"],
      gitHubLink: "https://github.com/PrachiSharmaCode/Storemapp",
    },
    {
      projectsName: "The Food Truck Web",
      projectDescription: "I led the development of an innovative website revolutionizing the food truck industry. Users can effortlessly search for food trucks using criteria like name, city, address, and pin code. The integration of Google Maps enhances the experience by providing location tracking. This platform simplifies locating favorite food trucks, offering convenience on the go.",
      projectTech: ["JavaScript", "Angular", "Node", "Google Map API"],
      gitHubLink: "https://github.com/PrachiSharmaCode/WebDevelopment/tree/master/project",
    },
    {
      projectsName: "Transportation Data Analysis",
      projectDescription: "Delving into data analytics, I analyzed the US Department of Transportation's aviation dataset from 2000 to 2008. The objective was to identify reliable airlines during specific time intervals. By creating a ranking system based on metrics like average delay in arrival and departure times, I aimed to provide valuable insights into airline reliability, aiding travelers in making informed decisions.",
      projectTech: ["MapReduce", "Hadoop", "HBase"],
      gitHubLink: "https://github.com/PrachiSharmaCode/TransportationDataAnalysis/blob/master/FinalReport%20(2).pdf",
    },
    {
      projectsName: "Northeastern Univeristy's Website",
      projectDescription: "A significant part of my portfolio includes developing Northeastern University's Align program website. This comprehensive portal caters to faculty, current, and prospective students. It features user authentication, login, and registration, along with detailed statistics on student demographics, including enrollment in specific courses, gender ratios, and academic performance. This centralized hub fosters a connected and informed academic environment.",
      projectTech: ["JAVA", "MAVEN", "REST Web Services", "Hibernate"],
      gitHubLink: "",
    },
  ];


  return (<>

    <div ref={ref} id="projects" className="div-heading fade-in-y">
      <p>PROJECTS</p>
    </div>

    <div className="project-box">
      <div>
        <div className="card-container">
          {projectData.map((project) => (
            <div className="card fade-in-y" key={project.projectsName}>
              <div className="project-details">
                <h5 className="project-name fade-in-y">{project.projectsName}</h5>
                <p className="project-description fade-in-y">{project.projectDescription}</p>
                {project.gitHubLink !== "" && (
                  <div className="project-external-links-container">
                    {
                      project.websiteLink && <a
                        target="_blank"
                        className="project-link"
                        href={project.websiteLink}
                      >
                        Website <i className="fa fa-external-link-square"></i>
                      </a>
                    }

                    <a
                      target="_blank"
                      className="project-link"
                      href={project.gitHubLink}
                    >
                      Github <i className="fa fa-github project-icon"></i>
                    </a>
                  </div>

                )}
              </div>
              <div className="project-tech fade-in-y">
                <p className="tech-name">{project.projectTech.join(", ")}</p>
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
                    <Accordion.Header onClick={() => handleToggle(index.toString())}>{project.projectsName}<i class={`fa fa-chevron-down project-arrow ${isOpen ? "rotate" : ""}`}></i></Accordion.Header>
                    <Accordion.Body>
                      {project.projectDescription}
                      {project.gitHubLink !== "" && (
                        <div className="project-external-links-container">
                        {
                          project.websiteLink && <a
                            target="_blank"
                            className="project-link"
                            href={project.websiteLink}
                          >
                            Website <i className="fa fa-external-link-square"></i>
                          </a>
                        }
    
                        <a
                          target="_blank"
                          className="project-link"
                          href={project.gitHubLink}
                        >
                          Github <i className="fa fa-github project-icon"></i>
                        </a>
                      </div>
                      )}
                      <div className="accordian-project-tech">
                        {project.projectTech.join(", ")}
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
  </>);
});

export default Projects;
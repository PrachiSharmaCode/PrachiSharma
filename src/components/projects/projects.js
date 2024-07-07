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
      projectsName: "Lion International School Records",
      projectDescription: "This application empowers school faculty to efficiently manage business operations, track accounts, and organize student records. As the frontend developer, I had the incredible opportunity to build and design a comprehensive management application using React.js. From crafting intuitive user interfaces to ensuring seamless functionality, every aspect of the frontend was meticulously tailored to meet the school's needs.",
      projectTech: ["JavaScript", "React"],
      gitHubLink: "https://github.com/PrachiSharmaCode/LionsInternationalSchoolRecords/tree/main",
    },
    {
      projectsName: "Allot",
      projectDescription: "I led the development of an innovative website revolutionizing the food truck industry. Users can effortlessly search for food trucks using criteria like name, city, address, and pin code. The integration of Google Maps enhances the experience by providing real-time location tracking. This platform simplifies locating favorite food trucks, offering convenience on the go.",
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
      projectDescription: "I led the development of an innovative website revolutionizing the food truck industry. Users can effortlessly search for food trucks using criteria like name, city, address, and pin code. The integration of Google Maps enhances the experience by providing real-time location tracking. This platform simplifies locating favorite food trucks, offering convenience on the go.",
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
      projectTech: ["JAVA", "MAVEN", "REST Web Services", "Jersey", "Hibernate"],
      gitHubLink: "",
    },
  ];


  return (<>


    <div ref={ref} className="project-box">
      <div className="project-container">
        <div className="div-heading">
          <p>PROJECTS</p>
        </div>
        <div className="card-container">
          {projectData.map((project) => (
            <div className="card" key={project.projectsName}>
              <div className="project-details">
                <h5 className="project-name">{project.projectsName}</h5>
                <p>{project.projectDescription}</p>
                {project.gitHubLink !== "" && (
                  <a
                    target="_blank"
                    className="project-link"
                    href={project.gitHubLink}
                  >
                    Github <i className="fa fa-github project-icon"></i>
                  </a>
                )}
              </div>
              <div className="project-tech">
                <p className="tech-name">{project.projectTech.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="small-screen-project">
          {projectData.map((project, index) => (
            <div className="" key={project.projectsName}>
              <div className="accordian-container">
                <Accordion activeKey={activeKey} flush>
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header onClick={() => handleToggle(index.toString())}>{project.projectsName}<i class="fa fa-chevron-down project-arrow"></i></Accordion.Header>
                    <Accordion.Body>
                      {project.projectDescription}
                      {project.gitHubLink !== "" && (
                        <a
                          target="_blank"
                          className="project-link"
                          href={project.gitHubLink}
                        >
                          Github <i className="fa fa-github project-icon"></i>
                        </a>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="project-tech">
                <p className="tech-name">{project.projectTech.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>);
});

export default Projects;
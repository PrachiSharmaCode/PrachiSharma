import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./projects.css";

export default class projects extends Component {
  render() {
    return (
      <div className="project" id="projectsLink">
        <h1 className="projectHeading div-heading">PROJECTS</h1>
        <div className="project-row">
          <div className="row">
            <div className="col-sm col-sm-project">
              <Card className="text-center shadow">
                <Card.Header>The Food Truck Web</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Developed a website to search food truck by its name, city,
                    address, pin code and to location it on Google Maps.
                  </Card.Text>
                  <Button
                    href="https://github.com/PrachiSharmaCode/WebDevelopment/tree/master/project"
                    target="_blank"
                    variant="primary"
                  >
                    {" "}
                    GitHub
                    <i className="fa fa-github"></i>
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  JavaSctipt, Angular, Node , Google Maps API
                </Card.Footer>
              </Card>
            </div>
            <div className="col-sm col-sm-project">
              <Card className="text-center shadow">
                <Card.Header className="card-background">StoreMapp</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Developed an interface for users to enable quick access to
                    any desired product location across store layouts.
                  </Card.Text>
                  <Button
                    href="https://github.com/PrachiSharmaCode/Storemapp"
                    target="_blank"
                    variant="primary"
                  >
                    GitHub
                    <i className="fa fa-github"></i>
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted card-background">
                  Image Mapping techniques, JSP, MySQL
                </Card.Footer>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-sm-project">
              <Card className="text-center shadow">
                <Card.Header>Allot</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Developed an android application to assign tasks and to keep
                    track of work among collogues, mates etc.<br></br>
                    Implemented functionalities like Geofencing, Hamburger menu,
                    Floating Action Buttons and Notifications.
                  </Card.Text>
                  <Button
                    href="https://github.com/PrachiSharmaCode/ALLOT"
                    target="_blank"
                    variant="primary"
                  >
                    {" "}
                    GitHub
                    <i className="fa fa-github"></i>
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Android SDK, Android Developer Suit, Firebase
                </Card.Footer>
              </Card>
            </div>
            <div className="col-sm col-sm-project">
              <Card className="text-center shadow">
                <Card.Header>Transportation Data Analysis</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Analyzed the US Department of Transportation’s aviation
                    dataset (2000-2008) to find the most reliable airlines
                    between specific intervals of time (weeks, months, years) by
                    building a comprehensive ranking system using metrics such
                    as – average delay in arrival time, average delay in
                    departure time, etc.
                  </Card.Text>
                  <Button
                    href="https://github.com/PrachiSharmaCode/TransportationDataAnalysis/blob/master/FinalReport%20(2).pdf"
                    target="_blank"
                    variant="primary"
                  >
                    {" "}
                    GitHub
                    <i className="fa fa-github"></i>
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  MapReduce, Hadoop. HBase
                </Card.Footer>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-sm-project">
              <Card className="text-center shadow">
                <Card.Header>Gesture Recognition</Card.Header>

                <Card.Body>
                  <Card.Text>
                    Developed a gesture recognition system using MATLAB. It
                    consists of controlling Power Point presentation by hand
                    gestures using concepts of complex mathematical theory,
                    signal processing, data analysis, and programming design.
                  </Card.Text>
                  {/* <Button
                    href="https://github.com/PrachiSharmaCode/ALLOT"
                    target="_blank"
                    variant="primary"
                  >
                    {" "}
                    GitHub
                    <i className="fa fa-github"></i>
                  </Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">MATLAB</Card.Footer>
              </Card>
            </div>
            <div className="col-sm col-sm-project">
              <Card className="text-center shadow">
                <Card.Header>Northeastern University’s Website</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Developed Northeastern University’s align program
                    website/portal used by faculties, current student and
                    prospective student.<br></br>
                    Implement features like login, register, number of students
                    in specific course or grade, ratio of student based on
                    gender, program, grades.
                  </Card.Text>
                  {/* <Button variant="primary">
                    {" "}
                    GitHub
                    <i className="fa fa-github"></i>
                  </Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">
                  JAVA, Maven, Rest Web services, JAX-RS, jersey, Hibernate.
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./aboutme.css";
import Me from "../../images/prachi.jpg";

export default class aboutme extends Component {
  render() {
    return (
      <div className="about">
        <img className="profileImg" src={Me} alt="prachi"></img>
        <div className="head-name">
          <h4 className="name">PRACHI SHARMA </h4>
        </div>
        <div className="lead">
          <p>
            <strong>
              <em>
                I am a software Engineer.<br></br>
                Graduate with Masters degress in Computer Science from{" "}
                <a target="_blank" href="https://www.northeastern.edu/seattle/">
                  Northeastern University
                </a>
                , Seattle.
                <br></br>
                Currently, working at{" "}
                <a target="_blank" href="https://www.pnnl.gov/">
                  Pacific Northwest National Laboratory
                </a>{" "}
                as Post Master Research Associate.
              </em>
            </strong>
          </p>
        </div>
        <div className="social-media-icon-home">
          <span>
            <a
              className="mailto fa-ater-name"
              href="mailto:prachisharma.edu@gmail.com"
              target="_blank"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            <a
              className="fa-ater-name "
              href="https://www.linkedin.com/in/prachi-sharma-b12147133/"
              target="_blank"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            <a
              className="fa-ater-name"
              href="https://github.com/PrachiSharmaCode"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
          </span>
          <span>
            <a
              className="fa-ater-name"
              href="https://www.facebook.com/prachi.sharma.122"
              target="_blank"
            >
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            <a
              className="fa-ater-name"
              href="https://www.instagram.com/prachieq/"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </div>

      // <div className="about ">
      //   <div className="row">
      //     <div className="col-sm col-sm-description">
      //       <img
      //         className="profileImg shadow-sm p-3 rounded"
      //         src={Profile}
      //         alt="prachi"
      //       ></img>
      //     </div>
      //     <div className="col-sm col-sm-description">
      //       <h1 className="name display-3">Prachi Sharma</h1>
      //       <h2 className="role display-4">Software Engineer</h2>
      //       <button className="btn btn-warning btn-lg btn-block shadow-sm p-3  rounded">
      //         Resume<i class="fa fa-download" aria-hidden="true"></i>
      //       </button>
      //     </div>
      /* <div className="col-sm col-sm-picture">
            <img
              className="profileImg shadow-sm p-3 bg-white"
              src={Profile}
              alt="prachi"
              width="400"
              height="400"
            ></img>
          </div> */
      //   </div>
      //   <div className="lead">
      //     <p>
      //       <strong>
      //         <em>
      //           I am a software Engineer, currently working at Pacific Northwest
      //           National Laboratory.<br></br> My Software journey started with
      //           programming language called LOGO,
      //         </em>
      //       </strong>
      //     </p>
      //   </div>
      // </div>
    );
  }
}

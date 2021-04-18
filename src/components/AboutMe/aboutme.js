import React, { Component } from "react";
import "./aboutme.css";
import Me from "../../images/prachis.jpg";

export default class aboutme extends Component {
  render() {
    return (
      <div className="about" id="aboutLink">
        <img className="profileImg" src={Me} alt="prachi"></img>
        <div className="head-name">
          <div className="lead">
            <p>
              <strong>
                <em>Hello, I am</em>
              </strong>
            </p>
          </div>
          <h4 className="name">PRACHI SHARMA </h4>
        </div>
        <div className="lead">
          <p>
            <strong>
              <em>
                Graduate with Masters degress in Computer Science from{" "}
                <a target="_blank" href="https://www.northeastern.edu/seattle/">
                  Northeastern University
                </a>
                , Seattle.
                <br></br>
                Currently, working at{" "}
                <a target="_blank" href="https://aws.amazon.com/sagemaker/">
                  Amazon Web Services, SageMaker
                </a>{" "}
                as Frontend Engineer.
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
    );
  }
}

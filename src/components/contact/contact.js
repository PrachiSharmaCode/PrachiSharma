import React, { Component } from "react";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contactLink">
        <h1 className="contactHeading">Get in Touch</h1>
        <div className="contact-inside">
          <h5>
            <span>
              <a
                className="mailto"
                href="mailto:prachisharma.edu@gmail.com"
                target="_blank"
              >
                <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                prachisharma.edu@gmail.com
              </a>
            </span>
          </h5>
          <h5>
            <span>
              <a
                href="https://www.linkedin.com/in/prachi-sharma-b12147133/"
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i> Prachi
                Sharma
              </a>
            </span>
          </h5>
          <h5>
            <span>
              <a href="https://github.com/PrachiSharmaCode" target="_blank">
                <i className="fa fa-github"></i> PrachiSharmaCode
              </a>
            </span>
          </h5>
          <h5>
            <span>
              <a
                href="https://www.facebook.com/prachi.sharma.122"
                target="_blank"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i> Prachi
                Sharma
              </a>
            </span>
          </h5>
          <h5>
            <span>
              <a href="https://www.instagram.com/prachieq/" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>@prachieq
              </a>
            </span>
          </h5>
        </div>
      </div>
    );
  }
}

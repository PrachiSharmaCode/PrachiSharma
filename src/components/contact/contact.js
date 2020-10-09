import React, { Component } from "react";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contactLink">
        <h1 className="contactHeading">Let's Talk</h1>
        <p className="contact-message">
          Just a ping away.<br></br>
          You have any opportunity, question, want to discuss anything or just
          want to say hi,<br></br>
          feel free to message.
        </p>
        <div className="mail-contact">
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
        </div>
        <div className="socail-icon-contact">
          <a
            href="https://www.linkedin.com/in/prachi-sharma-b12147133"
            target="_blank"
          >
            <i className="fa fa-linkedin icon-contact"></i>
          </a>

          <a href="https://github.com/PrachiSharmaCode" target="_blank">
            <i className="fa fa-github icon-contact"></i>
          </a>

          <a href="https://www.facebook.com/prachi.sharma.122" target="_blank">
            <i className="fa fa-facebook icon-contact" aria-hidden="true"></i>
          </a>

          <a href="https://www.instagram.com/prachieq/" target="_blank">
            <i className="fa fa-instagram icon-contact" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

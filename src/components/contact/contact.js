import React, { Component } from "react";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <h1 className="contact-heading">Let's Talk!</h1>
        <p className="contact-message">
          Just a ping away.
          <br />
          Whether you have an opportunity to discuss, questions to ask, ideas to brainstorm, or simply want to say hello,
          <br />
          feel free to drop a message.
        </p>
        <div className="socail-icon-contact">
          <a
            href="https://www.linkedin.com/in/prachi-sharma-b12147133"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin icon-contact"></i>
          </a>

          <a href="https://github.com/PrachiSharmaCode" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github icon-contact"></i>
          </a>

          <a href="https://www.facebook.com/prachi.sharma.122" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook icon-contact" aria-hidden="true"></i>
          </a>

          <a href="https://www.instagram.com/prachieq/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram icon-contact" aria-hidden="true"></i>
          </a>
        </div>
        <div className="mail-contact">
          <a
            className="contact-mail-address"
            href="mailto:prachisharma.edu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <em>prachisharma.edu@gmail.com</em>
          </a>
        </div>
      </div>
    );
  }
}

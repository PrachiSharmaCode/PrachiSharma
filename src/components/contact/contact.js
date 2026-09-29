import React, { forwardRef } from "react";
import "./contact.css";


const Contact = forwardRef((_, ref) => {

  return(<div ref={ref} className="contact" id="contact">
    <div className="contact-right">
      <p className="social-connect-message">Connect with me</p>
      <div className="socail-icon-contact fade-in-y">
        <div className="social-icon-row">
          <div>
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/prachi-sharma-b12147133"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <i
                className="fa fa-linkedin icon-contact fade-in-y"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div>
            <a
              className="social-icon"
              href="https://github.com/PrachiSharmaCode?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <i
                className="fa fa-github icon-contact fade-in-y"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-left">
      <h1 className="contact-heading fade-in-y">Let's Talk!</h1>
      <p className="contact-message fade-in-y">
        I'm just a ping away. <br></br>
        Whether you have an opportunity to discuss, questions to ask, ideas to brainstorm, or simply want to say hello, <br /> feel free to reach me at&nbsp;
        <a
          className="contact-mail-address"
          href="mailto:prachisharma.edu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          prachisharma.edu@gmail.com
        </a>
        .
      </p>
    </div>
  </div>);
});


export default Contact;

import React, { forwardRef } from "react";
import "./contact.css";


const Contact = forwardRef((props, ref) => {

  return(<div ref={ref} className="contact" id="contact">
    <div className="contact-left">
      <h1 className="contact-heading fade-in-y">Let's Talk!</h1>
      <p className="contact-message fade-in-y">
        I'm just a ping away. <br></br>
        Whether you have an opportunity to discuss, questions to ask, ideas to brainstorm, or simply want to say hello, feel free to reach me at&nbsp; <br></br>
        <a
          className="contact-mail-address fade-in-y"
          href="mailto:prachisharma.edu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fa fa-envelope" aria-hidden="true"></i> */}
          prachisharma.edu@gmail.com
        </a>
        .
      </p>
    </div>
    <div className="contact-right">
      <p className="social-connect-message">Connect with me</p>
      <div className="socail-icon-contact fade-in-y">
        <div className="social-icon-row">
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/prachi-sharma-b12147133">
              <button className="social-icon">
                <i className="fa fa-linkedin icon-contact fade-in-y"></i>
              </button>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://github.com/PrachiSharmaCode?tab=repositories">
              <button className="social-icon">
                <i className="fa fa-github icon-contact fade-in-y"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="social-icon-row fade-in-y">

          <div>
            <a target="_blank" href="https://www.instagram.com/prachi.ext">
              <button className="social-icon">
                <i className="fa fa-instagram icon-contact fade-in-y" aria-hidden="true"></i>
              </button>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.facebook.com/prachi.sharma.122">
              <button className="social-icon">
                <i className="fa fa-facebook icon-contact fade-in-y" aria-hidden="true"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>);
});


export default Contact;
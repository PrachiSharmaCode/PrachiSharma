import React, { useState, useEffect, forwardRef } from "react";
import "./aboutme.css";
import Me from "../../images/pp.jpg";
import reactLogo from "../../images/reactLogo.png";
import jsLogo from "../../images/jsLogo.png";
import typeScriptLogo from "../../images/tyLogo.png";
import nodeLogo from "../../images/nodeLogo.png";
import { trackEvent } from "../../utils/analytics";

const Aboutme = forwardRef((_, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const technologies = [
    { logo: reactLogo, name: "React" },
    { logo: typeScriptLogo, name: "TypeScript" },
    { logo: jsLogo, name: "JavaScript" },
    { logo: nodeLogo, name: "Node.js" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="main" id="about">
      <div className="about-container">
        <div className="about-hero">
          <div className="about-heading-row">
            <div className="intro">
              <p className="hi-check"><em>Hello, I'm</em></p>
              <h1 className="name">PRACHI SHARMA</h1>
            </div>

            <p className="about-heading-technologies" aria-label="Core technologies">
              {technologies.map((technology, index) => (
                <React.Fragment key={technology.name}>
                  {index > 0 && (
                    <span className="about-technology-separator" aria-hidden="true"> · </span>
                  )}
                  <span>{technology.name}</span>
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="about-details fade-in-y">
            <div className="about-details-inner">
              <div className="profile-media">
                <div className="profile-frame">
                  <img className="profileImg" src={Me} alt="Prachi Sharma" />
                </div>
              </div>

              <div className="about-content">
                <div className="about-summary fade-in-y">
                  <p className="about-summary-message">
                    I am a {" "}<span className="about-summary-highlight">full-stack software engineer with a focus on frontend development.</span>{" "}
                    I enjoy the mix of <span className="no-wrap">problem-solving</span> and technical thinking that comes with turning ideas into working products. {" "}
                    <br></br><br></br>
                    My experience spans large-scale technology
                    companies, research labs and early-stage startups. Across these environments, {" "}
                    <span className="about-summary-highlight">I have worked on products from technical design and
                      architecture through development and production.</span> I like looking at
                    the product as a whole, understanding how different parts of an
                    application work together, and thinking about how the decisions
                    we make today can affect how a product grows tomorrow.
                  </p>
                  <p className="about-career-summary">
                    <strong className="about-career-years">6+</strong>{" "}
                    years of experience building products at{" "}
                    <a className="about-company-link" href="https://aws.amazon.com/" target="_blank" rel="noreferrer" onClick={() => trackEvent("company_link_click", { company_name: "amazon_web_services" })}>AWS</a>
                    <span className="about-company-separator" aria-hidden="true"> · </span>
                    <a className="about-company-link" href="https://www.ford.com/" target="_blank" rel="noreferrer" onClick={() => trackEvent("company_link_click", { company_name: "ford_motor_company" })}>Ford Motor Company</a>
                    <span className="about-company-separator" aria-hidden="true"> · </span>
                    <a className="about-company-link" href="https://www.pnnl.gov/" target="_blank" rel="noreferrer" onClick={() => trackEvent("company_link_click", { company_name: "pnnl" })}>PNNL</a>
                    <span className="about-company-separator" aria-hidden="true"> · </span>
                    <a className="about-company-link" href="https://arvitech.in/" target="_blank" rel="noreferrer" onClick={() => trackEvent("company_link_click", { company_name: "arvi" })}>ARVI</a>
                  </p>
                  <p className="about-mobile-technologies" aria-label="Core technologies">
                    React · TypeScript · JavaScript · Node.js
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-closing-message">
            <p>
              Take a stroll through my portfolio, and if something here resonates with
              you, I’d love to connect.
            </p>
          </div>
        </div>
      </div>

      {!isScrolled && (
        <div className="scroll-down-div">
          <div className="scroll-down-container">
            <div className="scroll-down-action"></div>
          </div>
        </div>
      )}
    </section>
  );
});

export default Aboutme;

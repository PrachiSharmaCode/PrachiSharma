import React, { useState, useEffect, forwardRef } from "react";
import "./aboutme.css";
// import Me from "../../images/7226598A-81D5-4874-B404-867A7143316C.jpg";
import Me from "../../images/pp.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Aboutme = forwardRef((props, ref) => {


  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 100;
    const position = window.pageYOffset;
    setIsScrolled(position > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <div ref={ref} className="main" id="about">
      <div className="container">
        <div className="intro">
          <p className="hi-check"><em>Hello, I am</em></p>
          <h1 className="name">PRACHI SHARMA</h1>
        </div>
        <div className="pro-container">
          <div>
            <div>
              <img className="profileImg" src={Me} alt="prachi"></img>
            </div>
          </div>
          <div className="intro-para fade-in-y">
            <p>
              I am a software developer based in vibrant city of Seattle. <br></br><br></br> With a background encompassing 5 years of experience in the industry
              and a Master's degree in Computer Science from <a className="about-link" target="1" href="https://seattle.northeastern.edu/">Northeastern University <FontAwesomeIcon className="external-link-icon" icon={faArrowUpRightFromSquare} /></a>, I specialize in transforming innovative ideas into interactive digital solutions.<br></br>
              <br></br>
              My expertise lies in frontend development, complemented by a strong understanding of backend technologies. <br></br><br></br>
              Take a journey through my portfolio. <br></br>If you have an opportunity that aligns with my expertise, I would love to connect and explore the possibilities.
            </p>
          </div>
        </div>
      </div>
      {
          !isScrolled && <div className="scroll-down-div">
            <div className="scroll-down-container">
              <div className="scroll-down-action">
              </div>
            </div>
          </div>
        }
    </div>);
});

export default Aboutme;
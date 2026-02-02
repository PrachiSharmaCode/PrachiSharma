import React, { useState, useEffect, forwardRef } from "react";
import "./aboutme.css";
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

  return (
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
              I am a Software Engineer who enjoys building smooth, user-friendly frontend experiences while supporting them with reliable backend work. 
              I have <span className="intro-para-highlight">6 years of experience</span> working with <span className="intro-para-highlight">React, JavaScript, TypeScript, Node.js,</span> and <span className="intro-para-highlight">AWS,</span> and I hold a Master’s in Computer Science from {" "}
              <a className="about-link" target="1" href="https://seattle.northeastern.edu/">Northeastern University <FontAwesomeIcon className="external-link-icon" icon={faArrowUpRightFromSquare} /></a>.
              <br/><br/>
              Take a stroll and explore my portfolio!
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
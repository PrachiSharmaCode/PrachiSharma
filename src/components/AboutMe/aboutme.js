import React, { useState, useEffect } from "react";
import "./aboutme.css";
import Me from "../../images/prachipic.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function Aboutme() {

  const [isScrolled, setIsScrolled] = useState(false);
  let [toolTip, setToolTip] = useState(false);

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
    <>
      <div className="main">

        <div className="container-flex">
          <div>
            <div className="welcome">
              <div className="check">
                <img className="profileImg" src={Me} alt="prachi"></img>
              </div>
              <p ><em>Hello, I am</em></p>
            </div>
            <div className="introduction">
              <p className="head-name">PRACHI SHARMA</p>
            </div>
          </div>
          <div className="subContainer-flex">
            <div className="lead">
              <p>
                
                  I am a software developer based in vibrant city of Seattle. <br></br><br></br> With a background encompassing 5 years of experience in the industry
                  and a Master's degree in Computer Science from <a className="about-link" target="1" href="https://seattle.northeastern.edu/">Northeastern University <FontAwesomeIcon className="external-link-icon" icon={faArrowUpRightFromSquare} /></a>, I specialize in transforming innovative ideas into interactive digital solutions.<br></br>

                  My expertise lies in frontend development, complemented by a strong understanding of backend technologies. <br></br><br></br>



            
              Take a journey through my portfolio to explore my projects, skills, and experiences. If you have an opportunity that aligns with my expertise, I would love to connect and explore the possibilities.
            
                
              </p>

            </div>
          </div>
          {
            !isScrolled && <div className="scroll-down-div">
              <div className="scroll-down-container">
                <div className="scroll-down-action"></div>
              </div>
            </div>
          }
        </div>
        <div>
        </div>

      </div>
    </>
  );
}



{/* <span onMouseLeave={() => setToolTip(false)} onMouseEnter={() => setToolTip(true)} className="tooltip-text"> 5 years of experience */}
                    {/* {toolTip &&
                      <>
                        <span className="tooltip-arrow"></span>
                        <span className="tooltip-container">
                          <button className="close-tooltip">
                           x
                          </button>
                          I have gained experience from following exteemed companies: <br></br><br></br>
                          Ford Motors:<br></br> Software Engineer  <br></br><br></br>
                          Amazon: <br></br> Software Engineer  <br></br><br></br>
                          Pacific Northwest National University: <br></br> Post Master Research Associate  <br></br><br></br>
                        </span>
                      </>
                    } */}
                  {/* </span>  */}

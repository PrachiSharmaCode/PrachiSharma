import React, { useRef, useEffect, useState, Component, forwardRef } from "react";
import "./timeline.css";

const Timeline = forwardRef((props, ref) => {
// const Timeline = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);
  const [timeline, setTimeline] = useState([]);
  const scrollableDivRef = useRef(null);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);


  const events = [
    { id: 1, date: 'Dec 2022', extraText: "Started working as", company: 'Ford Motors', position: 'Software Engineer', icon: "fa fa-briefcase", location: "Seattle, WA, USA" },
    { id: 2, date: 'Apr 2021', extraText: "Started working as", company: 'Amazon', position: 'Frontend Engineer', icon: "fa fa-briefcase", location: "Seattle, WA, USA" },
    { id: 3, date: 'Jan 2019', extraText: "Started working as", company: 'Pacific Northwest Nationl Laboratory', position: 'Post Master Research Associate', icon: "fa fa-briefcase", location: "Richland, WA, USA" },
    { id: 4, date: 'May 2018', extraText: "graduated with", company: 'Northeastern University', position: 'Masters Degree in Computer Science', icon: "fa fa-graduation-cap", location: "Seattle, WA, USA" },
    { id: 5, date: 'Aug 2017', extraText: "Started working as", company: 'Northeastern University', position: 'Graduate Teaching Assistant', icon: "fa fa-briefcase", location: "Seattle, WA, USA" },
    { id: 5, date: 'Sept 2016', extraText: "start persuing", company: 'Northeastern University', position: 'Masters Degree in Computer Science', icon: "fa fa-briefcase", location: "Seattle, WA, USA" },
    { id: 6, date: 'May 2015', extraText: "graduated with", company: 'Jaipur Engineer College Research Center', position: 'Bachloers degree in Information technology', icon: "fa fa-graduation-cap", location: "Jaipur, Rajasthan, India" },
    { id: 7, date: 'May 2011', extraText: "graduated from", company: 'L.K.Shinghania Education Center', position: 'High School', icon: "fa fa-graduation-cap", location: "Gotan, Rajasthan, India" },

  ];

  useEffect(() => {
    const newTimeline = [];
    for (let i = 0; i < events.length; i++) {
      if (i < events.length) {
        newTimeline.push(
          <div key={events[i].id} className="event-description">
            <div className="time-description-container">
              <div className="time-description">
                <i className={`${events[i].icon} event-icon`} aria-hidden="true"></i>
                <p>{events[i].company}</p>
                <p className="timeline-extra-text"><em>{events[i].extraText}</em></p>
                <div className="title-description">
                  <p className="timeline-position">{events[i].position}</p>
                  <p>{events[i].location}</p>
                </div>
              </div>
            </div>
            <div className="under-line">
              <div className="continue-line"></div>
              <div>
                <div className="timeline-connection"></div>
                <div className="timeline-event"></div>
              </div>
              <div className="next-line"></div>
            </div>
            <p className="event-date">{events[i].date}</p>
          </div>
        );
      }
    }
    setTimeline(newTimeline);
  }, [start, end]);

  const scroll = (scrollOffset) => {

    if (!nextButtonClicked) {
      setNextButtonClicked(true);
    }
  };

  return (<>
    <div ref={ref} className="timeline-box">
      <div className="div-heading">
        <p>TIMELINE</p>
      </div>
      <div onScroll={scroll} ref={scrollableDivRef} className="timeline-container">
        <div className="timeline">
          <div className="timeline-content">

            <div className="instruction-text">
            <p>Scroll to see more <i class="fa fa-arrow-right nextButton"></i></p>
              {/* {
                !nextButtonClicked && <p>Scroll to see more <i class="fa fa-arrow-right nextButton"></i></p>
              } */}
            </div>
            <div className="timeline-text">
              {timeline}
            </div>
          </div>
        </div>
        <div className="timeline-buttons">
        </div>
      </div>
    </div>
  </>);
});

export default Timeline;

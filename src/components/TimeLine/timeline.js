import React, { useRef, useEffect, useState, forwardRef } from "react";
import "./timeline.css";
import { trackEvent } from "../../utils/analytics";

const Timeline = forwardRef((_, ref) => {
  const scrollableDivRef = useRef(null);
  const timelineScrollMilestones = useRef(new Set());
  const [isTimelineAtStart, setIsTimelineAtStart] = useState(true);
  const [isTimelineScrollable, setIsTimelineScrollable] = useState(false);


  const events = [
    { id: 0, date: 'May 2024', company: 'ARVI', extraText: 'Started working as', position: 'Software Engineer (Frontend-Focused)', icon: "fa fa-briefcase", },
    { id: 1, date: 'Dec 2022', company: 'Ford Motor Company', extraText: 'Started working as', position: 'Software Engineer', icon: "fa fa-briefcase",  },
    { id: 2, date: 'Apr 2021', company: 'Amazon Web Services', extraText: 'Started working as', position: 'Frontend Engineer', icon: "fa fa-briefcase", },
    { id: 3, date: 'Jan 2019', company: 'Pacific Northwest National Laboratory', extraText: 'Started working as', position: "Post-Master's Research Associate", icon: "fa fa-briefcase"},
    { id: 4, date: 'May 2018', company: 'Northeastern University', extraText: 'Graduated with', position: "Master's Degree in Computer Science", icon: "fa fa-graduation-cap"},
    { id: 6, date: 'May 2015', company: 'Jaipur Engineering College and Research Centre', extraText: 'Graduated with', position: "Bachelor's Degree in Information Technology", icon: "fa fa-graduation-cap"},
  ];

  useEffect(() => {
    const timelineElement = scrollableDivRef.current;

    if (!timelineElement) {
      return undefined;
    }

    let animationFrameId;
    let isActive = true;

    const updateTimelineOverflow = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        if (!isActive) {
          return;
        }

        const hasHorizontalOverflow =
          timelineElement.scrollWidth > timelineElement.clientWidth + 1;

        setIsTimelineScrollable((currentValue) =>
          currentValue === hasHorizontalOverflow
            ? currentValue
            : hasHorizontalOverflow
        );
      });
    };

    updateTimelineOverflow();
    window.addEventListener("resize", updateTimelineOverflow);

    if (document.fonts?.ready) {
      document.fonts.ready.then(updateTimelineOverflow);
    }

    return () => {
      isActive = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateTimelineOverflow);
    };
  }, []);

  const scroll = (event) => {
    const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
    setIsTimelineAtStart(scrollLeft <= 2);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const depth = Math.round((scrollLeft / maxScroll) * 100);
    [25, 50, 75, 100].forEach((milestone) => {
      if (depth >= milestone && !timelineScrollMilestones.current.has(milestone)) {
        timelineScrollMilestones.current.add(milestone);
        trackEvent("timeline_scroll", { percent: milestone });
      }
    });
  };

  return (<>
    <div ref={ref} id="timeline" className="timeline-box">
      <h2 className="div-heading fade-in-y">TIMELINE</h2>
      <div className="timeline-container fade-in-x">
        <div className="timeline ">
          <div onScroll={scroll} ref={scrollableDivRef} className="timeline-content">

            {isTimelineScrollable && (
              <div
                className={`instruction-text ${
                  isTimelineAtStart ? "" : "instruction-text-hidden"
                }`}
                aria-hidden={!isTimelineAtStart}
              >
                <p>Scroll to see more <i className="fa fa-arrow-right nextButton" aria-hidden="true"></i></p>
              </div>
            )}
            <div className="timeline-text ">
              {events.map((event) => (
                <div key={event.id} className="event-description ">
                  <div className="time-description-container">
                    <div className="time-description">
                      <i className={`${event.icon} event-icon`} aria-hidden="true"></i>
                      <div className="timeline-company-band">
                        <p className="timeline-company">{event.company}</p>
                        <p className="timeline-extra-text">{event.extraText}</p>
                        <p className="timeline-position">{event.position}</p>
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
                  <p className="event-date">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
});

export default Timeline;

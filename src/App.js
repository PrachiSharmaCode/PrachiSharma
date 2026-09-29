import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/aboutme";
import Skills from "./components/Skills/skills";
import Projects from "./components/projects/projects";
import Timeline from "./components/TimeLine/timeline";
import Contact from "./components/contact/contact";
import { trackEvent } from "./utils/analytics";

export default function App() {

  const [activeSection, setActiveSection] = useState('');

  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const timelineRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const cleanupFadeX = fadex();
    const cleanupFadeY = fadey();
    let cleanupNavigation;

    if (
      aboutRef.current &&
      skillRef.current &&
      projectRef.current &&
      timelineRef.current &&
      contactRef.current
    ) {
      cleanupNavigation = checkFun();
    }

    return () => {
      cleanupFadeX?.();
      cleanupFadeY?.();
      cleanupNavigation?.();
    };
  }, []);

  useEffect(() => {
    const sections = [
      { ref: aboutRef, name: "about" },
      { ref: skillRef, name: "skills" },
      { ref: projectRef, name: "featured_work" },
      { ref: timelineRef, name: "timeline" },
      { ref: contactRef, name: "contact" },
    ];
    const viewedSections = new Set();
    const engagedSections = new Set();
    const engagementTimers = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.dataset.analyticsSection;
          if (!sectionName) return;

          if (entry.isIntersecting) {
            if (!viewedSections.has(sectionName)) {
              viewedSections.add(sectionName);
              trackEvent("section_view", { section_name: sectionName });
            }

            if (!engagedSections.has(sectionName) && !engagementTimers.has(sectionName)) {
              const timer = window.setTimeout(() => {
                engagedSections.add(sectionName);
                engagementTimers.delete(sectionName);
                trackEvent("section_engaged", {
                  section_name: sectionName,
                  visible_seconds: 3,
                });
              }, 3000);
              engagementTimers.set(sectionName, timer);
            }
          } else if (engagementTimers.has(sectionName)) {
            window.clearTimeout(engagementTimers.get(sectionName));
            engagementTimers.delete(sectionName);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.dataset.analyticsSection = name;
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
      engagementTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const reportedDepths = new Set();
    const milestones = [25, 50, 75, 90];

    const handleScrollDepth = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const depth = Math.round((window.scrollY / scrollableHeight) * 100);
      milestones.forEach((milestone) => {
        if (depth >= milestone && !reportedDepths.has(milestone)) {
          reportedDepths.add(milestone);
          trackEvent("page_scroll_depth", { percent: milestone });
        }
      });
    };

    window.addEventListener("scroll", handleScrollDepth, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollDepth);
  }, []);

  const fadey = () => {
    const elements = document.querySelectorAll(".fade-in-y");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }

  const fadex = () => {

    const elements1 = document.querySelectorAll(".fade-in-x");

    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer1.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements1.forEach((el) => observer1.observe(el));

    return () => observer1.disconnect();

  }

  const checkFun = () => {
    const sections = [
      { ref: aboutRef, name: "about" },
      { ref: skillRef, name: "skills" },
      { ref: projectRef, name: "projects" },
      { ref: timelineRef, name: "timeline" },
      { ref: contactRef, name: "contact" },
    ];

    const isAtPageEnd = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (isAtPageEnd()) {
          setActiveSection("contact");
          return;
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45px 0px -70% 0px",
        threshold: 0,
      }
    );

    const handlePageEnd = () => {
      if (isAtPageEnd()) {
        setActiveSection("contact");
      }
    };
  
    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    window.addEventListener("scroll", handlePageEnd, { passive: true });
    handlePageEnd();
  
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handlePageEnd);
    };
  };
  

  const scrollToSection = (section) => {
    const sectionRefs = {
      about: aboutRef,
      skills: skillRef,
      projects: projectRef,
      timeline: timelineRef,
      contact: contactRef,
    };

    const target = sectionRefs[section]?.current;
    if (!target) return;

    const navbarOffset = 45;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  return (<>
    <div className="app-back">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} ></Header>
      <AboutMe  ref={aboutRef}></AboutMe>
      <Skills ref={skillRef} ></Skills>
      <Projects ref={projectRef} ></Projects>
      <Timeline ref={timelineRef} ></Timeline>
      <Contact ref={contactRef}></Contact>
      <div className="footer">
        <p><em>Developed and Designed by <a href="#">Prachi Sharma</a>.</em></p>
      </div>
    </div>
  </>);
}

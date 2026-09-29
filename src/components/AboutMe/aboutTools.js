import React from "react";
import "./aboutTools.css";
import { trackEvent } from "../../utils/analytics";

export default function AboutTools({ technologies }) {
  return (
    <div className="about-tools">
      {/* <p className="about-tools-heading">TECH I WORK WITH</p> */}
      <div className="about-tool-list">
        {technologies.map((technology) => (
          <div className="about-tool" key={technology.name}>
            <img src={technology.logo} alt="" aria-hidden="true" />
            <span>{technology.name}</span>
          </div>
        ))}
        <a
          className="about-tool-more"
          href="#skills"
          onClick={() => trackEvent("skills_link_click", { source: "about" })}
        >
          View all skills
        </a>
      </div>
    </div>
  );
}

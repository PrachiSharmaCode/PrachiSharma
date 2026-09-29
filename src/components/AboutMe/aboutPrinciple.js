import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./aboutPrinciple.css";

export default function AboutPrinciple({ icon, title, description }) {
  return (
    <article className="about-principle fade-in-y">
      <div className="about-principle-icon-wrap">
        <FontAwesomeIcon className="about-principle-icon" icon={icon} aria-hidden="true" />
      </div>
      <div>
        <h2 className="about-principle-title">{title}</h2>
        <p className="about-principle-description">{description}</p>
      </div>
    </article>
  );
}

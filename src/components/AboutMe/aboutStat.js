import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./aboutStat.css";

export default function AboutStat({ icon, value, label }) {
  return (
    <div className="about-stat">
      <FontAwesomeIcon className="about-stat-icon" icon={icon} aria-hidden="true" />
      <div>
        <p className="about-stat-value">{value}</p>
        <p className="about-stat-label">{label}</p>
      </div>
    </div>
  );
}

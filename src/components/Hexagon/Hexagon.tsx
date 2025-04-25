import React from "react";
import { ProjectBrief } from "../../model/ProjectBrief";
import "./styles.css";

const Hexagon: React.FC<ProjectBrief> = ({ image, title, description }) => {
  return (
    <div className="hexagon-wrapper">
      <div className="hexagon-border"></div>
      <div className="hexagon">
        <div className="hex-content">
          <div className="hex-image-container">
            <img src={image} alt={title} className="hex-image" />
          </div>
          <div className="caption">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hexagon;

import React from "react";
import Hexagon from "../Hexagon/Hexagon";
import "./styles.css";
import { ProjectBrief } from "../../model/ProjectBrief";

interface HexagonRowProps {
  rowIndex: number;
  projects: ProjectBrief[];
}

const HexagonRow: React.FC<HexagonRowProps> = ({ rowIndex, projects }) => {
  return (
    <div className={`hex-row ${rowIndex % 2 === 0 ? "offset" : ""}`}>
      {projects.map((project, colIndex) => (
        <Hexagon
          key={`hex-${rowIndex}-${colIndex}`}
          image={project.image}
          title={project.title}
          description={`${colIndex}: ${project.description}`}
        />
      ))}
    </div>
  );
};

export default HexagonRow;

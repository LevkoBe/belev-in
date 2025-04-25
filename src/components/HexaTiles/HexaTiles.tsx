import React, { useEffect, useState } from "react";
import { ProjectBrief } from "../../model/ProjectBrief";
import {
  calculateHexesPerRow,
  splitInAlternatingChunks,
} from "../../helpers/Tiling";
import HexagonRow from "../HexagonRow/HexagonRow";
import "./styles.css";

interface HexagonTilesProps {
  projectBriefs: ProjectBrief[];
}

const HexagonTiles: React.FC<HexagonTilesProps> = ({ projectBriefs }) => {
  const [hexesPerRow, setHexesPerRow] = useState(3);

  useEffect(() => {
    const handleResize = () => setHexesPerRow(calculateHexesPerRow());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const alternatingSizeChunks = splitInAlternatingChunks(
    projectBriefs,
    hexesPerRow
  );

  return (
    <div className="app">
      <div className="hex-grid">
        {alternatingSizeChunks.map((projects, rowIndex) => (
          <HexagonRow
            key={`row-${rowIndex}`}
            rowIndex={rowIndex}
            projects={projects}
          />
        ))}
      </div>
    </div>
  );
};

export default HexagonTiles;

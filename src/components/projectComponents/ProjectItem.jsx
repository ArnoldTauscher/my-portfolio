import PropTypes from 'prop-types';
import { useState } from 'react';

import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";

export const ProjectItem = ({ title, description, tech, githubLink, githubReadmeLink, imageUrl, projectLink }) => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = () => {
    if (!projectLink) {
      setTooltip("Keine Webseite verfügbar für dieses Projekt.");
    }
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-center mb-12 relative">
      <ProjectContent
        title={title}
        description={description}
        tech={tech}
        githubLink={githubLink}
        githubReadmeLink={githubReadmeLink}
      />

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProjectImage
          title={title}
          imageUrl={imageUrl}
          projectLink={projectLink || imageUrl}
        />
      </div>

      {tooltip && (
        <div className="absolute buttom-0 right-0 bg-errie-black text-white text-sm p-2 rounded border border-solid border-white shadow-lg pointer-events-none">
          {tooltip}
        </div>
      )}
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  githubLink: PropTypes.string.isRequired,
  githubReadmeLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};


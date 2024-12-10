import PropTypes from 'prop-types';

import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";

export const ProjectItem = ({ title, description, tech, githubLink, githubReadmeLink, imageUrl, projectLink }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 items-center mb-12">
      <ProjectContent
        title={title}
        description={description}
        tech={tech}
        githubLink={githubLink}
        githubReadmeLink={githubReadmeLink}
      />

      <ProjectImage
        title={title}
        imageUrl={imageUrl}
        projectLink={projectLink}
      />
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
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


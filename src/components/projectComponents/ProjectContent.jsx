import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { BUTTON_TEXT } from "../../constant/projectsData";
import { renderTechImages } from "./renderTechImages";

export const ProjectContent = ({
  title,
  description,
  tech,
  githubLink,
  githubReadmeLink,
}) => {
  return (
    <motion.div
      className="ml-0 flex max-w-[584px] flex-col items-start text-start md:ml-5"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex">        
        {Array.isArray(title) ? (
          <>
          <div className="flex flex-col">
            {title.map((item, index) => (
              <h3 key={index} className="text-subtitle-base mb-2">
                {item}
              </h3>
            ))}
            </div>
            {renderTechImages(tech)}
          </>
        ) : (
          <div className="flex">
            <h3 className="text-subtitle-base mb-2 mr-3">
              {title}
            </h3>
            {renderTechImages(tech)}
          </div>
        )}
        
      </div>
      <p className="mb-4 font-source-sans text-sm lg:text-base">
        {description}
      </p>
      <div className="flex">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 project-btn-base"
        >
          {BUTTON_TEXT.GITHUB_REPOSITORY}
        </a>
        <a
          href={githubReadmeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn-base"
        >
          {BUTTON_TEXT.GITHUB_README}
        </a>
      </div>
    </motion.div>
  );
};

ProjectContent.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  githubLink: PropTypes.string.isRequired,
  githubReadmeLink: PropTypes.string.isRequired,
};

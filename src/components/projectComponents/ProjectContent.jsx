import PropTypes from 'prop-types';
import { motion } from "framer-motion";

import { BUTTON_TEXT } from '../../constant/projectsData';
import { renderTechImages } from './renderTechImages';

export const ProjectContent = ({ title, description, tech, githubLink, githubReadmeLink }) => {

  return (
    <motion.div
      className="max-w-[584px] flex flex-col items-starttext-start ml-0 md:ml-5"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className='flex'>
        <h3 className="lg:text-2xl md:text-xl text-lg font-semibold font-montserrat mb-2 mr-3">
          {title}
        </h3>
        {renderTechImages(tech)}
      </div>
      <p className="lg:text-base text-sm font-source-sans mb-4">
        {description}
      </p>
      <div className='flex'>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-risd-blue rounded-lg lg:min-h-[56px] min-h-[50px] text-nowrap md:text-base text-sm px-5 py-4 mr-5 font-semibold hover:scale-105 transition-all duration-300 ease-in-out"
        >
          {BUTTON_TEXT.GITHUB_REPOSITORY}
        </a>
        <a
          href={githubReadmeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-risd-blue rounded-lg lg:min-h-[56px] min-h-[50px] text-nowrap md:text-base text-sm px-5 py-4 font-semibold hover:scale-105 transition-all duration-300 ease-in-out"
        >
          {BUTTON_TEXT.GITHUB_README}
        </a>
      </div>
    </motion.div>
  );
};

ProjectContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  githubLink: PropTypes.string.isRequired,
  githubReadmeLink: PropTypes.string.isRequired
};

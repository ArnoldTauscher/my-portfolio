import PropTypes from 'prop-types';
import { motion } from "framer-motion";

export const ProjectImage = ({ title, imageUrl, projectLink }) => (
  <motion.div
    className="flex justify-center lg:justify-end"
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <a href={projectLink} target="_blank" rel="noopener noreferrer" aria-label={`Der Weblink zum Projekt ${title}`}>
      <img 
        src={imageUrl} 
        alt={title} 
        className='shadow-image hover:scale-105 transition-all duration-300 ease-in-out'
      />
    </a>
  </motion.div>
);

ProjectImage.propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
  imageUrl: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};


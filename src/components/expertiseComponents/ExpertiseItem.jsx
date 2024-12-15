import PropTypes from "prop-types";
import { useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { useGradientUpdater } from "../../hooks/useGradientUpdater";

export const ExpertiseItem = ({ title, imageUrl, link, style }) => {
  const gradientRef = useGradientUpdater();

  const controls = useAnimation();

  const handleHoverStart = useCallback(() => {
    controls.start({ scale: 1.05 });
  }, [controls]);

  const handleHoverEnd = useCallback(() => {
    controls.start({ scale: 1 });
  }, [controls]);

  return (
    <motion.div
      className="h-[140px] lg:h-[160px] bg-grad-theme-135 rounded-3xl flex flex-col justify-center items-center text-center mx-5"
      style={style}
      ref={gradientRef}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Dynamische Größe für Inhalte */}
      <div className="h-[134px] w-[134px] lg:h-[154px] lg:w-[154px] bg-black rounded-3xl">
        <h3 className="h-[25px] font-montserrat lg:mt-4 md:mt-2 mt-4 lg:mb-4 mb-2 font-semibold lg:text-xl md:text-lg text-base">
          {title}
        </h3>
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Der Weblink zur Information von ${title}`}>
          <img src={imageUrl} className="w-[82px] h-[82px] mx-auto" alt={`${title}-Logo`} />
        </a>
      </div>
    </motion.div>
  );
};

ExpertiseItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  link: PropTypes.string.isRequired,
  style: PropTypes.object,
};




import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { useGradientUpdater } from "../../hooks/useGradientUpdater";
import { GRID_LAYOUT } from "../../constant/gridLayout";

export const Module = ({ title, imageUrl, content }) => {
  const gradientRef = useGradientUpdater();
  const layoutData = GRID_LAYOUT.MODULE;

  return (
    <motion.div
      className={`bg-grad-theme-135 rounded-3xl overflow-hidden p-[3px] md:min-h-[444px] min-h-auto ${layoutData.cardColSpan}`}
      ref={gradientRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        className={`rounded-3xl overflow-hidden bg-jet flex relative ${layoutData.cardFlexCol} ${layoutData.cardGradientAfter} ${layoutData.cardGradientBefore} justify-between items-center h-full lg:gap-y-[26px] md:gap-y-5 gap-y-4`}
      >
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-15"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center w-full h-full p-5">
          <h4 className="lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold mb-4">
            {title}
          </h4>
          <div className="content-container flex-grow overflow-auto">
            {Array.isArray(content) ? (
              content.map((item, index) => (
                <div key={index} className="flex mb-2">
                  <span className="w-6 flex-shrink-0">-</span>
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <div className="flex mb-2">
                <span className="w-6 flex-shrink-0">-</span>
                <span>{content}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Module.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  content: PropTypes.array,
};

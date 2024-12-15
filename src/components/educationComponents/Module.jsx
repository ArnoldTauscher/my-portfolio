import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { useGradientUpdater } from "../../hooks/useGradientUpdater";
import { GRID_LAYOUT } from "../../constant/gridLayout";

export const Module = ({ title, imageUrl, content }) => {
  const gradientRef = useGradientUpdater();
  const layoutData = GRID_LAYOUT.MODULE;

  return (
    <motion.div
      className={`overflow-hidden min-h-auto md:min-h-card p-[3px] card-base ${layoutData.cardColSpan}`}
      ref={gradientRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        className={`relative flex h-full items-center justify-between overflow-hidden bg-jet rounded-3xl ${layoutData.cardFlexCol} ${layoutData.cardGradientAfter} ${layoutData.cardGradientBefore} gap-y-4 md:gap-y-5 lg:gap-y-[26px]`}
      >
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover opacity-15"
            src={imageUrl}
            alt={`${title}-Hintergrund`}
          />
        </div>
        <div className="relative z-10 flex h-full w-full flex-col items-center p-5">
          <h4 className="text-subtitle-base mb-4 text-center">
            {title}
          </h4>
          <div className="content-container flex-grow overflow-auto">
            {Array.isArray(content) ? (
              content.map((item, index) => (
                <div key={index} className="mb-2 flex">
                  <span className="w-6 flex-shrink-0">-</span>
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <div className="mb-2 flex">
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

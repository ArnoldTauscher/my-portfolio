import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { useGradientUpdater } from "../../hooks/useGradientUpdater";
import { GRID_LAYOUT } from "../../constant/gridLayout";

export const WorkplaceItem = ({
  title,
  date,
  company,
  imageUrl,
  companyLink,
}) => {
  const gradientRef = useGradientUpdater();

  const layoutData = GRID_LAYOUT.WORKPLACE_ITEM;

  return (
    <div className="grid grid-cols-3 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10">
      <motion.div
        className={`bg-grad-theme-135 rounded-3xl overflow-hidden p-[3px] md:min-h-[200px] min-h-auto ${layoutData.cardColSpan}`}
        ref={gradientRef}
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
        }}
      >
        <div
          className={`rounded-3xl overflow-hidden bg-jet flex relative ${layoutData.cardFlexCol} ${layoutData.cardGradientAfter} ${layoutData.cardGradientBefore} ${layoutData.cardContentPadding} justify-between items-center h-full lg:gap-y-[26px] md:gap-y-5 gap-y-4`}
        >
          <div
            className={`gap-y-2 flex flex-col items-center text-center relative z-10 pt-5`}
          >
            <p className="text-white lg:text-base tet-sm">{company}</p>
            <p className="text-white lg:text-base tet-sm">{date}</p>
          </div>
          <h4 className="lg:text-2xl text-base sm:text-lg md:text-xl text-white font-montserrat text-center font-semibold z-10">
            {title}
          </h4>
          {imageUrl && (
            <a href={companyLink} target="_blank" rel="noopener noreferrer">
              <img
                className={`z-10 relative ${layoutData.cardImgPadding}`}
                src={imageUrl}
                alt={title}
              />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

WorkplaceItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  companyLink: PropTypes.string,
};

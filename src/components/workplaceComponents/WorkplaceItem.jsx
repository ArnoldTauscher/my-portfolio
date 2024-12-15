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
    <div className="mt-10 grid grid-cols-3 gap-4 lg:mt-[65px] lg:gap-6 xl:gap-8 xxl:gap-10">
      <motion.div
        className={`min-h-auto md:min-h-[200px] card-base ${layoutData.cardColSpan}`}
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
          className={`relative flex h-full items-center justify-between overflow-hidden bg-jet rounded-3xl ${layoutData.cardFlexCol} ${layoutData.cardGradientAfter} ${layoutData.cardGradientBefore} ${layoutData.cardContentPadding} gap-y-4 md:gap-y-5 lg:gap-y-[26px]`}
        >
          <div
            className={`relative z-10 flex flex-col items-center gap-y-2 pt-5 text-center`}
          >
            <p className="text-white tet-sm lg:text-base">{company}</p>
            <p className="text-white tet-sm lg:text-base">{date}</p>
          </div>
          <h3 className="text-subtitle-base z-10 text-center text-base sm:text-lg md:text-xl lg:text-2xl"> {/* Wenn ich text-base und sm:text-lg Eigenschaften hier verwende, wird md:text-xl und lg:text-2xl aus der tailwind.config.js nicht Funktionieren */}
            {title}
          </h3>
          {imageUrl && (
            <a href={companyLink} target="_blank" rel="noopener noreferrer" aria-label={`Der Weblink zur Information von ${company}`}>
              <img
                className={`relative z-10 ${layoutData.cardImgPadding}`}
                src={imageUrl}
                alt={`Bild von ${company}`}
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

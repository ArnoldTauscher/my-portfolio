import { useMemo } from 'react';
import { motion } from "framer-motion";
import { SECTION_TITLE, EXPERTISE_DATA } from "../../constant/expertiseData";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { ExpertiseItem } from "../expertiseComponents/ExpertiseItem";
import { Logos } from "../../assets/logos";

export const Expertise = () => {
  // Dynamische Breite basierend auf dem Viewport
  const itemWidth = window.innerWidth >= 1024 ? 200 : 180; // Breite jedes Elements in Pixeln
  const totalWidth = useMemo(() => EXPERTISE_DATA.length * itemWidth, [itemWidth]);

  const containerVariants = {
    animate: {
      x: [0, -totalWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Gesamtdauer der Animation in Sekunden
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="expertise" className="w-100% mx-auto lg:py-[65px] py-10 text-white px-4 overflow-hidden">
      <SectionTitle title={SECTION_TITLE} />
      <div className="relative">
        <motion.div
          className="flex"
          variants={containerVariants}
          animate="animate"
          style={{ width: `${totalWidth * 2}px` }}
        >
          {[...EXPERTISE_DATA, ...EXPERTISE_DATA].map((expertise, index) => (
            <ExpertiseItem
              key={`${expertise.id}-${index}`}
              id={expertise.id}
              title={expertise.title}
              imageUrl={Logos[expertise.imageUrl]}
              link={expertise.link}
              style={{ width: `${itemWidth}px` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};




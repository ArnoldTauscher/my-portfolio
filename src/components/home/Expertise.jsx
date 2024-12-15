import { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { SECTION_TITLE, EXPERTISE_DATA } from "../../constant/expertiseData";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { ExpertiseItem } from "../expertiseComponents/ExpertiseItem";
import { Logos } from "../../assets/logos";

const Expertise = () => {
  // Refs und State für die Animation
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const startTimeRef = useRef(Date.now());
  const remainingDurationRef = useRef(30);
  const totalDuration = 30; // Gesamtdauer der Animation in Sekunden

  // Berechnung der Elementbreite und Gesamtbreite
  const itemWidth = window.innerWidth >= 1024 ? 200 : 180;
  const totalWidth = useMemo(() => EXPERTISE_DATA.length * itemWidth, [itemWidth]);

  // Hilfsfunktion zum Runden auf ganze Zahlen
  const roundToWholeNumber = (num) => Math.round(num);

  // Funktion zum Neustarten der Animation
  const restartAnimation = useCallback((duration, width) => {
    remainingDurationRef.current = duration;
    controls.start({
      x: [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    });
    startTimeRef.current = Date.now();
  }, [controls]);

  // Effect für die Aktualisierung der verbleibenden Zeit und Neustart der Animation
  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
        remainingDurationRef.current = roundToWholeNumber(
          Math.max(remainingDurationRef.current - elapsedTime, 0)
        );
  
        if (remainingDurationRef.current === 0) {
          restartAnimation(totalDuration, totalWidth);
        } else {
          startTimeRef.current = Date.now();
        }
      }, 1000);
  
      return () => clearInterval(intervalId);
    }
  }, [isHovered, restartAnimation, totalDuration, totalWidth]);

  // Haupteffekt für die Steuerung der Animation
  useEffect(() => {
    if (!isHovered) {
      const currentX = x.get();
      const progress = Math.abs(currentX) / totalWidth;
      const elapsedDuration = totalDuration * progress;
      remainingDurationRef.current = roundToWholeNumber(
        Math.max(totalDuration - elapsedDuration, 0)
      );
  
      console.log('Animation starting:', {
        currentX,
        progress,
        elapsedDuration,
        remainingDuration: remainingDurationRef.current,
      });
  
      if (remainingDurationRef.current > 0) {
        controls.start({
          x: [currentX, -totalWidth],
          transition: {
            x: {
              repeat: 0,
              duration: remainingDurationRef.current,
              ease: "linear",
            },
          },
        });
      } else {
        restartAnimation(totalDuration, totalWidth);
      }
      startTimeRef.current = Date.now();
    } else {
      console.log('Animation paused. Current x:', x.get());
      controls.stop();
    }
  
    return () => {
      if (controls) controls.stop();
    };
  }, [isHovered, controls, totalWidth, x, restartAnimation, totalDuration]);

  // Event-Handler für Maus-Interaktionen
  const handleMouseEnter = () => {
    console.log('Mouse entered. Pausing animation.');
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    console.log('Mouse left. Resuming animation.');
    setIsHovered(false);
  };

/*
  // Logger-Funktion für Debugging
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Animation status:', {
        currentX: x.get(),
        isHovered,
        remainingDuration: remainingDurationRef.current
      });
    }, 1000); // Log jede Sekunde
  
    return () => clearInterval(intervalId);
  }, [x, isHovered]);
*/

  // Render der Komponente
  return (
    <section id="expertise" className="w-100% mx-auto lg:py-[65px] py-10 text-white px-4 overflow-hidden">
      <SectionTitle title={SECTION_TITLE} />
      <div 
        className="relative overflow-hidden p-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <motion.div
          className="flex"
          animate={controls}
          style={{ x, width: `${totalWidth * 2}px` }}
        >
          {/* Duplizieren der Daten für nahtloses Looping */}
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

export default Expertise;

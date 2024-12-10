import { useEffect, useRef } from "react";

export const useGradientUpdater = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const updateGradient = () => {
      if (gradientRef.current) {
        const angle = performance.now() / 10 % 360;
        gradientRef.current.style.backgroundImage = `linear-gradient(${angle}deg, rgba(241, 178, 168, 1) 0%, rgb(236, 87, 168, 1) 49%, rgba(91, 90, 247, 1) 100%)`;
      }
      requestAnimationFrame(updateGradient);
    };
    requestAnimationFrame(updateGradient);
    return () => cancelAnimationFrame(updateGradient);
  }, []);

  return gradientRef;
};

export const useTextGradientUpdater = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const updateGradient = () => {
      if (gradientRef.current) {
        const time = performance.now() / 2500;
        const position = Math.sin(time) * 50 + 80;

        gradientRef.current.style.backgroundImage = `linear-gradient(90deg, 
          rgb(255, 255, 255) ${position - 100}%, 
          rgb(236, 87, 168) ${position - 25}%, 
          rgba(91, 90, 247, 1) ${position + 10}%)`;
      }
      requestAnimationFrame(updateGradient);
    };
    requestAnimationFrame(updateGradient);
    return () => cancelAnimationFrame(updateGradient);
  }, []);

  return gradientRef;
};
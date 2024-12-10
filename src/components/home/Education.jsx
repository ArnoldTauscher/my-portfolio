import { SECTION_TITLE, MODULES } from "../../constant/educationData";
import { useGradientUpdater } from "../../hooks/useGradientUpdater";
import { EducationDescription } from "../educationComponents/EducationDescription";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { Module } from "../educationComponents/Module";
import { Images } from "../../assets/images";

export const Education = () => {
  const gradientRef = useGradientUpdater();

  return (
    <section
      id="education"
      className="relative max-w-[1200px] w-[90%] mx-auto py-[35px] lg:py-[65px] text-white px-4 rounded-3xl overflow-hidden p-[3px] md:min-h-[200px] min-h-auto bg-grad-theme-135"
    >
      {/* Inhalt */}
      <div className="relative z-10">
        <SectionTitle title={SECTION_TITLE} />
        <div
          className="bg-grad-theme-135 rounded-3xl overflow-hidden text-center p-2"
          ref={gradientRef}
        >
          <EducationDescription />
        </div>
        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-[65px] mt-10">
          {MODULES.map((module) => (
            <Module
              key={module.id}
              title={module.title}
              imageUrl={Images[module.imageUrl]}
              content={module.content}
            />
          ))}
        </div>
      </div>

      {/* Pseudo-Hintergrund */}
      <div
        className="absolute inset-0 bg-grad-theme-135 opacity-50 pointer-events-none rounded-3xl"
        aria-hidden="true"
      ></div>
    </section>
  );
};


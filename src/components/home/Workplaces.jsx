import { SECTION_TITLE, WORKPLACES_DATA } from "../../constant/workplacesData";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { WorkplaceItem } from "../workplaceComponents/WorkplaceItem";
import { Images } from "../../assets/images";

export const Workplaces = () => {
  return (
    <section id="workplaces" className="max-w-[1200px] w-[90%] mx-auto py-[65px] text-white px-4">
      <SectionTitle title={SECTION_TITLE} />
      {WORKPLACES_DATA.map((workplace) => (
        <WorkplaceItem
          key={workplace.id}
          title={workplace.title}
          date={workplace.date}
          company={workplace.company}
          imageUrl={Images[workplace.imageUrl]}
          companyLink={workplace.companyLink}
        />
      ))}
    </section>
  );
};

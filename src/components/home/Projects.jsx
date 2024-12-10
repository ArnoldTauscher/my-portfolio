import { SECTION_TITLE, PROJECTS_DATA } from '../../constant/projectsData';
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { ProjectItem } from '../projectComponents/ProjectItem';
import { Images } from "../../assets/images";
import { Logos } from "../../assets/logos";

export const Projects = () => {
  return (
    <section id='projects' className="max-w-[1200px] w-[95%] mx-auto py-[65px] text-white px-4">

      <SectionTitle
        title={SECTION_TITLE}
      />
      {PROJECTS_DATA.map((project) => (
        <ProjectItem 
          key={project.id}
          title={project.title}
          description={project.description}
          tech={Array.isArray(project.tech) ? project.tech.map(t => Logos[t]) : Logos[project.tech]}
          githubLink={project.githubLink}
          githubReadmeLink={project.githubReadmeLink}
          imageUrl={Images[project.imageUrl]}
          projectLink={project.projectLink}
        />
      ))}
    </section>
  );
};

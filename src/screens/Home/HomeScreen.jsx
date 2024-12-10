import { Workplaces } from "../../components/home/Workplaces";
import { Education } from "../../components/home/Education";
import { Expertise } from "../../components/home/Expertise";
import { Projects } from "../../components/home/Projects";

const HomeScreen = () => {
  return (
    <div className="overflow-x-hidden">
      <Workplaces />
      <Education />
      <Expertise />
      <Projects />
    </div>
  )
}

export default HomeScreen

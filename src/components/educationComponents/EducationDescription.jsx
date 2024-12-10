import { DESCRIPTION } from "../../constant/educationData";

export const EducationDescription = () => {
  return (
    <div className="bg-jet rounded-3xl p-2">
      <h4 className="lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold">
        {DESCRIPTION.AS}
      </h4>
      <a
        className="text-blue-400"
        href={DESCRIPTION.EDUCATIONAL_INSTITUTION_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        {DESCRIPTION.EDUCATIONAL_INSTITUTION}
      </a>
      <p>
        {DESCRIPTION.RESULT}{" "}
        <span className="text-lg text-red-500">
          {DESCRIPTION.RESULT_PERCENTAGE}
        </span>
      </p>
      <p>{DESCRIPTION.PERIOD_OF_TIME}</p>
      <p>{DESCRIPTION.DEGREE}</p>
    </div>
  );
};

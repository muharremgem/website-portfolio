import { motion } from "framer-motion";
import experience from "../sanity/schemas/experience";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
       max-w-full px-10 justify-evenly mx-auto  items-center"
    >
      <h3 className="absolute top-24 xl:top-8 uppercase tracking-[20px]  text-gray-500 text-2xl mm:hidden md:block">
        Experience
      </h3>

      <div className=" flex space-x-5 overflow-x-scroll p-1 snap-x snap-mandatory  justify-center ">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

// scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80

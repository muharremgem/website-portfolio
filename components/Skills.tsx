import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import experience from "../sanity/schemas/experience";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative text-center md:text-left
     xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl mm:hidden md:block">
        Skills
      </h3>

      <h3 className="md:top-36 absolute  uppercase tracking-[3px] text-gray-500 text-sm mm:top-[5rem]  ">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid xx:grid-cols-5 gap-5 mm:grid-cols-4">
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
      {/* <div className="grid xx:grid-cols-5 gap-5 mm:grid-cols-4 ">
        {" "}
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div> */}
    </motion.div>
  );
}

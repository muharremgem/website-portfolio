import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
};

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
        }}
        src={urlFor(skill?.image).url()}
        className="rounded-full filter group-hover:grayscale transition duration-300 w-24 h-24 md:w-28 md:h-28 xl:w-[6rem] xl:h-[6rem] mm:w-[4rem] mm:h-[4rem]  ease-in-out  object-cover"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-[6rem] xl:h-[6rem] mm:w-[4rem] mm:h-[4rem] p-1 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

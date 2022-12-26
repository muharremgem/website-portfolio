import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col  justify-center  text-center rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] md:h-[650px] snap-center scrollbar      md:bg-[#292929]   mm:p-[5rem] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mm:bg-[rgb(36,36,36)] xl:p-10  ">
      {/*  mt-10 */}
      {/* bg- */}
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        src={urlFor(experience?.companyImage).url()}
        className="rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        alt="logo"
      />

      <div className="px-0 md:px-10 flex flex-col justify-center items-center  ">
        <h4 className="md:text-4xl font-light mm:text-[25px] py-2">
          {experience.jobTitle}
        </h4>
        <p className="font-bold md:text-2xl mt-1 mm:text-xl">
          {experience.company}
        </p>
        <div className="flex md:space-x-2 mm:space-x-1 xl:space-x-5 items-center justify-center my-2 py-1">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="md:h-10 md:w-10 rounded-lg mm:h-[30px] mm:w-[30px]"
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>
        <div>
          <p className="uppercase py-5 text-gray-300 ">
            <>
              {new Date(experience.dateStarted).toDateString()} -{" "}
              {experience.isCurrentlyWorkingHere
                ? " Present"
                : new Date(experience.dateEnded).toDateString()}
            </>
          </p>
        </div>
        <ul
          className="list-disc list-inside space-y-4 ml-5 text-lg max-h-96  overflow-y-scroll 
         scrollbar scrollbar-track-black text-left  scrollbar-thumb-[#F7AB0A]/80  "
        >
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

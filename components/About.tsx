import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

https: type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mm:hidden md:block">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="object-cover rounded-full md:rounded-lg -mb-20 md:mb-0 flex-shrink-0 w-56 h-56   
         md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-[4rem]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="aimg"
      />
      <div className="space-y-3 px-0 md:px-10  md:flex md:flex-col md:gap-6">
        <h4 className="text-4xl font-semibold mm:text-[25px] mm:mt-[5rem] md:text-4xl">
          Here is a<span className="text-green-700"> little </span>
          background
        </h4>
        <p className="text-sm md:text-xl mm:text-[12px]  text-left overflow-auto">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

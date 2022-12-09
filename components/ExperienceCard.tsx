import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900] snap-center
     bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] relative"
      >
        <Image
          src={
            "https://w7.pngwing.com/pngs/628/58/png-transparent-google-logo-google-search-google-now-google-text-trademark-service-thumbnail.png"
          }
          className="rounded-full"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          alt="sirketlogo"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light ">CEO of Google</h4>
        <p className="font-bold text-2xl mt-1 ">GOOGLE</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://reactjs.org/logo-og.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--g1u_jxZy--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4unrrweuaj1wyh25npgt.jpeg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work.... -Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Summary points Summary </li>
          <li>Summary points Summary points Summary </li>
          <li>Summary points Summary points Summary </li>
          <li>Summary points Summary points Summary </li>
          <li>Summary points Summary points Summary </li>
        </ul>
      </div>
    </article>
  );
}

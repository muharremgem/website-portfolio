import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

//
https: type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56   md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] relative"
      >
        <Image
          layout="fill"
          objectFit="cover"
          className="rounded-full md:rounded-lg"
          src="https://instagram.fist2-4.fna.fbcdn.net/v/t51.2885-15/258856017_938530360399341_882327211968710648_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fist2-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=335egfXsDckAX_xmSRy&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjcxMjA2Mjg0OTEyNTc2NTg3Mg%3D%3D.2-ccb7-5&oh=00_AfBevy6cTC-K88r0B48A59G1PGOawAIdOJN59vkVASgTVA&oe=63991E34&_nc_sid=30a2ef"
          alt="aboutimg"
        />
      </motion.div>
    </div>
  );
}

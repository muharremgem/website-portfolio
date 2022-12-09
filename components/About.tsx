import React from "react";
import { motion } from "framer-motion";

https: type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">
        About
      </h3>
      <div className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="https://pbs.twimg.com/profile_images/1447671101530775553/PpbiCpy7_400x400.jpg"
        />
      </div>
    </div>
  );
}

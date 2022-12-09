import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
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
    </article>
  );
}

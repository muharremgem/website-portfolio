import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center "
    >
      <div className="absolute border border-[#cf2bf8] rounded-full h-[200px] w-[200px] mt-[20rem] animate-ping  " />
      <div className=" absolute border border-[#343cd8] rounded-full h-[300px] w-[300px] mt-[20rem] animate-ping " />
      <div className=" absolute border border-[#33f030] rounded-full h-[500px] w-[500px] mt-[20rem] animate-ping " />
      <div className=" absolute  border border-[#e6f326] rounded-full opacity-20 h-[650px] w-[650px] mt-[20rem] animate-pulse" />
      <div className=" absolute  border border-[#f37f26] rounded-full opacity-20 h-[650px] w-[650px] mt-[20rem] animate-pulse" />
      <div className="absolute border border-[#fa2d2d] rounded-full h-[800px] w-[800px] mt-[20rem] " />
    </motion.div>
  );
}

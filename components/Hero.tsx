import Image from "next/image";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Muharrem GEM",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto">
        <Image
          src={
            "https://pbs.twimg.com/profile_images/1447671101530775553/PpbiCpy7_400x400.jpg"
          }
          className=" rounded-full"
          layout="fill"
          objectFit="cover"
          alt="img"
        />
      </div>
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[13px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}

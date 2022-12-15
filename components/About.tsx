import { motion } from "framer-motion";
import Image from "next/image";

https: type Props = {};

export default function About({}: Props) {
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
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">
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
        className="object-cover rounded-full md:rounded-lg -mb-20 md:mb-0 flex-shrink-0 w-56 h-56   md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] relative"
        src=""
        alt="aimg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a
          <span className="underline decoration-[#F7AB0A]/50"> little </span>
          background
        </h4>
        <p className="text-sm">
          1+ years experienced in IT and an expert front-end developer,
          interested in writing codes, skilled at developing complex solutions,
          creating responsive designs, possessing strong creative thinking
          skills, high energy and integrity. Ability to create algorithms
          effectively, and interact positively and communicate appropriately
          with team members. Quickly grasp new technologies and concepts to
          develop innovative and creative solutions to problems. Always eager to
          learn various technologies, tools and libraries. Especially interested
          in the Front end/Web Development, HTML, CSS, JS, React. Excited to
          learn new things and improve, lifetime student.You can access my
          projects from my Github account. | HTML | CSS | Js | React | Bootstrap
          | Tailwind |Basic Python | Basic SQL | Linux | Agile - Scrum - Kanban
          - Jira | SDLC | Git | GitHub | JQuery | Sass | Network |{" "}
        </p>
      </div>
    </motion.div>
  );
}

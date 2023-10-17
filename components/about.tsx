"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">

      Hi, my name is Kahtan Aldaioub and I am a 21-year-old <span className="font-medium">computer engineering student</span> at Tishreen University in Lattakia, Syria. I have been passionate about web development <span className="font-medium">since 2020</span> and have enjoyed learning and building projects in this field<span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution.

      In my free time, I enjoy playing <span className="font-medium">chess and booxing</span>. I find that these hobbies help me to <span className="font-medium">stay focused</span> and improve my problem-solving skills, which are also essential in web development.

      I am excited to continue <span className="font-medium">growing my skills</span> in web development and look forward to exploring new technologies and building innovative projects. <span className="font-medium">Thank you for visiting my portfolio!</span>
      </p>
    </motion.section>
  );
}

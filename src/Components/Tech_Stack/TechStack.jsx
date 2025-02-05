import { motion } from "motion/react";
import SectionHeading from "../utils/SectionHeading";
const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.4, ease: "easeInOut" }}
      id="education"
      className="flex flex-col items-center my-10 min-w-[100%]"
    >
      <SectionHeading name="Technology Stack" />
      {/*
      My Tech Stack
      Languages: JavaScript, C++, TypeScript, SQL, HTML, CSS
      Frameworks: React, Next, Nest.js, Mongoose, Express, Node, TailwindCSS, Bootstrap, ChakraUI, Aceternity UI
      Tools: Git, Github, VSCode, Postman, Vercel, Figma, Canva
      Databases: MongoDB, PostgreSQL, Firebase
      Languages: Hindi, English
      */}
      {/* Wrong ones - Nest,  express, mongoose, next, react, css, html, sql, ts, cpp, */}
      <img src="../../../public/cpp.svg"/>
    </motion.div>
  );
};

export default TechStack;

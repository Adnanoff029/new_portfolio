import { motion } from "motion/react";
import SectionHeading from "../utils/SectionHeading";
import { techStackData } from "../../data/data";
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
      <div className="mt-5 min-w-[100%] mx-10">
        <div className="inline-grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-5 min-w-[100%] items-center justify-center">
          {techStackData.map((tech, index) => (
            <div className="flex items-center justify-center" key={index}>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                src={tech.source}
                alt="tech"
                className="h-20 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;

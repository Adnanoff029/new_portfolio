import { AnimatePresence, motion } from "motion/react";
import { educationData } from "../../data/data";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import SectionHeading from "../utils/SectionHeading";
const Education = () => {
  const [dropDown, setDropDown] = useState(
    new Array(educationData.length).fill(false)
  );
  const [isRotated, setIsRotated] = useState(
    new Array(educationData.length).fill(false)
  );
  const handleClick = (e, idx) => {
    let temp = [...dropDown];
    temp[idx] = !temp[idx];
    setDropDown(temp);
    let temp2 = [...isRotated];
    temp2[idx] = !temp2[idx];
    setIsRotated(temp2);
    e.target.style.transform =
      isRotated[idx] === false ? "rotate(180deg)" : "rotate(0deg)";
    e.target.style.transition = "all 0.5s ease-in-out";
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.4, ease: "easeInOut" }}
      id="education"
      className="flex flex-col items-center my-10 min-w-[100%]"
    >
      <SectionHeading name={"Education"} />
      <motion.div className="mt-4 min-w-[100%]">
        {educationData.map((education, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.5, ease: "easeInOut" }}
            className="text-xl border-2 my-3 p-2 rounded-md min-w-[100%] flex justify-between overflow-hidden whitespace-nowrap"
          >
            <div className="w-[100%]">
              <p>{education.name}</p>
              <AnimatePresence>
                {dropDown[idx] && (
                  <div>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="mt-2"
                    >
                      <img src={education?.image} className="rounded-md" />
                      <div className="flex items-center">
                        <div className="text-xl">{education.institution}</div>
                        <a
                          href={education.website}
                          target="_blank"
                          className="text-white mx-3 hover:text-red-400 transition-all"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      </div>
                      <div className="text-md">{education.degree}</div>
                      <div className="text-md">
                        {education.scoreType}:
                        <span className="text-red-400">{education.score}</span>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
            <div onClick={(e) => handleClick(e, idx)}>
              <IoIosArrowDropdown
                size={28}
                className="hover:text-red-400 cursor-pointer transition-all"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;

import { motion } from "motion/react";
import { educationData } from "../../data/data";
import { IoIosArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
const Education = () => {
  const [dropDown, setDropDown] = useState([]);
  useEffect(() => {
    setDropDown(new Array(educationData.length).fill(false));
  }, []);
  const handleClick = (idx) => {
    let temp = [...dropDown];
    temp[idx] = !temp[idx];
    setDropDown(temp);
  };
  return (
    <div className="flex flex-col items-center my-10 min-w-[100%]">
      <h1 className="text-3xl">Education</h1>
      <div className="mt-4 min-w-[100%]">
        {educationData.map((education, idx) => (
          <div
            key={idx}
            className="border-2 my-3 p-2 rounded-md min-w-[100%] flex justify-between"
          >
            <div>
              <p>{education.name}</p>
              {dropDown[idx] ? <p>{education.institution}</p> : <></>}
            </div>
            <div>
              <IoIosArrowDropdown
                size={25}
                className="hover:text-red-400 cursor-pointer transition-all"
                onClick={() => handleClick(idx)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

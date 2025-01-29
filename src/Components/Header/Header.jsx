import { motion } from "motion/react";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.4, ease: "easeInOut" }}
      className="grid grid-cols-3 items-center gap-5"
    >
      <div className="flex flex-col col-span-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 4, ease: "easeInOut" }}
          className="overflow-hidden whitespace-nowrap text-2xl font-[800]"
        >
          <div className="text-2xl font-bold">Welcome to my portfolio</div>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 5.5, ease: "easeInOut" }}
          className="overflow-hidden whitespace-nowrap text-2xl font-[800]"
        >
          <div className="text-2xl">I am <span className="text-red-400 text-3xl">Adnan Khan</span></div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-1">Right</div>
    </motion.div>
  );
};

export default Header;

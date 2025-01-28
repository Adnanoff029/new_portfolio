import { motion } from "motion/react";
import { navOptions } from "../../data/data";
const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.3, ease: "easeInOut" }}
      className="py-2 text-white sticky top-0 z-50 flex justify-between items-center"
    >
      <div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3, delay: 2, ease: "easeInOut" }}
          className="overflow-hidden whitespace-nowrap text-2xl font-[800]"
        >
          Port<span className="text-red-400">Folio</span>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 2.4, ease: "easeInOut" }}
          className="text-xl overflow-hidden whitespace-nowrap flex gap-5 items-center justify-between"
        >
          {navOptions.map((option, idx) => (
            <a
              key={idx}
              href={option.link}
              className="hover:text-red-400 hover:underline py-1 transition-all"
            >
              {option.name}
            </a>
          ))}
        </motion.div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Navbar;

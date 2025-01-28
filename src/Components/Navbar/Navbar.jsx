import { motion } from "motion/react";
import { navOptions } from "../../data/data";
const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.3, ease: "easeInOut" }}
      className="p-5 text-white sticky top-0 z-50 flex justify-between items-center bg-black shadow-xl shadow-amber-50/8 shadow-amber-50"
    >
      <div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 1.8, ease: "easeInOut" }}
          className="p-1 overflow-hidden whitespace-nowrap text-2xl font-[800] [text-shadow:_0_5px_0_rgb(255_255_255_/_20%)]"
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
            <motion.div
              key={idx}
              className="hover:-translate-y-1 transition-all"
            >
              <a
                href={option.link}
                className="hover:text-red-400 hover:border-b-red-400 transition-all hover:[text-shadow:_0px_10px_0px_rgb(255_255_255_/_10%)]"
              >
                {option.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Navbar;

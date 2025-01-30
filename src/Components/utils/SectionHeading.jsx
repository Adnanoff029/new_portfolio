import { motion } from "motion/react";
const SectionHeading = ({ name }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, delay: 3.5, ease: "easeInOut" }}
      className="text-3xl overflow-hidden whitespace-nowrap text-center"
    >
      {name}
    </motion.div>
  );
};

export default SectionHeading;
